import React from "react";
import styles from "./styles.module.scss";
import ActiveShopItem from "./activeShopItem";
import Category from "../index/category";
import Faq from "../faq";

const SepcialSell = () => {
    return(
        <div className={styles.specialSell + " mt-20 mb-20"}>
            <div className={styles.container + " container w-11/12 mx-auto overflow-hidden"}>
                <div className={styles.title + " mb-10"}>
                    <p className="font-bold text-xl">
                        پیشنهاد  ویژه 
                    </p>
                </div>
                <div className={styles.items + " grid grid-cols-3 gap-4 max-md:grid-cols-2"}>
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
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