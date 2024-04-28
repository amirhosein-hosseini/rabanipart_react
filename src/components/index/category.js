import React from "react";
import styles from "./styles.module.scss";

const Category = () => {
    return(
        <div className={styles.category + " container max-w-5xl w-11/12 flex max-md:grid max-md:grid-cols-3 gap-5 max-md:gap-2 justify-center mx-auto mt-40"}>
            <div className={styles.item + " bg-[#151515] py-7 w-full gap-2 justify-between rounded-xl flex items-center flex-col justify-center"}>
                <div className="w-[60px] max-md:w-[40px] h-[60px] max-md:h-[40px] overflow-hidden">
                    <img className="object-cover w-full h-full" src="../../images/servicecategory.png" alt="icon" />
                </div>
                <p className="text-white max-md:text-xs">
                    خدمات 
                </p>
            </div>
            <div className={styles.item + " bg-[#151515] py-5 w-full gap-2 justify-between rounded-xl flex items-center flex-col justify-center"}>
                <div className="w-[60px] max-md:w-[40px] h-[60px] max-md:h-[40px] overflow-hidden">
                    <img className="object-cover w-full h-full" src="../../images/motorcategory.png" alt="icon" />
                </div>
                <p className="text-white max-md:text-xs">
                    لوازم موتور 
                </p>
            </div>
            <div className={styles.item + " bg-[#151515] py-5 w-full gap-2 justify-between rounded-xl flex items-center flex-col justify-center"}>
                <div className="w-[60px] max-md:w-[40px] h-[60px] max-md:h-[40px] overflow-hidden">
                    <img className="object-cover w-full h-full" src="../../images/bodycategory.png" alt="icon" />
                </div>
                <p className="text-white max-md:text-xs">
                    بدنه  
                </p>
            </div>
            <div className={styles.item + " bg-[#151515] py-5 w-full gap-2 justify-between rounded-xl flex items-center flex-col justify-center"}>
                <div className="w-[60px] max-md:w-[40px] h-[60px] max-md:h-[40px] overflow-hidden">
                    <img className="object-cover w-full h-full" src="../../images/undercategory.png" alt="icon" />
                </div>
                <p className="text-white max-md:text-xs">
                    زیربندی  
                </p>
            </div>
            <div className={styles.item + " bg-[#151515] py-5 w-full gap-2 justify-between rounded-xl flex items-center flex-col justify-center"}>
                <div className="w-[60px] max-md:w-[40px] h-[60px] max-md:h-[40px] overflow-hidden">
                    <img className="object-cover w-full h-full" src="../../images/electriccategory.png" alt="icon" />
                </div>
                <p className="text-white max-md:text-xs">
                    قطعات برقی  
                </p>
            </div>
            <div className={styles.item + " bg-[#151515] py-5 w-full gap-2 justify-between rounded-xl flex items-center flex-col justify-center"}>
                <div className="w-[60px] max-md:w-[40px] h-[60px] max-md:h-[40px] overflow-hidden">
                    <img className="object-cover w-full h-full" src="../../images/electriccategory.png" alt="icon" />
                </div>
                <p className="text-white max-md:text-xs">
                    قطعات برقی  
                </p>
            </div>
        </div>
    )
}

export default Category;