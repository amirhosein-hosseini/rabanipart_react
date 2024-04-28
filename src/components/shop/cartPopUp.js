import React from "react";
import styles from "./styles.module.scss";
import { SecondPrimaryButton } from "../button";
import { Link } from "react-router-dom";

const CartPopUp = () => {

    const handleScroll = () => {
        document.body.classList.remove("noScroll");
    }


    return(
        <div className={styles.cartPopUp + " absolute top-0 left-0 w-full h-full z-50 flex items-start pt-[150px] justify-center"}>
            <div className={styles.container + " rounded-lg overflow-hidden w-5/12 max-md:w-11/12 bg-white"}>
                <div className={styles.header + " bg-[#E14957] flex items-center justify-between px-4 py-1"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none">
                        <path d="M51.3331 15.4876L34.8539 6.6209C33.1039 5.68757 31.0331 5.68757 29.2831 6.6209L12.8331 15.4876C11.6372 16.1584 10.8789 17.4417 10.8789 18.8417C10.8789 20.2709 11.6081 21.5542 12.8331 22.1959L29.3122 31.0626C30.1872 31.5292 31.1497 31.7626 32.0831 31.7626C33.0164 31.7626 34.0081 31.5292 34.8539 31.0626L51.3331 22.1959C52.5289 21.5542 53.2872 20.2709 53.2872 18.8417C53.2872 17.4417 52.5289 16.1584 51.3331 15.4876Z" fill="white"/>
                        <path d="M26.6006 34.1541L11.2882 26.5124C10.0923 25.8999 8.75065 25.9874 7.61315 26.6582C6.50482 27.3582 5.83398 28.5541 5.83398 29.8666V44.3332C5.83398 46.8416 7.23398 49.0874 9.47982 50.2249L24.7923 57.8666C25.3173 58.1291 25.9007 58.2749 26.484 58.2749C27.1548 58.2749 27.8548 58.0707 28.4673 57.7207C29.5757 57.0207 30.2465 55.8249 30.2465 54.5124V40.0457C30.2173 37.5374 28.8173 35.2916 26.6006 34.1541Z" fill="white"/>
                        <path d="M58.3345 29.8666V37.0416C56.9345 36.6332 55.447 36.4582 53.9595 36.4582C49.9928 36.4582 46.1137 37.8291 43.0512 40.2791C38.8512 43.5749 36.4595 48.5624 36.4595 53.9582C36.4595 55.3874 36.6345 56.8166 37.0137 58.1874C36.5762 58.1291 36.1387 57.9541 35.7303 57.6916C34.622 57.0207 33.9512 55.8249 33.9512 54.5124V40.0457C33.9512 37.5374 35.3512 35.2916 37.5678 34.1541L52.8803 26.5124C54.0762 25.8999 55.4178 25.9874 56.5553 26.6582C57.6637 27.3582 58.3345 28.5541 58.3345 29.8666Z" fill="white"/>
                        <path d="M64.109 45.646C61.7173 42.7002 58.0715 40.8335 53.959 40.8335C50.8673 40.8335 48.009 41.9127 45.7632 43.721C42.7298 46.1127 40.834 49.8168 40.834 53.9585C40.834 58.071 42.7007 61.7168 45.6465 64.1085C47.8923 65.9752 50.809 67.0835 53.959 67.0835C57.284 67.0835 60.2882 65.8293 62.6215 63.8168C65.334 61.396 67.084 57.896 67.084 53.9585C67.084 50.8085 65.9757 47.8918 64.109 45.646ZM56.9632 54.7752C56.9632 55.5335 56.5548 56.2627 55.9132 56.6418L51.8007 59.0918C51.4507 59.296 51.0715 59.4127 50.6632 59.4127C49.934 59.4127 49.2048 59.0335 48.7965 58.3627C48.184 57.3127 48.5048 55.971 49.5548 55.3585L52.5882 53.5502V49.8752C52.5882 48.6793 53.5798 47.6877 54.7757 47.6877C55.9715 47.6877 56.9632 48.6793 56.9632 49.8752V54.7752Z" fill="#29BE2F"/>
                    </svg>
                    <p className="text-sm text-white">
                        این کالا به سبد خرید شما اضافه گردید . 
                    </p>
                </div>
                <div className={styles.wrapper + " p-3"}>
                    <div className={styles.old}>
                        <p className="font-bold mb-3">
                            شماره شاسی ثبت شده  
                        </p>
                        <div className="relative bg-[#D9D9D94D] flex items-center text-right p-2 mb-2">
                            <p className="text-right ml-auto ">
                                34fgg4567
                            </p>
                            <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32" fill="none">
                                <rect x="0.32" y="0.32" width="31.36" height="31.36" fill="#F61C1C" stroke="black" stroke-width="0.64"/>
                            </svg>
                        </div>
                        <div className="relative bg-[#D9D9D94D] flex items-center text-right p-2 mb-2">
                            <p className="text-right ml-auto ">
                                34fgg4567
                            </p>
                            <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32" fill="none">
                                <rect x="0.32" y="0.32" width="31.36" height="31.36" fill="#F61C1C" stroke="black" stroke-width="0.64"/>
                            </svg>
                        </div>
                        <div className="relative bg-[#D9D9D94D] flex items-center text-right p-2 mb-2">
                            <p className="text-right ml-auto ">
                                34fgg4567
                            </p>
                            <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32" fill="none">
                                <rect x="0.32" y="0.32" width="31.36" height="31.36" fill="#F61C1C" stroke="black" stroke-width="0.64"/>
                            </svg>
                        </div>
                    </div>
                    <div className={styles.new + " mt-4 mb-3"}>
                        <p className="font-bold mb-3">
                            اضافه کردن شماره شاسی جدید 
                        </p>
                        <form>
                            <div className="relative">
                                <input className="w-full bg-[#D9D9D94D] p-2 text-black" type="text" />
                                <svg className="absolute left-2 top-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5357 3.80763C15.7073 2.63606 17.6067 2.63606 18.7783 3.80763L20.1925 5.22185C21.3641 6.39342 21.3641 8.29292 20.1925 9.46449L9.80003 19.857C9.66043 19.9966 9.48263 20.0918 9.28904 20.1305L3.98573 21.1911C3.28601 21.3311 2.66909 20.7142 2.80904 20.0144L3.8697 14.7111C3.90842 14.5175 4.00357 14.3397 4.14317 14.2001L14.5357 3.80763ZM17.3641 5.22185L18.7783 6.63606C19.1688 7.02659 19.1688 7.65975 18.7783 8.05028L17.3641 9.46449L14.5357 6.63607L15.9499 5.22185C16.3404 4.83132 16.9736 4.83132 17.3641 5.22185ZM13.1215 8.05028L5.77148 15.4003L5.06437 18.9358L8.59991 18.2287L15.9499 10.8787L13.1215 8.05028Z" fill="#35383F"/>
                                </svg>
                            </div>
                        </form>
                    </div>
                    <div className={styles.button}>
                        <Link to={"/basket"}>
                            <SecondPrimaryButton>
                                اضافه کردن به سبد خرید 
                            </SecondPrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPopUp;