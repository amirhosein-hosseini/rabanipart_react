import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { DeRedPrimaryButton, RedPrimaryButton, SecondPrimaryButton } from "../button";
import ActiveShopItem from "./activeShopItem";
import Faq from "../faq";
import MyImageGallery from "../gallery/imageGallery";
import { SpecialSaleBanner } from "../banner";
import { Link, useParams } from "react-router-dom";
import { showProduct } from "../../api/shop";
import { getUserChassis } from "../../api/user";
import axios from "axios";
import { prefix, url } from "../../api/domain";
import { getCookie } from "../../api/auth";
import { toast } from "react-toastify";


const SingleShop = () => {


    const token = getCookie('token');
    const params = useParams();
    const [display , setDisplay] = useState(false);
    const [data , setData] = useState(null);
    const [chassis , setChassis] = useState(null);
    const propUpRef = useRef(null);
    const [reload , setReload] = useState(1);
    const [activeChassi , setActiveChassi] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        number: "",
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };




    const handleSubmit = (e) => {

        e.preventDefault();


        axios.post(url + "/" + prefix + '/user/chassis/create', formData , {
            headers : {
                'Authorization' : 'Bearer ' + token,
            }
        })
            .then((response) => {
                toast.success(response.data?.message);
                setReload(reload + 1);
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message)
            })
            .finally(() => {
                console.log("final")
            });
    };


    const handleAddToCart = (e) => {

        e.preventDefault();


        axios.post(url + "/" + prefix + '/cart/add', {postID : data?.product?.id , guarantee : data?.product?.guarantee[0]?.id , chassi_id : activeChassi} , {
            headers : {
                'Authorization' : 'Bearer ' + token,
            }
        })
            .then((response) => {
                toast.success(response.data?.message);
                setDisplay(false)
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message)
            })
            .finally(() => {
                console.log("final")
            });
    };




    // get data for user chassis
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getUserChassis();
            setChassis(data?.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [reload]);




    const addToCart = () => {
        setDisplay(true)
    }


    // funcotion for handeling show popup
    useEffect(() => {
        if (display) {
            // Disable scrolling
            document.body.classList.add("noScroll");
        } else {
            // Enable scrolling
            document.body.classList.remove("noScroll");
        }
    }, [display]);


    // Function to handle the click event outside of the popup
    const handleClickOutside = (event) => {
        if (propUpRef.current && !propUpRef.current.contains(event.target)) {
            setDisplay(false);
        }
    };


    // Add event listener when the component mounts
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            // Cleanup: remove event listener when the component unmounts
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);




    // get data for product item
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await showProduct(params.slug);
            setData(data?.data?.data);
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



    return(
        <>
            <div className={styles.singleShop + " relative mb-20 mt-20 max-md:pt-5 max-md:mt-0"}>

                
                {display === true ?
                    <div className={styles.cartPopUp + ` absolute top-0 left-0 w-full h-full z-50 ${display === true ? "flex" : "hidden"} items-start pt-[150px] max-md:pt-[30px] justify-center`}>
                        <div className={styles.container + " rounded-lg overflow-hidden w-5/12 max-md:w-11/12 bg-white"}>
                            <div className={styles.header + " bg-[#E14957] flex items-center justify-between px-4 py-1"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none">
                                    <path d="M51.3331 15.4876L34.8539 6.6209C33.1039 5.68757 31.0331 5.68757 29.2831 6.6209L12.8331 15.4876C11.6372 16.1584 10.8789 17.4417 10.8789 18.8417C10.8789 20.2709 11.6081 21.5542 12.8331 22.1959L29.3122 31.0626C30.1872 31.5292 31.1497 31.7626 32.0831 31.7626C33.0164 31.7626 34.0081 31.5292 34.8539 31.0626L51.3331 22.1959C52.5289 21.5542 53.2872 20.2709 53.2872 18.8417C53.2872 17.4417 52.5289 16.1584 51.3331 15.4876Z" fill="white"/>
                                    <path d="M26.6006 34.1541L11.2882 26.5124C10.0923 25.8999 8.75065 25.9874 7.61315 26.6582C6.50482 27.3582 5.83398 28.5541 5.83398 29.8666V44.3332C5.83398 46.8416 7.23398 49.0874 9.47982 50.2249L24.7923 57.8666C25.3173 58.1291 25.9007 58.2749 26.484 58.2749C27.1548 58.2749 27.8548 58.0707 28.4673 57.7207C29.5757 57.0207 30.2465 55.8249 30.2465 54.5124V40.0457C30.2173 37.5374 28.8173 35.2916 26.6006 34.1541Z" fill="white"/>
                                    <path d="M58.3345 29.8666V37.0416C56.9345 36.6332 55.447 36.4582 53.9595 36.4582C49.9928 36.4582 46.1137 37.8291 43.0512 40.2791C38.8512 43.5749 36.4595 48.5624 36.4595 53.9582C36.4595 55.3874 36.6345 56.8166 37.0137 58.1874C36.5762 58.1291 36.1387 57.9541 35.7303 57.6916C34.622 57.0207 33.9512 55.8249 33.9512 54.5124V40.0457C33.9512 37.5374 35.3512 35.2916 37.5678 34.1541L52.8803 26.5124C54.0762 25.8999 55.4178 25.9874 56.5553 26.6582C57.6637 27.3582 58.3345 28.5541 58.3345 29.8666Z" fill="white"/>
                                    <path d="M64.109 45.646C61.7173 42.7002 58.0715 40.8335 53.959 40.8335C50.8673 40.8335 48.009 41.9127 45.7632 43.721C42.7298 46.1127 40.834 49.8168 40.834 53.9585C40.834 58.071 42.7007 61.7168 45.6465 64.1085C47.8923 65.9752 50.809 67.0835 53.959 67.0835C57.284 67.0835 60.2882 65.8293 62.6215 63.8168C65.334 61.396 67.084 57.896 67.084 53.9585C67.084 50.8085 65.9757 47.8918 64.109 45.646ZM56.9632 54.7752C56.9632 55.5335 56.5548 56.2627 55.9132 56.6418L51.8007 59.0918C51.4507 59.296 51.0715 59.4127 50.6632 59.4127C49.934 59.4127 49.2048 59.0335 48.7965 58.3627C48.184 57.3127 48.5048 55.971 49.5548 55.3585L52.5882 53.5502V49.8752C52.5882 48.6793 53.5798 47.6877 54.7757 47.6877C55.9715 47.6877 56.9632 48.6793 56.9632 49.8752V54.7752Z" fill="#29BE2F"/>
                                </svg>
                                {/* <p className="text-sm text-white">
                                    این کالا به سبد خرید شما اضافه گردید . 
                                </p> */}
                                <p className="text-white text-2xl cursor-pointer" onClick={() => setDisplay(false)}>
                                    X
                                </p>
                            </div>
                            <div className={styles.wrapper + " p-3"}>
                                {chassis?.length > 0 ?
                                    <div className={styles.old}>
                                        <p className="font-bold mb-3">
                                            شماره شاسی ثبت شده  
                                        </p>
                                        {chassis?.map((item) => (
                                            <div className="relative bg-[#D9D9D94D] flex items-center text-right p-2 mb-2" onClick={() => setActiveChassi(item?.id)}>
                                                <div className="flex gap-2 items-center ml-auto"> 
                                                    <p className="text-right ml-auto ">
                                                        {item?.number}
                                                    </p>
                                                    <p className="text-right ml-auto ">
                                                        {item?.name}
                                                    </p>
                                                </div>
                                                {item?.id === activeChassi ? 
                                                    <svg className="absolute cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32" fill="none">
                                                        <rect x="0.32" y="0.32" width="31.36" height="31.36" fill="#FF3333" stroke="black" stroke-width="0.64"/>
                                                    </svg>
                                                    :
                                                    <svg className="absolute cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32" fill="none">
                                                        <rect x="0.32" y="0.32" width="31.36" height="31.36" fill="transparent" stroke="black" stroke-width="0.64"/>
                                                    </svg>
                                                }
                                            </div>
                                        ))}
                                    </div> : ""
                                }
                                <div className={styles.new + " mt-4 mb-3"}>
                                    <p className="font-bold mb-3">
                                        اضافه کردن شماره شاسی جدید 
                                    </p>
                                    <form className="w-full m-x-auto flex justify-center items-center flex-col gap-4">
                                        <div className={styles.formgroup + " relative w-full flex gap-2 max-md:flex-col"}>
                                            <input
                                                type="text"
                                                name="number"
                                                className="border rounded-lg border-[#FF3333] placeholder-opacity-25 w-full py-3 px-5 text-xs tracking-widest"
                                                placeholder="شماره شاسی را وارد کنید"
                                                value={formData.number}
                                                onChange={handleChange}
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                className="border rounded-lg border-[#FF3333] placeholder-opacity-25 w-full py-3 px-5 text-xs tracking-widest"
                                                placeholder="نام خودرو"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className={styles.button}>
                                            <button style={{border: "1px solid #FF3333"}} className="border-2 border-[#FF3333] text-[#FF3333] text-sm px-3 py-1 rounded-lg" onClick={handleSubmit}>
                                                ثبت 
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                    {activeChassi !== null ?
                                        <div className={styles.button} onClick={handleAddToCart}>
                                            <SecondPrimaryButton>
                                                اضافه کردن به سبد خرید 
                                            </SecondPrimaryButton>
                                        </div>
                                        :
                                        <div className={styles.button}>
                                            <DeRedPrimaryButton>
                                                اضافه کردن به سبد خرید 
                                            </DeRedPrimaryButton>
                                        </div>
                                    }
                            </div>
                        </div>
                    </div> : ""
                }
                <div className="max-md:hidden">
                    <SpecialSaleBanner />
                </div>


                <div className={styles.container + " container w-11/12 mx-auto flex flex-col gap-20"}>
                    <div className={styles.image + " flex justify-center gap-10 max-w-5xl mt-20 mx-auto gap-10 items-center max-md:flex-col-reverse max-md:mt-10"}>
                        {/* <div className={styles.video + " w-1/2 max-md:w-full"}>
                            <img className="object-cover w-full h-full" src="../../images/video.png" alt="image" />
                        </div> */}
                        <div className={styles.gallery + " w-1/2 max-md:w-full"}>
                            {data?.product?.image != undefined ? <MyImageGallery data={parsToArray(data?.product?.image)} /> : ""}
                        </div>
                    </div>


                    <div className={styles.desc + " flex flex-col gap-7"}>
                        <p className={styles.title + " font-bold text-xl max-md:text-lg max-md:mb-6"}>
                            {data?.product?.title}
                        </p>
                        <div className={styles.desc + "  flex flex-col gap-8 relative border border-[#8F8F8F] rounded-xl py-10 px-4 max-md:border-none"}>
                            <p className={styles.label + " absolute top-[-15px] left-[17px] max-md:left-0 bg-[#FC0F0F] text-white px-2 rounded-2xl text-center text-xs max-md:text-[12px]"}>به روز رسانی هر  <span className="text-lg mr-2 max-md:text-[11px]">۱۲ ساعت</span></p>
                            {/* <div className="max-md:text-sm" dangerouslySetInnerHTML={{ __html: data?.product?.body}}>میل لنگ محور اصلی محرک موتور هر خودرو میباشد  که توسط شاتون ها به حرکت در میآیند و نیرو را از موتور به گیربکس و سپس به دیفرانسیل و در نهایت به چرخ ها منتقل میکند تا خودرو به حرکت دربیاید</div> */}
                            <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.product?.review[0]?.body}}></div>
                            {/* <p className="max-md:text-sm">{data?.product?.body}</p> */}
                            <div className={styles.footer + " flex max-md:flex-col-reverse items-center justify-between"}>
                                <div className="max-md:flex max-md:flex-row-reverse max-md:justify-between max-md:items-center max-md:w-full">
                                    <p className="font-bold">{data?.product?.offPrice} تومان</p>
                                    <div onClick={addToCart}>
                                        <RedPrimaryButton>
                                            افزودن به سبد خرید 
                                        </RedPrimaryButton>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 max-md:w-full max-md:mb-5">
                                    <div className="flex justify-end items-center gap-1">
                                        <p>ربانی پارت </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="none">
                                            <path d="M36.6663 11.0626L24.8955 4.72925C23.6455 4.06258 22.1663 4.06258 20.9163 4.72925L9.16634 11.0626C8.31217 11.5417 7.77051 12.4584 7.77051 13.4584C7.77051 14.4792 8.29134 15.3959 9.16634 15.8542L20.9372 22.1876C21.5622 22.5209 22.2497 22.6876 22.9163 22.6876C23.583 22.6876 24.2913 22.5209 24.8955 22.1876L36.6663 15.8542C37.5205 15.3959 38.0622 14.4792 38.0622 13.4584C38.0622 12.4584 37.5205 11.5417 36.6663 11.0626Z" fill="#292D32"/>
                                            <path d="M18.9998 24.3959L8.06234 18.9376C7.20817 18.5001 6.24984 18.5626 5.43734 19.0417C4.64567 19.5417 4.1665 20.3959 4.1665 21.3334V31.6667C4.1665 33.4584 5.1665 35.0626 6.77067 35.8751L17.7082 41.3334C18.0832 41.5209 18.4998 41.6251 18.9165 41.6251C19.3957 41.6251 19.8957 41.4792 20.3332 41.2292C21.1248 40.7292 21.604 39.8751 21.604 38.9376V28.6042C21.5832 26.8126 20.5832 25.2084 18.9998 24.3959Z" fill="#292D32"/>
                                            <path d="M41.6667 21.3334V26.4584C40.6667 26.1667 39.6042 26.0417 38.5417 26.0417C35.7083 26.0417 32.9375 27.0209 30.75 28.7709C27.75 31.1251 26.0417 34.6876 26.0417 38.5417C26.0417 39.5626 26.1667 40.5834 26.4375 41.5626C26.125 41.5209 25.8125 41.3959 25.5208 41.2084C24.7292 40.7292 24.25 39.8751 24.25 38.9376V28.6042C24.25 26.8126 25.25 25.2084 26.8333 24.3959L37.7708 18.9376C38.625 18.5001 39.5833 18.5626 40.3958 19.0417C41.1875 19.5417 41.6667 20.3959 41.6667 21.3334Z" fill="#292D32"/>
                                            <path d="M45.7915 32.6458C44.0832 30.5416 41.479 29.2083 38.5415 29.2083C36.3332 29.2083 34.2915 29.9791 32.6873 31.2708C30.5207 32.9791 29.1665 35.6249 29.1665 38.5833C29.1665 40.3333 29.6665 41.9999 30.5207 43.4166C31.0832 44.3541 31.7915 45.1666 32.6248 45.8333H32.6457C34.2498 47.1666 36.3123 47.9583 38.5415 47.9583C40.9165 47.9583 43.0623 47.0833 44.7082 45.6249C45.4373 44.9999 46.0623 44.2499 46.5623 43.4166C47.4165 41.9999 47.9165 40.3333 47.9165 38.5833C47.9165 36.3333 47.1248 34.2499 45.7915 32.6458ZM43.2498 37.4166L38.2498 42.0416C37.9582 42.3124 37.5623 42.4583 37.1873 42.4583C36.7915 42.4583 36.3957 42.3124 36.0832 41.9999L33.7707 39.6874C33.1665 39.0833 33.1665 38.0833 33.7707 37.4791C34.3748 36.8749 35.3748 36.8749 35.979 37.4791L37.229 38.7291L41.1248 35.1249C41.7498 34.5416 42.7498 34.5833 43.3332 35.2083C43.9373 35.8541 43.8957 36.8332 43.2498 37.4166Z" fill="#29BE2F"/>
                                        </svg>
                                    </div>
                                    {data?.product?.guarantee?.map((item) => (
                                        <div className="flex justify-end items-center gap-1">
                                            <p>{item?.name}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 46" fill="none">
                                                <path d="M35.535 7.89669L24.9934 3.94836C23.9009 3.54586 22.1184 3.54586 21.0259 3.94836L10.4842 7.89669C8.45253 8.66336 6.8042 11.04 6.8042 13.2059V28.7309C6.8042 30.2834 7.82003 32.3342 9.06587 33.2542L19.6075 41.1317C21.4667 42.5309 24.5142 42.5309 26.3734 41.1317L36.915 33.2542C38.1609 32.315 39.1767 30.2834 39.1767 28.7309V13.2059C39.1959 11.04 37.5475 8.66336 35.535 7.89669ZM29.67 18.63L21.4284 26.8717C21.1409 27.1592 20.7767 27.2934 20.4125 27.2934C20.0484 27.2934 19.6842 27.1592 19.3967 26.8717L16.33 23.7667C15.7742 23.2109 15.7742 22.2909 16.33 21.735C16.8859 21.1792 17.8059 21.1792 18.3617 21.735L20.4317 23.805L27.6575 16.5792C28.2134 16.0234 29.1334 16.0234 29.6892 16.5792C30.245 17.135 30.245 18.0742 29.67 18.63Z" fill="#292D32"/>
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {data?.product?.related?.length > 0 ? 
                        <div className={styles.related + " flex flex-col gap-7"}>
                            <p className={styles.title + " font-bold text-xl"}>
                                محصولات مرتبط 
                            </p>
                            <div className={styles.items + " grid grid-cols-4 gap-4 max-w-5xl mx-auto max-lg:grid-cols-3 max-md:grid-cols-1"}>
                                {data?.product?.related?.map((item) => (
                                    <ActiveShopItem slug={item?.slug} image={parsToArray(item?.image)[0]} title={item?.title} price={item?.offPrice} />
                                ))}
                            </div>
                        </div> : ""
                    }


                    <div className="mt-20 max-md:mt-0">
                        <Faq />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleShop;