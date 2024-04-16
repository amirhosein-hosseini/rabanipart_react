import React from "react";
import styles from "./styles.module.scss";

const BlogItem = () => {
    return(
        <div className={styles.blogItem + " h-[369px] flex items-center gap-3 rounded-lg bg-[#E14957]"}>
            <div className={styles.image + " w-1/2 h-full overflow-hidden rounded-tl-lg rounded-tr-[0px] rounded-bl-lg rounded-br-[124px]"}>
                <img className="object-cover w-full h-full" src="../../images/blogitemimage.png" alt="image" />
            </div>
            <div className={styles.desc + " w-1/2 flex flex-col justify-between h-full px-3 py-5"}>
                <p className="text-white text-[8px]">
                    تعمیر و نگهداری، مقالات آموزشی و معرفی قطعات خودرو
                </p>
                <p className="text-white text-sm font-bold">
                    رایج ترین مشکلات خودروهای هیوندای چیست؟
                </p>
                <p className="text-white text-xs font-light leading-5">
                    اگر می‌خواهید در آینده نزدیک یکی از خودروهای شرکت هیوندای را بخرید یا اکنون مالک یکی از آن‌ها هستید، 
                    باید با رایج‌ترین مشکلات هیوندای و نحوه رسیدگی موثر به آن‌ها آشنا شوید...اگر می‌خواهید در آینده نزدیک یکی از خودروهای شرکت هیوندای را بخرید یا اکنون مالک یکی از آن‌ها هستید، 
                    باید با رایج‌ترین مشکلات هیوندای و نحوه رسیدگی موثر به آن‌ها آشنا شوید... 
                </p>
                <button>
                    ادامه
                </button>
            </div>
        </div>
    )
}

export default BlogItem;