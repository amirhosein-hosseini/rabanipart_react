import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import BlogItem from "./blogItem";
import Faq from "../faq";
import { getAllBlogs } from "../../api/blog";

const ArchiveBlog = () => {


    const [blogs , setBlogs] = useState(null);

    // function for get all blogs data
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllBlogs();
            setBlogs(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);





    return(
        <div className={styles.archiveBlog + " mt-20"}>
            <div className={styles.header + " w-full max-h-[380px] overflow-hidden rounded-br-[135.77px] max-md:rounded-br-[0px]"}>
                <img className="object-contain w-full" src="../../images/blogheader.png" alt="image" />
            </div>

            <div className={styles.items + " container max-w-5xl w-11/12 mx-auto  mt-20 grid grid-cols-2 max-lg:grid-cols-1 gap-5"} style={{direction : "rtl"}}>
                {blogs?.map((item) => (
                    <BlogItem accept={item?.accept} desc={item?.description} body={item?.body} created_at={item?.created_at} id={item?.id} image={item?.image} slug={item?.slug} status={item?.status} suggest={item?.suggest} time={item?.time} title={item?.title} updated_at={item?.updated_at} user_id={item?.user_id} />
                ))}
            </div>


            <div className="mt-20">
                <Faq />
            </div>
        </div>
    )
}

export default ArchiveBlog;