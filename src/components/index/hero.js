import React from "react";
import styles from "./styles.module.scss";
import { RedPrimaryButton } from "../button";
import { Link } from "react-router-dom";

const Hero = () => {
    return(
        <div className={styles.hero + " w-full h-[90vh] flex items-center justify-end mt-[-10px]"}>
            <div className={styles.herocontainer + " container w-11/12 mx-auto text-right flex flex-col gap-12"}>
                <div className={styles.title + " max-w-xl max-md:w-full ml-auto"}>
                    <p className="text-white font-black text-3xl mb-4 max-md:text-lg">
                        ربانی پارت، فروشگاه تخصصی لوازم یدکی
                    </p>
                    <p className="text-white font-light">
                        فروشگاه ربانی پارت محصولات وارداتی خود را تحت عنوان سه برند وارد کرده و به دست مشتریان عزیز می رساند، شفاف سازی در صنعت لوازم یدکی خودرو در این دو برند بسیار مشهور و باکیفیت، هدف ربانی پارت همواره تامین کالا اورجینال و باکیفیت می‌باشد.
                    </p>
                </div>
                <div className={styles.search + " relative w-2/3 max-w-[800px] ml-auto flex justify-end"}>
                    <input 
                        className="w-full h-[50px] bg-[#4A4A4A] text-white rounded-lg pl-14 pr-[150px]"
                        type="text" 
                        placeholder="نام و کد قطعه مورد نظر را بنویسید" 
                    />
                    <div className="absolute top-[6px] right-[8px]">
                        <Link to={"/shop"}>
                            <RedPrimaryButton>
                                جستجو قطعات  
                            </RedPrimaryButton>
                        </Link>
                    </div>
                    <div className="absolute top-2 left-2 w-10 h-10">
                        <img src="../../images/searchvector.png" about="vector" />
                    </div>
                </div>
                <div className={styles.glory + " flex items-center gap-7 ml-auto"}>
                    <div className={styles.item + " flex flex-col gap-2 items-center justfiy-center"}>
                        <p className="font-black text-white text-4xl">
                            <span className="text-[#EB0E23] ml-[2px]">+</span>۱۲۶
                        </p>
                        <p className="text-white text-xl">
                            شعبه توزیع  
                        </p>
                    </div>
                    <div className={styles.item + " flex flex-col gap-2 items-center justfiy-center"}>
                        <p className="font-black text-white text-4xl">
                            <span className="text-[#EB0E23] ml-[2px]">+</span>۲۳۰۰
                        </p>
                        <p className="text-white text-xl">
                            کالا اصل ، کمیاب  
                        </p>
                    </div>
                    <div className={styles.item + " flex flex-col gap-2 items-center justfiy-center"}>
                        <p className="font-black text-white text-4xl">
                            <span className="text-[#EB0E23] ml-[2px]">+</span>۲۳۶۰
                        </p>
                        <p className="text-white text-xl">
                            مشتری 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;