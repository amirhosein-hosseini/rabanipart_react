import React, { useState } from "react";
import styles from "./styles.module.scss";
import { RedPrimaryButton } from "../button";
import { Link } from "react-router-dom";
import AnimatedNumber from "../animation/animatedNumber";

const Hero = () => {

    const [searchValue , setSearchValue] = useState(null);


    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };


    return(
        <div className={styles.hero + " w-full h-[105vh] max-md:h-[50vh] flex items-center justify-end mt-[-10px] max-md:mt-[-40px]"}>
            <div className={styles.herocontainer + " container max-w-6xl w-11/12 mx-auto text-right flex flex-col gap-20 max-md:gap-12 max-md:h-[80%] max-md:mt-[90px]"}>
                <div className={styles.search + " relative w-2/3 max-md:w-full max-w-[800px] mx-auto flex justify-end"}>
                    <input 
                        className="w-full h-[60px] max-md:h-[36px] bg-[#4A4A4A] text-white max-md:text-xs rounded-lg pl-14 pr-[160px] max-md:pr-[105px]"
                        type="text" 
                        placeholder="نام و کد قطعه مورد نظر را بنویسید" 
                        value={searchValue}
                        onChange={handleInputChange} 
                    />
                    <div className="absolute top-[11px] right-[14px] max-md:top-[5.5px] max-md:right-[4px]">
                        <Link to={"/search/" + searchValue}>
                            <RedPrimaryButton>
                                جستجو قطعات  
                            </RedPrimaryButton>
                        </Link>
                    </div>
                    <div className="absolute top-[12px] max-md:top-[8px] left-2 w-10 h-10">
                        <img className="max-md:w-6" src="../../images/searchvector.png" about="vector" />
                    </div>
                </div>
                <div className={styles.title + " max-w-2xl max-md:w-full mx-auto mt-auto max-md:mt-[10%]"}>
                    <p className="text-white text-center font-black text-5xl mb-4 max-md:text-sm max-md:text-right leading-[70px]">
                        بازرگانی ربانی ، وارد کننده قطعات یدکی هیوندای و کیا موتورز
                    </p>
                    {/* <p className="text-white font-light max-md:text-right max-md:text-xs">
                        فروشگاه ربانی پارت محصولات وارداتی خود را تحت عنوان سه برند وارد کرده و به دست مشتریان عزیز می رساند، شفاف سازی در صنعت لوازم یدکی خودرو در این دو برند بسیار مشهور و باکیفیت، هدف ربانی پارت همواره تامین کالا اورجینال و باکیفیت می‌باشد.
                    </p> */}
                    <div className={styles.heroTowImage + " max-w-[200px] overflow-hidden mx-auto mt-10"}>
                        <img className="object-cover w-full" src="../../images/kiaandhyundai.png" alt="image" />
                    </div>
                    
                </div>
                <div className={styles.glory + " max-md:hidden flex items-center gap-7 mx-auto"}>
                    <div className={styles.item + " relative"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 170 170" fill="none">
                            <circle cx="85" cy="85" r="84.5" transform="rotate(-180 85 85)" stroke="url(#paint0_linear_1229_5503)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1229_5503" x1="85" y1="-7.62939e-06" x2="85" y2="106.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="#999999" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute flex flex-col gap-2 items-center justfiy-center" style={{top: "50%" , left: "50%", transform: "translate(-50%,-50%"}}>
                            <p className="font-black text-white text-4xl">
                                <AnimatedNumber value={30} />
                                <span className="text-[#EB0E23] ml-[2px]">%</span>
                            </p>
                            <p className="text-white text-xs">
                                پیشرفت 
                            </p>
                        </div>
                    </div>
                    <div className={styles.item + " relative"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 170 170" fill="none">
                            <circle cx="85" cy="85" r="84.5" transform="rotate(-180 85 85)" stroke="url(#paint0_linear_1229_5503)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1229_5503" x1="85" y1="-7.62939e-06" x2="85" y2="106.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="#999999" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute flex flex-col gap-2 items-center justfiy-center" style={{top: "50%" , left: "50%", transform: "translate(-50%,-50%"}}>
                            <p className="font-black text-white text-4xl">
                                <span className="text-[#EB0E23] ml-[2px]">+</span>
                                <AnimatedNumber value={2860} />
                            </p>
                            <p className="text-white text-xs">
                                کالا اصل ، کمیاب  
                            </p>
                        </div>
                    </div>
                    <div className={styles.item + " relative"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 170 170" fill="none">
                            <circle cx="85" cy="85" r="84.5" transform="rotate(-180 85 85)" stroke="url(#paint0_linear_1229_5503)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1229_5503" x1="85" y1="-7.62939e-06" x2="85" y2="106.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="#999999" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute flex flex-col gap-2 items-center justfiy-center" style={{top: "50%" , left: "50%", transform: "translate(-50%,-50%"}}>
                            <p className="font-black text-white text-4xl">
                                <span className="text-[#EB0E23] ml-[2px]">+</span>
                                <AnimatedNumber value={4320} />
                            </p>
                            <p className="text-white text-xs">
                                مشتری 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;