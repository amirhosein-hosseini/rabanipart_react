import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ActiveShopItem from "./activeShopItem";
import Category from "../index/category";
import Faq from "../faq";
import { getAllCategories } from "../../api/home";
import { getAllProducts } from "../../api/shop";
import NotActiveShopItem from "./notActiveShopItem";

const SepcialSell = () => {


    const [categories , setCategories] = useState(null);
    const [products , setProducts] = useState(null);


    // function for get all categories data
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllCategories();
            setCategories(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);


    // get data for product items
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllProducts("&suggest=1");
            setProducts(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);


    const parsToArray = (string) => {
        let actualArray = JSON.parse(string);
        return actualArray
    }

    return(
        <div className={styles.specialSell + " mt-40 mb-20 max-md:mt-20"}>
            <div className={styles.container + " container w-11/12 max-w-5xl mx-auto overflow-hidden"}>
                <div className={styles.title + " mb-10"}>
                    <p className="font-bold text-xl">
                        پیشنهاد  ویژه 
                    </p>
                </div>
                <div className={styles.items + " grid grid-cols-3 gap-4 max-md:grid-cols-1"}>
                    {products?.map((item) => (
                        item?.vipCount === 0 ? <NotActiveShopItem slug={item?.slug} image={parsToArray(item?.image)[0]} title={item?.title} /> : <ActiveShopItem slug={item?.slug} image={parsToArray(item?.image)[0]} title={item?.title} price={item?.offPrice} />
                    ))}
                </div>
            </div>


            <Category />

            <div className="mt-20">
                <Faq />
            </div>
        </div>
    )
}

export default SepcialSell;