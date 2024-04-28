import React from "react";
import styles from "./styles.module.scss";
import Hero from "./hero";
import { SpecialSaleBanner } from "../banner";
import { PrimaryArrowButton } from "../button";
import Category from "./category";
import Branch from "./branch";
import Faq from "../faq";
import BlogItem from "../blog/blogItem";

const HomePage = () => {
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


            <div className={styles.indexBlog + " container max-w-6xl w-11/12 mx-auto grid grid-cols-2 max-md:flex  gap-4 mt-20"}>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>


            <Category />
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