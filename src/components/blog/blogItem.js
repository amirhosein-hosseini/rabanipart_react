import React from "react";
import styles from "./styles.module.scss";
import { url } from "../../api/domain";
import { Link } from "react-router-dom";

const BlogItem = ({accept , body , created_at , id , image , slug , status , suggest , time , title , updated_at , user_id}) => {
    return(
        <Link to={"/blog/" + id} style={{direction : "ltr"}}>
            <div className={styles.blogItem + " h-[369px] max-md:h-[280px] flex items-center gap-3 rounded-lg bg-[#E14957] mt-20"}>
                <div className={styles.image + " w-1/2 h-full overflow-hidden rounded-tl-lg rounded-tr-[0px] rounded-bl-lg rounded-br-[124px]"}>
                    <img className="object-cover w-full h-full" src={url + image} alt="image" />
                </div>
                <div className={styles.desc + " w-1/2 flex flex-col justify-between h-full px-3 py-5"}>
                    {/* <p className="text-white text-[8px]">
                        تعمیر و نگهداری، مقالات آموزشی و معرفی قطعات خودرو
                    </p> */}
                    <p className="text-white text-sm font-bold max-md:text-xs">
                        {title}
                    </p>
                    <div className="text-white text-xs font-light leading-5 max-md:text-[9px]" dangerouslySetInnerHTML={{ __html: body}} />
                    <div className="w-full flex justify-end">
                        <button className="relative bg-[#1C1C1C] text-right rounded-lg font-bold text-white flex w-[60px] justify-center items-center text-xs">
                            <p className="mr-2">
                                ادامه   
                            </p>
                            <svg className="absolute right-[-6px]" xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 20 18" fill="none">
                                <path d="M13.228 1.79834H6.72844C3.90523 1.79834 2.22217 3.32547 2.22217 5.88711V11.7775C2.22217 14.3461 3.90523 15.8733 6.72844 15.8733H13.2203C16.0435 15.8733 17.7265 14.3461 17.7265 11.7845V5.88711C17.7343 3.32547 16.0512 1.79834 13.228 1.79834ZM15.0429 9.2088L11.7156 12.2279C11.5992 12.3334 11.4519 12.3827 11.3045 12.3827C11.1571 12.3827 11.0098 12.3334 10.8934 12.2279C10.6685 12.0238 10.6685 11.686 10.8934 11.4819L13.228 9.36362H5.32459C5.00659 9.36362 4.74289 9.12435 4.74289 8.83581C4.74289 8.54727 5.00659 8.308 5.32459 8.308H13.228L10.8934 6.18972C10.6685 5.98563 10.6685 5.64784 10.8934 5.44375C11.1184 5.23966 11.4907 5.23966 11.7156 5.44375L15.0429 8.46282C15.1515 8.56135 15.2136 8.69506 15.2136 8.83581C15.2136 8.97656 15.1515 9.11027 15.0429 9.2088Z" fill="#E14957"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogItem;