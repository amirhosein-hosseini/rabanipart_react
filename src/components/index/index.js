import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Hero from "./hero";
import { SpecialSaleBanner } from "../banner";
import { BlackButton, PrimaryArrowButton } from "../button";
import Category from "./category";
import Branch from "./branch";
import Faq from "../faq";
import BlogItem from "../blog/blogItem";
import { getAllCategories } from "../../api/home";
import { getAllBlogs } from "../../api/blog";
import SecondActiveShopItem from "../shop/secondActiveShopItem";
import { getAllProducts } from "../../api/shop";
import { Link } from "react-router-dom";

const HomePage = () => {


    const [categories , setCategories] = useState(null);
    const [blogs , setBlogs] = useState(null);
    const [products , setProducts] = useState(null);
    const [isMobile , setIsMobile] = useState(false);


    // get data for product items
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllProducts({});
            setProducts(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);


    console.log(products)
    

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

    // function for get all categories data
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllCategories();
            setCategories(data?.data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);

    const parsToArray = (string) => {
        let actualArray = JSON.parse(string);
        return actualArray
    }


    useEffect(() => {
        document.body.style.backgroundColor = '#EDEDED';
        
        // Clean up function to reset the background color when the component unmounts
        return () => {
          document.body.style.backgroundColor = 'white';
        };
    }, []);


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






    
    return(
        <div>
            <Hero />
            <SpecialSaleBanner />



            <div className={styles.bestSellers + " container w-11/12 max-w-7xl mx-auto mt-20"}>
                <div className={styles.headingTitle + " mb-7"}>
                    <p className="text-lg font-bold relative max-md:text-center">
                        محصولات پرفروش ربانی پارت 
                    </p>
                </div>
                <div className={styles.wrapper + "  grid grid-cols-4 gap-5 max-md:grid-cols-2"}>
                    {isMobile === false ? 
                        <>
                            {products?.slice(0, 8).map((item) => (
                                <SecondActiveShopItem slug={item?.slug} image={parsToArray(item?.image)[0]} title={item?.title} price={item?.offPrice} />
                            ))}
                        </> : 
                        <>
                            {products?.slice(0, 4).map((item) => (
                                <SecondActiveShopItem slug={item?.slug} image={parsToArray(item?.image)[0]} title={item?.title} price={item?.offPrice} />
                            ))}
                        </>
                    }
                </div>
                <div className={styles.button + " mt-10"}>
                        <Link to="/shop">
                            <BlackButton>
                                فروشگاه 
                                <svg className="max-md:w-4" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M8.22674 16.0144L10.8622 13.3667L12.4796 11.75C13.1611 11.0654 13.1611 9.95192 12.4796 9.26731L8.22675 4.99469C7.66845 4.43381 6.71606 4.83798 6.71606 5.62156L6.71606 10.2489L6.71606 15.3875C6.71606 16.1794 7.66845 16.5753 8.22674 16.0144Z" fill="white"/>
                                </svg>
                            </BlackButton>
                        </Link>
                </div>
            </div>

            {/* <div className={styles.indexContact + " flex flex-col container w-11/12 mx-auto mt-20 mb-20"}>
                <div className={styles.header + " text-right flex flex-col gap-2"}>
                    <p className="font-bold text-xl max-md:text-sm">
                        راهنمای خرید محصولات لوازم یدکی KIA و HYUNDAI
                    </p>
                    <p className="text-xl max-md:text-xs">
                        برای خرید محصولات ربانی پارت با پشتیبانی ما در تماس باشید
                    </p>
                    <div className={styles.button}>
                        <PrimaryArrowButton>
                            ادامه
                        </PrimaryArrowButton>
                    </div>
                </div>
                <div className={styles.images + " flex items-end justify-between"}>
                    <div className={styles.left + " w-2/4 overflow-hidden"}>
                        <img className="object-cover w-full" src="../../images/indexcontactimage.png" alt="vector" />
                    </div>
                    <div className={styles.right + " w-2/5 overflow-hidden"}>
                        <img className="object-cover w-full" src="../../images/indexcontactrightimage.png" alt="vector" />
                    </div>
                </div>
            </div> */}

            


            <div className={styles.indexBlog + " container max-w-7xl w-11/12 mx-auto mt-20"} style={{direction : "rtl"}}>
                <div className={styles.headingTitle + " mb-7"}>
                    <p className="text-lg font-bold relative">
                        با ربانی پارت به روز باشید 
                    </p>
                </div>
                {isMobile === false ?
                    <div className="grid grid-rows-4 max-w-4xl mx-auto grid-cols-2 max-md:flex max-md:flex-col  gap-4" style={{direction: "ltr"}}>
                        {/* {blogs?.map((item) => (
                            <BlogItem accept={item?.accept} desc={item?.description} body={item?.body} created_at={item?.created_at} id={item?.id} image={item?.image} slug={item?.slug} status={item?.status} suggest={item?.suggest} time={item?.time} title={item?.title} updated_at={item?.updated_at} user_id={item?.user_id} />
                        ))} */}
                        {blogs ? 
                            <>
                                <div className="row-span-4 max-md:row-span-2">
                                    <BlogItem heightDisplay={"100%"} accept={blogs[0]?.accept} desc={blogs[0]?.description} body={blogs[0]?.body} created_at={blogs[0]?.created_at} id={blogs[0]?.id} image={blogs[0]?.image} slug={blogs[0]?.slug} status={blogs[0]?.status} suggest={blogs[0]?.suggest} time={blogs[0]?.time} title={blogs[0]?.title} updated_at={blogs[0]?.updated_at} user_id={blogs[0]?.user_id} />
                                </div>
                                <div className="row-span-2">
                                    <BlogItem accept={blogs[1]?.accept} desc={blogs[1]?.description} body={blogs[1]?.body} created_at={blogs[1]?.created_at} id={blogs[1]?.id} image={blogs[1]?.image} slug={blogs[1]?.slug} status={blogs[1]?.status} suggest={blogs[1]?.suggest} time={blogs[1]?.time} title={blogs[1]?.title} updated_at={blogs[1]?.updated_at} user_id={blogs[1]?.user_id} />
                                </div>
                                <div className="row-span-2">
                                    <BlogItem accept={blogs[2]?.accept} desc={blogs[2]?.description} body={blogs[2]?.body} created_at={blogs[2]?.created_at} id={blogs[2]?.id} image={blogs[2]?.image} slug={blogs[2]?.slug} status={blogs[2]?.status} suggest={blogs[2]?.suggest} time={blogs[2]?.time} title={blogs[2]?.title} updated_at={blogs[2]?.updated_at} user_id={blogs[2]?.user_id} />
                                </div>
                                <div className="row-span-2 col-span-2">
                                    <BlogItem accept={blogs[3]?.accept} desc={blogs[3]?.description} body={blogs[3]?.body} created_at={blogs[3]?.created_at} id={blogs[3]?.id} image={blogs[3]?.image} slug={blogs[3]?.slug} status={blogs[3]?.status} suggest={blogs[3]?.suggest} time={blogs[3]?.time} title={blogs[3]?.title} updated_at={blogs[3]?.updated_at} user_id={blogs[3]?.user_id} />
                                </div>
                            </>
                            : ""
                        }
                    </div> : 
                    <div className="max-w-4xl mx-autoflex flex-col  gap-4" style={{direction: "ltr"}}>
                    {/* {blogs?.map((item) => (
                        <BlogItem accept={item?.accept} desc={item?.description} body={item?.body} created_at={item?.created_at} id={item?.id} image={item?.image} slug={item?.slug} status={item?.status} suggest={item?.suggest} time={item?.time} title={item?.title} updated_at={item?.updated_at} user_id={item?.user_id} />
                    ))} */}
                    {blogs ? 
                        <div className="flex flex-col gap-4">
                            <div>
                                <BlogItem accept={blogs[0]?.accept} desc={blogs[0]?.description} body={blogs[0]?.body} created_at={blogs[0]?.created_at} id={blogs[0]?.id} image={blogs[0]?.image} slug={blogs[0]?.slug} status={blogs[0]?.status} suggest={blogs[0]?.suggest} time={blogs[0]?.time} title={blogs[0]?.title} updated_at={blogs[0]?.updated_at} user_id={blogs[0]?.user_id} />
                            </div>
                            <div>
                                <BlogItem accept={blogs[1]?.accept} desc={blogs[1]?.description} body={blogs[1]?.body} created_at={blogs[1]?.created_at} id={blogs[1]?.id} image={blogs[1]?.image} slug={blogs[1]?.slug} status={blogs[1]?.status} suggest={blogs[1]?.suggest} time={blogs[1]?.time} title={blogs[1]?.title} updated_at={blogs[1]?.updated_at} user_id={blogs[1]?.user_id} />
                            </div>
                        </div>
                         : ""
                    }
                </div>
                }
            </div>

            <div className={styles.arrowKey1 + " flex items-center justify-center mt-20"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.3333 28.0003C51.3333 40.887 40.8866 51.3337 27.9999 51.3337C15.1133 51.3337 4.66659 40.887 4.66659 28.0003C4.66659 15.1137 15.1133 4.66699 27.9999 4.66699C40.8866 4.66699 51.3333 15.1137 51.3333 28.0003ZM27.9999 40.3919L17.9417 30.3337L20.4166 27.8588L26.2499 33.6921L26.2499 16.3337L29.7499 16.3337L29.7499 33.6921L35.5833 27.8588L38.0581 30.3337L27.9999 40.3919Z" fill="#D2D2D2"/>
                </svg>
            </div>

            <div className="max-w-[900px] w-11/12 mx-auto">
                <div className="overflow-hidden rounded-xl mt-20">
                    {/* <video className="w-full object-cover rounded-xl">
                        <source src="../../images/video.mp4"></source>
                    </video> */}
                    <iframe src="https://www.namasha.com/embed/zJtVqyVA" className="object-cover w-full h-[400px] max-md:h-[200px]" frameborder="0" scrolling="no" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
                <div className={styles.button + " mt-10 flex justify-end"}>
                    <Link to={"/about"}>
                        <button className="bg-[#d9d9d9] px-5 py-2 text-black font-bold rounded-xl">درباره ربانی پارت</button>
                    </Link>
                </div>
            </div>

            {/* <Category data={categories} /> */}
            <Branch />

            <div className={styles.indexBottomVector + " container w-11/12 mx-auto mt-20 max-w-5xl overflow-hidden"}>
                <img className="object-contain w-full" src="../../images/indexbottomvector.png" alt="vector" />
            </div>


            <div className={styles.appInstall + " container max-w-5xl w-11/12 mx-auto flex items-center justify-center mt-10 mb-20"}>
                <p className="text-black px-10 py-4 text-2xl max-md:text-[10px] text-center max-md:px-5 font-bold rounded-lg">
                    وب اپلیکیشن هوشمند گیرپاژ  , پلتفرم هوشمند خرید و فروش قطعات خودرو 
                </p>
            </div>
            <Faq />
        </div>
    )
}

export default HomePage;