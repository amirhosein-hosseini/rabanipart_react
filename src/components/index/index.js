import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Hero from "./hero";
import { SpecialSaleBanner } from "../banner";
import { PrimaryArrowButton } from "../button";
import Category from "./category";
import Branch from "./branch";
import Faq from "../faq";
import BlogItem from "../blog/blogItem";
import { getAllCategories } from "../../api/home";
import { getAllBlogs } from "../../api/blog";

const HomePage = () => {


    const [categories , setCategories] = useState(null);
    const [blogs , setBlogs] = useState(null);

    // function for get all blogs data
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllBlogs();
            setBlogs(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);

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



    
    return(
        <div>
            <Hero />
            <SpecialSaleBanner />

            <div className={styles.indexContact + " flex flex-col container w-11/12 mx-auto mt-20 mb-20"}>
                <div className={styles.header + " text-right flex flex-col gap-2"}>
                    <p className="font-bold text-xl max-md:text-sm">
                        راهنمای خرید محصولات لوازم یدکی KIA و HYUNDAI
                    </p>
                    <p className="text-xl max-md:text-xs">
                        برای خرید محصولات ربانی پارت با پشتیبانی ما در تماس باشید
                    </p>
                    <div className={styles.button}>
                        <PrimaryArrowButton>
                            ادامه
                        </PrimaryArrowButton>
                    </div>
                </div>
                <div className={styles.images + " flex items-end justify-between"}>
                    <div className={styles.left + " w-1/4 overflow-hidden"}>
                        <img className="object-cover w-full" src="../../images/indexcontactleftimage.png" alt="vector" />
                    </div>
                    <div className={styles.right + " w-2/3 overflow-hidden"}>
                        <img className="object-cover w-full" src="../../images/indexcontactrightimage.png" alt="vector" />
                    </div>
                </div>
            </div>

            <Faq />


            <div className={styles.indexBlog + " container max-w-6xl w-11/12 mx-auto grid grid-cols-2 max-md:flex  gap-4 mt-20"} style={{direction : "rtl"}}>
                {blogs?.map((item) => (
                    <BlogItem accept={item?.accept} body={item?.body} created_at={item?.created_at} id={item?.id} image={item?.image} slug={item?.slug} status={item?.status} suggest={item?.suggest} time={item?.time} title={item?.title} updated_at={item?.updated_at} user_id={item?.user_id} />
                ))}
            </div>


            <Category data={categories} />
            <Branch />

            <div className={styles.indexBottomVector + " container w-11/12 mx-auto mt-20 max-w-5xl overflow-hidden"}>
                <img className="object-cover w-full" src="../../images/indexbottomvector.png" alt="vector" />
            </div>


            <div className={styles.appInstall + " container max-w-5xl w-11/12 mx-auto flex items-center justify-center mt-20 mb-20"}>
                <button className="bg-black px-10 py-4 text-white text-xl max-md:text-xs max-md:px-5 font-bold rounded-lg">
                    نصب اپلیکیشن هوشمند گیرپاچ 
                </button>
            </div>
        </div>
    )
}

export default HomePage;