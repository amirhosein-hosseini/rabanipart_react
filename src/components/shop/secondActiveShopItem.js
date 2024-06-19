import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { prefix, url } from "../../api/domain";

const SecondActiveShopItem = ({image , price , title , slug}) => {

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

    const formatNumberWithThousandSeparator = (number) => {
        return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }




    return(
        <Link to={"/product/" + slug}>
            <div className={styles.shopItem + " bg-white max-md:h-full max-md:border-none max-md:items-center max-md:gap-5 rounded-xl"}>
                <div className={styles.image + " relative z-10 w-full overflow-hidden rounded-lg"}>
                    <svg className="max-md:w-5 absolute top-3 left-3 max-md:top-1 max-md:left-1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 35 35" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.28931 6.2132C3.28931 5.43908 3.91686 4.81152 4.69099 4.81152H5.30555C7.23511 4.81152 8.91706 6.12475 9.38504 7.99669L9.64001 9.01657H26.4265C29.1167 9.01657 31.115 11.5077 30.5314 14.1338L28.974 21.1422C28.5465 23.0662 26.84 24.4351 24.8691 24.4351H13.8882C11.9586 24.4351 10.2767 23.1218 9.8087 21.2499L6.66538 8.67661C6.50939 8.05263 5.94874 7.61489 5.30555 7.61489H4.69099C3.91686 7.61489 3.28931 6.98733 3.28931 6.2132ZM10.3409 11.8199L12.5284 20.57C12.6844 21.194 13.245 21.6317 13.8882 21.6317H24.8691C25.5261 21.6317 26.0949 21.1754 26.2374 20.5341L27.7948 13.5257C27.9894 12.6503 27.3233 11.8199 26.4265 11.8199H10.3409Z" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8017 30.042C14.9629 30.042 15.9043 29.1006 15.9043 27.9394C15.9043 26.7782 14.9629 25.8369 13.8017 25.8369C12.6405 25.8369 11.6992 26.7782 11.6992 27.9394C11.6992 29.1006 12.6405 30.042 13.8017 30.042Z" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0154 30.042C26.1766 30.042 27.1179 29.1006 27.1179 27.9394C27.1179 26.7782 26.1766 25.8369 25.0154 25.8369C23.8542 25.8369 22.9128 26.7782 22.9128 27.9394C22.9128 29.1006 23.8542 30.042 25.0154 30.042Z" fill="black"/>
                    </svg>
                    <img className="object-cover w-full h-[250px] max-md:h-[120px]" src={url + image} alt="image" />
                </div>
                <div className={styles.footer + " relative rounded-bl-xl rounded-br-xl bg-[#151515] h-[80px] z-20 flex flex-col w-full p-3 mt-[-20px]"} style={{direction : "ltr"}}>
                    <div>
                        <p className="text-white text-xs max-md:text-[8px] mb-2 font-bold">{title}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className={styles.price + " flex items-center justify-between w-full"}>
                            <div className="flex items-center gap-1">
                                <p className="text-white text-[14px] max-md:text-[8px] flex"><span>قیمت : </span>{formatNumberWithThousandSeparator(price)}</p>
                                {/* <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70581 4.2645C1.70581 3.80156 2.0811 3.42627 2.54405 3.42627H2.91157C4.06548 3.42627 5.07133 4.21161 5.35119 5.33107L5.50367 5.94098H15.5424C17.1511 5.94098 18.3462 7.43073 17.9972 9.0012L17.0658 13.1924C16.8101 14.3429 15.7896 15.1616 14.611 15.1616H8.04417C6.89025 15.1616 5.88441 14.3762 5.60455 13.2568L3.72478 5.73767C3.63149 5.36452 3.29621 5.10274 2.91157 5.10274H2.54405C2.0811 5.10274 1.70581 4.72745 1.70581 4.2645ZM5.92279 7.61745L7.23096 12.8502C7.32425 13.2233 7.65953 13.4851 8.04417 13.4851H14.611C15.0039 13.4851 15.344 13.2122 15.4293 12.8287L16.3606 8.63752C16.477 8.11403 16.0786 7.61745 15.5424 7.61745H5.92279Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9927 18.5147C8.68712 18.5147 9.25006 17.9518 9.25006 17.2574C9.25006 16.5629 8.68712 16 7.9927 16C7.29829 16 6.73535 16.5629 6.73535 17.2574C6.73535 17.9518 7.29829 18.5147 7.9927 18.5147Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6985 18.5147C15.3929 18.5147 15.9559 17.9518 15.9559 17.2574C15.9559 16.5629 15.3929 16 14.6985 16C14.0041 16 13.4412 16.5629 13.4412 17.2574C13.4412 17.9518 14.0041 18.5147 14.6985 18.5147Z" fill="black"/>
                                </svg> */}
                            </div>
                        </div>
                        {/* <div className={styles.desc + " flex flex-col gap-1"}>
                            <p className="text-black text-[8px] max-md:text-black">الکتریکی</p>
                            <p className="text-black text-[18px] max-md:text-black">دینام</p>
                        </div> */}
                    </div>
                </div>
                <div className="mr-auto w-full flex justify-start pt-4 bg-[#EDEDED]">
                    <div className="flex items-center gap-1 mr-auto">
                        <p className="text-black text-[10px] max-md:text-[8px] font-bold">اطلاعات بیشتر</p>
                        <svg className="max-md:w-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M9.06484 3.88597L7.09503 5.86491L5.88615 7.07324C5.37682 7.58493 5.37682 8.41719 5.88615 8.92888L9.06484 12.1223C9.48211 12.5415 10.1939 12.2394 10.1939 11.6538V8.19526V4.35451C10.1939 3.76268 9.48211 3.46676 9.06484 3.88597Z" fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SecondActiveShopItem;