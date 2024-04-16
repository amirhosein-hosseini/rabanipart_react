import React from "react";
import styles from "./styles.module.scss";
import Faq from "../faq";
import { BlackPrimaryButton } from "../button";

const InternationalSell = () => {
    return(
        <div className={styles.internationalSell + " mt-20 mb-20"}>
            <div className={styles.container + " container w-11/12 mx-auto overflow-hidden"}>
                <div className={styles.title + " mb-10"}>
                    <p className="font-bold text-xl">
                        خرید خارجی (بین المللی ) 
                    </p>
                </div>
                <form>
                    <div className={styles.formgroup + " w-full flex gap-3 mb-3"}>
                        <div className="w-1/2">
                            <input className="p-2 w-full bg-[#C8C8C8]" type="text" placeholder="نام نام خانوادگی " />
                        </div>
                        <div className="w-1/2">
                            <input className="p-2 w-full bg-[#C8C8C8]" type="text" placeholder="شماره تماس " />
                        </div>
                    </div>
                    <div className={styles.formgroup + " w-full flex gap-3 mb-3"}>
                        <div className="w-1/2">
                            <input className="p-2 w-full bg-[#C8C8C8]" type="text" placeholder="نام کالا " />
                        </div>
                        <div className="w-1/2">
                            <input className="p-2 w-full bg-[#C8C8C8]" type="text" placeholder="شماره کد محصول " />
                        </div>
                    </div>
                    <div className={styles.formgroup + " w-full flex gap-3 mb-3"}>
                        <div className="w-1/2">
                            <input className="p-2 w-full bg-[#C8C8C8]" type="text" placeholder="نوع خودرو - سال تولید" />
                        </div>
                        <div className="w-1/2">
                            <input className="p-2 w-full bg-[#C8C8C8]" type="text" placeholder="شماره شاسی خودرو " />
                        </div>
                    </div>
                    <div className={styles.formgroup + " w-full"}>
                        <textarea style={{resize : "none"}} className="w-full p-2 w-full bg-[#C8C8C8]" rows={10} placeholder="عنوان سفارش با توضیحات :" />
                    </div>
                    <div className={styles.button + " mt-4"}>
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