import React, { useState } from "react";
import styles from "./styles.module.scss";
import Faq from "../faq";
import { BlackPrimaryButton } from "../button";
import { getCookie } from "../../api/auth";
import { toast } from "react-toastify";
import { prefix, url } from "../../api/domain";
import axios from "axios";

const InternationalSell = () => {


    const token = getCookie('token');
    const [formData, setFormData] = useState({
        type: "international_request",
        name: "",
        email: "",
        phone: "",
        car_chassi_number: "",
        product_name: "",
        car_type: "",
        car_production_year: "",
        body: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {

        e.preventDefault();


        axios.post(url + "/" + prefix + '/request/send', formData , {
                headers:{
                'Authorization' : 'Bearer ' + token,
                }
            })
            .then((response) => {
                toast.success("سفارش با موفقیت ثبت شد منتظر تماس کارشناسان ما باشید");
            })
            .catch((error) => {
                toast.error(error.response.data)
            })
            .finally(() => {
                console.log("final")
            });
    };



    return(
        <div className={styles.internationalSell + " mt-40 mb-20 max-md:mt-20"}>
            <div className={styles.container + " container max-w-7xl w-11/12 mx-auto overflow-hidden"}>
                <div className="w-full overflow-hidden rounded-lg mb-10">
                    <img src="../../images/internationalbanner.png" alt="image" />
                </div>
                <div className={styles.title + " mb-10"}>
                    <p className="font-bold text-xl">
                        خرید خارجی (بین المللی ) 
                    </p>
                </div>
                <form>
                    <div className={styles.formgroup + " w-full flex max-md:flex-col gap-3 mb-3"}>
                        <div className="w-1/2 max-md:w-full">
                            <input 
                                name="name"
                                className="p-2 w-full bg-[#EEEEEE]" 
                                type="text" 
                                placeholder="نام و نام خانوادگی " 
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2 max-md:w-full">
                            <input 
                                name="phone"    
                                className="p-2 w-full bg-[#EEEEEE]" 
                                type="text" 
                                placeholder="شماره تماس " 
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.formgroup + " w-full flex max-md:flex-col gap-3 mb-3"}>
                        <div className="w-1/2 max-md:w-full">
                            <input
                                name="product_name" 
                                className="p-2 w-full bg-[#EEEEEE]" 
                                type="text" 
                                placeholder="نام کالا " 
                                value={formData.product_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2 max-md:w-full">
                            <input 
                                name="car_type"
                                className="p-2 w-full bg-[#EEEEEE]" 
                                type="text" 
                                placeholder="نوع خودرو" 
                                value={formData.car_type}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.formgroup + " w-full flex max-md:flex-col gap-3 mb-3"}>
                        <div className="w-1/2 max-md:w-full">
                            <input 
                                name="car_production_year"
                                className="p-2 w-full bg-[#EEEEEE]" 
                                type="text" 
                                placeholder="سال تولید" 
                                value={formData.car_production_year}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2 max-md:w-full">
                            <input 
                                name="car_chassi_number"
                                className="p-2 w-full bg-[#EEEEEE]" 
                                type="text" 
                                placeholder="شماره شاسی خودرو " 
                                value={formData.car_chassi_number}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.formgroup + " w-full"}>
                        <textarea 
                            name="body"
                            style={{resize : "none"}} 
                            className="w-full p-2 w-full bg-[#EEEEEE]" 
                            rows={10} 
                            placeholder="عنوان سفارش با توضیحات :" 
                            value={formData.body}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.button + " mt-4"} onClick={handleSubmit}>
                        <BlackPrimaryButton>
                            ثبت سفارش 
                        </BlackPrimaryButton>
                    </div>
                </form>
            </div>



            <div className="mt-20">
                <Faq />
            </div>
        </div>
    )
}

export default InternationalSell;