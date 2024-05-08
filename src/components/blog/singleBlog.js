import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { getShowBlog } from "../../api/blog";
import { url } from "../../api/domain";

const SingleBlog = () => {


    const params = useParams();
    const [data,setData] = useState(null);



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

    
    return(
        <div className="my-20" style={{marginTop: "85px"}}>
            <div className={styles.image + " w-full max-h-[380px] overflow-hidden rounded-br-[135.77px] max-md:rounded-br-[0px]"}>
                <img className="object-contain w-full" src={url + data?.image} alt="image" />
            </div>
            <div className={styles.singleBlog + " container w-11/12 mx-auto mt-10"}>
                <div className="header">
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
                <div className={styles.content + " mt-4 p-4"}>
                    <div dangerouslySetInnerHTML={{ __html: data?.body}}></div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog;