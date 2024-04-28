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
                        <div className={styles.rabaniLogo + " mt-5 w-2/6 max-md:w-full flex items-center justify-between"}>
                            <div>
                                <div className={styles.logo + " w-1/6 max-md:w-full flex flex-col items-center justify-center"}>
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
                <div className={styles.branch + " bg-[#222222] mt-20 py-10"}>
                    <div className={styles.brancWrapper + " container w-11/12 mx-auto flex max-md:flex-col gap-5 items-center"}>
                        <div className={styles.logo + " w-1/6 max-md:w-full flex flex-col items-center justify-center"}>
                            <div className={styles.item}>
                                <img src="../../images/kia.png" alt="logo" />
                            </div>
                            <div className={styles.item}>
                                <img src="../../images/hyundai.png" alt="logo" />
                            </div>
                        </div>
                        <div className={styles.form + " relative w-3/6 max-md:w-full flex flex-col gap-5 px-10 max-md:px-0"}>
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
                                        className="w-full text-right p-2 rounded-lg"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input 
                                        type="text" 
                                        placeholder="شماره تماس * "
                                        className="w-full text-right p-2 rounded-lg" 
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input 
                                        type="text" 
                                        placeholder="نام فروشگاه " 
                                        className="w-full text-right p-2 rounded-lg"
                                    />
                                </div>
                                <div className={styles.button + " mt-3"}>
                                    <RedPrimaryButton>
                                        ارسال
                                    </RedPrimaryButton>
                                </div>
                            </form>
                        </div>
                        <div className={styles.rabaniLogo + " w-2/6 max-md:w-full"}>
                            <img src="../../images/branchlogo.png" alt="logo" />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Branch;