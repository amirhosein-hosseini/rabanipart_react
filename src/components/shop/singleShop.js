import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { RedPrimaryButton } from "../button";
import ActiveShopItem from "./activeShopItem";
import Faq from "../faq";
import MyImageGallery from "../gallery/imageGallery";
import { SpecialSaleBanner } from "../banner";
import CartPopUp from "./cartPopUp";


const SingleShop = () => {


    const [showPopUp , setShowPopUp] = useState(false);
    const propUpRef = useRef(null);



    const addToCart = () => {
        setShowPopUp(true)
    }


    // funcotion for handeling show popup
    useEffect(() => {
        if (showPopUp) {
            // Disable scrolling
            document.body.classList.add("noScroll");
        } else {
            // Enable scrolling
            document.body.classList.remove("noScroll");
        }
    }, [showPopUp]);


    // Function to handle the click event outside of the popup
    const handleClickOutside = (event) => {
        if (propUpRef.current && !propUpRef.current.contains(event.target)) {
            setShowPopUp(false);
        }
    };


    // Add event listener when the component mounts
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            // Cleanup: remove event listener when the component unmounts
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    // funcotion for handeling show popup
    useEffect(() => {
        if (showPopUp) {
            // Disable scrolling
            document.body.classList.add("noScroll");
        } else {
            // Enable scrolling
            document.body.classList.remove("noScroll");
        }
    }, [showPopUp]);


    return(
        <>
            <div className={styles.singleShop + " relative mb-20 mt-20 max-md:mt-20"}>

                {showPopUp === true? 
                    <div onClick={() => setShowPopUp(false)}>
                        <CartPopUp />
                    </div>
                    : ""
                }

                <SpecialSaleBanner />

                <div className={styles.container + " container w-11/12 mx-auto flex flex-col gap-20"}>
                    <div className={styles.image + " flex gap-10 max-w-5xl mt-20 mx-auto gap-10 items-center max-md:flex-col-reverse max-md:mt-10"}>
                        <div className={styles.video + " w-1/2 max-md:w-full"}>
                            <img className="object-cover w-full h-full" src="../../images/video.png" alt="image" />
                        </div>
                        <div className={styles.gallery + " w-1/2 max-md:w-full"}>
                            <MyImageGallery />
                        </div>
                    </div>


                    <div className={styles.desc + " flex flex-col gap-7"}>
                        <p className={styles.title + " font-bold text-xl max-md:text-lg max-md:mb-6"}>
                            ميل لنگ هیوندای آزرا اصلی 2008 23110-3C140
                        </p>
                        <div className={styles.desc + "  flex flex-col gap-8 relative border border-[#8F8F8F] rounded-xl py-10 px-4 max-md:border-none"}>
                            <p className={styles.label + " absolute top-[-15px] left-[17px] max-md:left-0 bg-[#FC0F0F] text-white px-2 rounded-2xl text-center text-xs max-md:text-[12px]"}>به روز رسانی هر  <span className="text-lg mr-2 max-md:text-[11px]">۱۲ ساعت</span></p>
                            <p className="max-md:text-sm">میل لنگ محور اصلی محرک موتور هر خودرو میباشد  که توسط شاتون ها به حرکت در میآیند و نیرو را از موتور به گیربکس و سپس به دیفرانسیل و در نهایت به چرخ ها منتقل میکند تا خودرو به حرکت دربیاید</p>
                            <div className={styles.footer + " flex max-md:flex-col-reverse items-center justify-between"}>
                                <div className="max-md:flex max-md:flex-row-reverse max-md:justify-between max-md:items-center max-md:w-full">
                                    <p className="font-bold">۱۲۰,۰۰۰,۰۰۰ تومان</p>
                                    <div onClick={addToCart}>
                                        <RedPrimaryButton>
                                            افزودن به سبد خرید 
                                        </RedPrimaryButton>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 max-md:w-full max-md:mb-5">
                                    <div className="flex justify-end items-center gap-1">
                                        <p>ربانی پارت </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="none">
                                            <path d="M36.6663 11.0626L24.8955 4.72925C23.6455 4.06258 22.1663 4.06258 20.9163 4.72925L9.16634 11.0626C8.31217 11.5417 7.77051 12.4584 7.77051 13.4584C7.77051 14.4792 8.29134 15.3959 9.16634 15.8542L20.9372 22.1876C21.5622 22.5209 22.2497 22.6876 22.9163 22.6876C23.583 22.6876 24.2913 22.5209 24.8955 22.1876L36.6663 15.8542C37.5205 15.3959 38.0622 14.4792 38.0622 13.4584C38.0622 12.4584 37.5205 11.5417 36.6663 11.0626Z" fill="#292D32"/>
                                            <path d="M18.9998 24.3959L8.06234 18.9376C7.20817 18.5001 6.24984 18.5626 5.43734 19.0417C4.64567 19.5417 4.1665 20.3959 4.1665 21.3334V31.6667C4.1665 33.4584 5.1665 35.0626 6.77067 35.8751L17.7082 41.3334C18.0832 41.5209 18.4998 41.6251 18.9165 41.6251C19.3957 41.6251 19.8957 41.4792 20.3332 41.2292C21.1248 40.7292 21.604 39.8751 21.604 38.9376V28.6042C21.5832 26.8126 20.5832 25.2084 18.9998 24.3959Z" fill="#292D32"/>
                                            <path d="M41.6667 21.3334V26.4584C40.6667 26.1667 39.6042 26.0417 38.5417 26.0417C35.7083 26.0417 32.9375 27.0209 30.75 28.7709C27.75 31.1251 26.0417 34.6876 26.0417 38.5417C26.0417 39.5626 26.1667 40.5834 26.4375 41.5626C26.125 41.5209 25.8125 41.3959 25.5208 41.2084C24.7292 40.7292 24.25 39.8751 24.25 38.9376V28.6042C24.25 26.8126 25.25 25.2084 26.8333 24.3959L37.7708 18.9376C38.625 18.5001 39.5833 18.5626 40.3958 19.0417C41.1875 19.5417 41.6667 20.3959 41.6667 21.3334Z" fill="#292D32"/>
                                            <path d="M45.7915 32.6458C44.0832 30.5416 41.479 29.2083 38.5415 29.2083C36.3332 29.2083 34.2915 29.9791 32.6873 31.2708C30.5207 32.9791 29.1665 35.6249 29.1665 38.5833C29.1665 40.3333 29.6665 41.9999 30.5207 43.4166C31.0832 44.3541 31.7915 45.1666 32.6248 45.8333H32.6457C34.2498 47.1666 36.3123 47.9583 38.5415 47.9583C40.9165 47.9583 43.0623 47.0833 44.7082 45.6249C45.4373 44.9999 46.0623 44.2499 46.5623 43.4166C47.4165 41.9999 47.9165 40.3333 47.9165 38.5833C47.9165 36.3333 47.1248 34.2499 45.7915 32.6458ZM43.2498 37.4166L38.2498 42.0416C37.9582 42.3124 37.5623 42.4583 37.1873 42.4583C36.7915 42.4583 36.3957 42.3124 36.0832 41.9999L33.7707 39.6874C33.1665 39.0833 33.1665 38.0833 33.7707 37.4791C34.3748 36.8749 35.3748 36.8749 35.979 37.4791L37.229 38.7291L41.1248 35.1249C41.7498 34.5416 42.7498 34.5833 43.3332 35.2083C43.9373 35.8541 43.8957 36.8332 43.2498 37.4166Z" fill="#29BE2F"/>
                                        </svg>
                                    </div>
                                    <div className="flex justify-end items-center gap-1">
                                        <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 46" fill="none">
                                            <path d="M35.535 7.89669L24.9934 3.94836C23.9009 3.54586 22.1184 3.54586 21.0259 3.94836L10.4842 7.89669C8.45253 8.66336 6.8042 11.04 6.8042 13.2059V28.7309C6.8042 30.2834 7.82003 32.3342 9.06587 33.2542L19.6075 41.1317C21.4667 42.5309 24.5142 42.5309 26.3734 41.1317L36.915 33.2542C38.1609 32.315 39.1767 30.2834 39.1767 28.7309V13.2059C39.1959 11.04 37.5475 8.66336 35.535 7.89669ZM29.67 18.63L21.4284 26.8717C21.1409 27.1592 20.7767 27.2934 20.4125 27.2934C20.0484 27.2934 19.6842 27.1592 19.3967 26.8717L16.33 23.7667C15.7742 23.2109 15.7742 22.2909 16.33 21.735C16.8859 21.1792 17.8059 21.1792 18.3617 21.735L20.4317 23.805L27.6575 16.5792C28.2134 16.0234 29.1334 16.0234 29.6892 16.5792C30.245 17.135 30.245 18.0742 29.67 18.63Z" fill="#292D32"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.related + " flex flex-col gap-7"}>
                        <p className={styles.title + " font-bold text-xl"}>
                            محصولات مرتبط 
                        </p>
                        <div className={styles.items + " grid grid-cols-4 gap-4 max-w-5xl mx-auto max-lg:grid-cols-3 max-md:grid-cols-1"}>
                            <ActiveShopItem />
                            <ActiveShopItem />
                            <ActiveShopItem />
                            <ActiveShopItem />
                        </div>
                    </div>



                    <div className="mt-20 max-md:mt-0">
                        <Faq />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleShop;