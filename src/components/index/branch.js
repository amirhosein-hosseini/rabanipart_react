import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { RedPrimaryButton } from "../button";

const Branch = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
      };
  
      // Initial check on component mount
      handleResize();
  
      // Listen for window resize events
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to remove the resize event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);



    return(
        <>
            {isMobile === true ? 
                <div className={styles.branch + " bg-[#222222] mt-20 py-10"}>
                    <div className={styles.brancWrapper + " container w-11/12 mx-auto flex max-md:flex-col gap-5 items-center"}>
                        <div className={styles.form + " relative w-3/6 max-md:w-full flex flex-col gap-5 px-10 max-md:px-0"}>
                            <p className="text-center text-4xl text-[#EB0E23]">
                                اخذ شعبه 
                            </p>
                            <form className="flex flex-col gap-2">
                                <div className={styles.formGroup}>
                                    <input 
                                        type="text" 
                                        placeholder="اسم و فامیل * " 
                                        className="w-full text-right p-2 rounded-lg max-md:text-sm"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input 
                                        type="text" 
                                        placeholder="شماره تماس * "
                                        className="w-full text-right p-2 rounded-lg max-md:text-sm" 
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input 
                                        type="text" 
                                        placeholder="نام فروشگاه " 
                                        className="w-full text-right p-2 rounded-lg max-md:text-sm"
                                    />
                                </div>
                                <div className={styles.button + " mt-3 flex items-center justify-center"}>
                                    <RedPrimaryButton>
                                        ارسال
                                    </RedPrimaryButton>
                                </div>
                            </form>
                        </div>
                        <div className={styles.rabaniLogo + " mt-5 w-2/6 max-md:w-full flex max-md:flex-col-reverse items-center justify-between"}>
                            <div>
                                <div className={styles.logo + " w-1/6 max-md:w-full flex flex-col max-md:flex-row max-md:mt-3 max-md:gap-4 items-center justify-center"}>
                                    <div className={styles.item + " max-w-[60px] overflow-hidden"}>
                                        <img className="object-cover w-full" src="../../images/kia.png" alt="logo" />
                                    </div>
                                    <div className={styles.item + " max-w-[60px] overflow-hidden"}>
                                        <img className="object-cover w-full" src="../../images/hyundai.png" alt="logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-[120px] overflow-hidden">
                                <img className="object-cover w-full" src="../../images/branchlogo.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div> 
            : 
                <div className={styles.branch + " bg-[#222222] mt-20 py-20"}>
                    <div className={styles.brancWrapper + " container w-11/12 max-w-5xl mx-auto flex max-md:flex-col gap-5 items-center"}>
                        {/* <div className={styles.logo + " w-1/6 max-md:w-full flex flex-col items-center justify-center"}>
                            <div className={styles.item}>
                                <img src="../../images/kia.png" alt="logo" />
                            </div>
                            <div className={styles.item}>
                                <img src="../../images/hyundai.png" alt="logo" />
                            </div>
                        </div> */}
                        <div className={styles.form + " relative w-4/6 max-md:w-full flex flex-col gap-5 px-10 max-md:px-0"}>
                            <svg className="max-md:hidden absolute left-0 top-0 h-full" width="13" height="510" viewBox="0 0 13 510" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.984383 6.5434C0.984383 9.61521 3.47458 12.1054 6.54639 12.1054C9.6182 12.1054 12.1084 9.61521 12.1084 6.5434C12.1084 3.47159 9.6182 0.981392 6.54639 0.981392C3.47458 0.981392 0.984383 3.47159 0.984383 6.5434ZM0.984383 503.474C0.984383 506.545 3.47458 509.036 6.54639 509.036C9.6182 509.036 12.1084 506.545 12.1084 503.474C12.1084 500.402 9.6182 497.912 6.54639 497.912C3.47458 497.912 0.984383 500.402 0.984383 503.474ZM5.50351 6.5434V503.474H7.58926V6.5434H5.50351Z" fill="url(#paint0_linear_216_929)"/>
                                <defs>
                                <linearGradient id="paint0_linear_216_929" x1="7.04639" y1="6.5434" x2="7.04639" y2="503.474" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E14957"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <svg className="max-md:hidden absolute right-0 top-0 h-full" width="13" height="510" viewBox="0 0 13 510" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.984383 6.5434C0.984383 9.61521 3.47458 12.1054 6.54639 12.1054C9.6182 12.1054 12.1084 9.61521 12.1084 6.5434C12.1084 3.47159 9.6182 0.981392 6.54639 0.981392C3.47458 0.981392 0.984383 3.47159 0.984383 6.5434ZM0.984383 503.474C0.984383 506.545 3.47458 509.036 6.54639 509.036C9.6182 509.036 12.1084 506.545 12.1084 503.474C12.1084 500.402 9.6182 497.912 6.54639 497.912C3.47458 497.912 0.984383 500.402 0.984383 503.474ZM5.50351 6.5434V503.474H7.58926V6.5434H5.50351Z" fill="url(#paint0_linear_216_929)"/>
                                <defs>
                                <linearGradient id="paint0_linear_216_929" x1="7.04639" y1="6.5434" x2="7.04639" y2="503.474" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E14957"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <p className="text-center text-4xl text-[#EB0E23]">
                                اخذ شعبه 
                            </p>
                            <form className="flex flex-col gap-2">
                                <div className={styles.formGroup}>
                                    <input 
                                        type="text" 
                                        placeholder="اسم و فامیل * " 
                                        className="w-full text-right p-2 rounded-lg py-3"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input 
                                        type="text" 
                                        placeholder="شماره تماس * "
                                        className="w-full text-right p-2 rounded-lg py-3" 
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input 
                                        type="text" 
                                        placeholder="نام فروشگاه " 
                                        className="w-full text-right p-2 rounded-lg py-3"
                                    />
                                </div>
                                <div className={styles.button + " mt-3 flex items-center gap-3"}>
                                    <RedPrimaryButton>
                                        ارسال
                                        <svg className="absolute left-1 top-2" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                            <path d="M11.5662 2.68262C6.55605 2.68262 2.47339 6.76528 2.47339 11.7754C2.47339 16.7855 6.55605 20.8682 11.5662 20.8682C16.5763 20.8682 20.659 16.7855 20.659 11.7754C20.659 6.76528 16.5763 2.68262 11.5662 2.68262ZM13.1938 14.5032C13.4575 14.7669 13.4575 15.2034 13.1938 15.4671C13.0574 15.6035 12.8846 15.6671 12.7119 15.6671C12.5391 15.6671 12.3663 15.6035 12.23 15.4671L9.0202 12.2573C8.75651 11.9936 8.75651 11.5572 9.0202 11.2935L12.23 8.08374C12.4936 7.82005 12.9301 7.82005 13.1938 8.08374C13.4575 8.34743 13.4575 8.78388 13.1938 9.04757L10.466 11.7754L13.1938 14.5032Z" fill="white"/>
                                        </svg>
                                    </RedPrimaryButton>
                                </div>
                            </form>
                        </div>
                        <div className={styles.rabaniLogo + " w-2/6 max-md:w-full flex flex-col items-center justify-center"}>
                            <img src="../../images/branchlogo.png" alt="logo" />
                            <div className="mt-5 flex items-center gap-5">
                                <div className={styles.item}>
                                    <img src="../../images/kia.png" alt="logo" />
                                </div>
                                <div className={styles.item}>
                                    <img src="../../images/hyundai.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Branch;