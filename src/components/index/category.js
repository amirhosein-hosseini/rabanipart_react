import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { url } from "../../api/domain";

const Category = ({data}) => {



    return(
        <div className={styles.category + " container max-w-5xl w-11/12 grid grid-cols-6 max-md:grid-cols-3 gap-5 max-md:gap-2 justify-center mx-auto mt-40"} style={{direction : "rtl"}}>
            {data?.map((item) => (
                <Link to={"/shop/" + item?.slug} className={styles.item + " bg-[#151515] py-7 w-full gap-2 justify-between rounded-xl flex items-center flex-col justify-center"}>
                    <div className="w-[60px] max-md:w-[40px] h-[60px] max-md:h-[40px] overflow-hidden">
                        <img className="object-cover w-full h-full" src={url + item?.image} alt="icon" />
                    </div>
                    <p className="text-white max-md:text-xs">
                        {item?.name}
                    </p>
                </Link>
            ))}
        </div>
    )
}

export default Category;