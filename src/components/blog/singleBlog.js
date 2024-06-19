import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Link, useParams } from "react-router-dom";
import { getAllBlogs, getShowBlog } from "../../api/blog";
import { url } from "../../api/domain";

const SingleBlog = () => {


    const params = useParams();
    const [data,setData] = useState(null);
    const [blogs,setBlogs] = useState(null);



    // function for get all blogs data
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getShowBlog(params.slug);
            setData(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);


    // function for get all arvhive blogs data
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
        <div className="my-20" style={{marginTop: "100px"}}>
            {/* <div className={styles.image + " w-full max-h-[380px] overflow-hidden rounded-br-[135.77px] max-md:rounded-br-[0px]"}>
                <img className="object-contain w-full" src={url + data?.image} alt="image" />
            </div> */}
            <div className="header container w-11/12 mx-auto mb-4 mt-20"> 
                <div className="desc flex flex-col gap-1">
                    <p className="text-sm">
                        تاریخ : <spa>{data?.created_at}</spa>
                    </p>
                    {/* <p className="text-sm">
                        نویسنده : <span>{data?.user</span>
                    </p> */}
                </div>
                <p className="title font-bold text-xl mt-5">
                    {data?.title}
                </p>
            </div>
            <div className={styles.singleBlog + " flex gap-5 container w-11/12 mx-auto"} style={{alignItems: "start"}}>

                <div className={styles.left + " max-md:hidden w-1/5 p-4 rounded-lg"} style={{background: "rgba(217, 217, 217, 0.2)"}}>
                    <div className={styles.container}>
                        <p className={styles.title + " font-bold"}>
                            آخرین مطالب
                        </p>
                        <div className={styles.items + " flex flex-col gap-4 mt-10"}>
                            {blogs?.slice(0,8).map((item) => (
                                <Link className="text-sm" to={"/blog/" + item?.slug}>
                                    {item?.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.right + " w-4/5 max-md:w-full"}>
                    <div className={styles.content + " p-4 rounded-lg"}>
                        <div dangerouslySetInnerHTML={{ __html: data?.body}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog;