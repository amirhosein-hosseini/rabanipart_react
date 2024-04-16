import React from "react";
import styles from "./styles.module.scss";
import BlogItem from "./blogItem";
import Faq from "../faq";

const ArchiveBlog = () => {
    return(
        <div className={styles.archiveBlog}>
            <div className={styles.header + " w-full overflow-hidden rounded-br-[135.77px]"}>
                <img className="object-contain w-full" src="../../images/blogheader.png" alt="image" />
            </div>

            <div className={styles.items + " container max-w-5xl w-11/12 mx-auto  mt-20 grid grid-cols-2 max-lg:grid-cols-1 gap-5"}>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>


            <div className="mt-20">
                <Faq />
            </div>
        </div>
    )
}

export default ArchiveBlog;