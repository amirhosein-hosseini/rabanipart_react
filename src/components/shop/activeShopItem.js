import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { prefix, url } from "../../api/domain";

const ActiveShopItem = ({image , price , title , slug}) => {

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
            <div className={styles.shopItem + " border border-[#D2D2D2] p-2 h-[380px] max-md:h-full max-md:border-b max-md:border-r-transparent max-md:border-l-transparent max-md:border-b-[#D2D2D2] max-md:flex max-md:items-center max-md:gap-5"}>
                <div className={styles.image + " relative h-[250px] max-md:h-[125px] z-10 w-full overflow-hidden max-md:max-w-[120px] rounded-lg"}>
                    <img className="object-cover w-full h-full" src={url + image} alt="image" />
                    <div className="absolute right-0 top-0 w-full h-full">
                        <img className="w-full h-full" src="../../images/watermark.png" alt="image" />
                    </div>
                </div>
                <div className={styles.footer + " h-full z-20 max-md:bg-transparent flex flex-col max-md:justify-between h-[70%] w-full p-3"} style={{direction : "ltr"}}>
                    <div>
                        <p className="text-black text-xs mb-2 max-md:text-black font-bold">{title}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className={styles.price + " flex items-center justify-between w-full"}>
                            <div className="flex items-center gap-1">
                                <svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.51267 0.343598L1.33468 1.52705L0.611742 2.24965C0.307154 2.55565 0.307154 3.05336 0.611742 3.35936L2.51267 5.26911C2.76221 5.5198 3.1879 5.33915 3.1879 4.98891V2.92064V0.623791C3.1879 0.269862 2.76221 0.0928982 2.51267 0.343598Z" fill="#EB0E23"/>
                                </svg>
                                <p className="text-[#EB0E23] text-[10px] max-md:text-[10px] max-md:text-[#EB0E23] font-bold">اطلاعات بیشتر</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <p className="text-black text-[12px] max-md:text-[12px] flex max-md:text-black"><span>قیمت : </span>{formatNumberWithThousandSeparator(price)}</p>
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
            </div>
        </Link>
    )
}

export default ActiveShopItem;