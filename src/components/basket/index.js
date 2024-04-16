import React from "react";
import styles from "./styles.module.scss";
import { RedPrimaryButton } from "../button";
import BasketItem from "./basketItem";
import ActiveShopItem from "../shop/activeShopItem";

const Basket = () => {
    return(
        <div className={styles.basket + " mt-10 mb-10"}>
            <div className={styles.basketContainer + " container w-11/12 mx-auto"}>
                <div className={styles.title + " flex text-right justify-end"}>
                    <div className={styles.titleContainer + " flex text-right items-center gap-2"}>
                        <p className="text-lg font-bold">
                            سبد خرید 
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 3.6665C1.33301 3.11422 1.78072 2.6665 2.33301 2.6665H3.02673C4.45678 2.6665 5.68802 3.67588 5.96848 5.07816L6.28615 6.6665H27.0231C28.5051 6.6665 29.6117 8.03025 29.3064 9.48053L27.424 18.4219C27.0668 20.1186 25.5699 21.3332 23.836 21.3332H10.1858C8.43799 21.3332 6.93313 20.0995 6.59036 18.3856L4.00731 5.47039C3.91383 5.00296 3.50341 4.6665 3.02673 4.6665H2.33301C1.78072 4.6665 1.33301 4.21879 1.33301 3.6665ZM7.99968 25.3332C7.99968 23.8604 9.19358 22.6665 10.6663 22.6665C12.1391 22.6665 13.333 23.8604 13.333 25.3332C13.333 26.8059 12.1391 27.9998 10.6663 27.9998C9.19358 27.9998 7.99968 26.8059 7.99968 25.3332ZM19.9997 25.3332C19.9997 23.8604 21.1936 22.6665 22.6663 22.6665C24.1391 22.6665 25.333 23.8604 25.333 25.3332C25.333 26.8059 24.1391 27.9998 22.6663 27.9998C21.1936 27.9998 19.9997 26.8059 19.9997 25.3332Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div className={styles.basketWrapper + " flex items-start p-5 gap-10 justify-between mt-10"}>
                    <div className={styles.desc + " w-1/3 flex flex-col justify-center items-center"}>
                        <div className={styles.image}>
                            <img src="../../images/basketvector.png" alt="image" />
                        </div>
                        <div className={styles.total + " w-full border border-[#9C9C9C] rounded-lg mt-5"}>
                            <div className={styles.container + " p-3 flex flex-col gap-2 mb-2"}>
                                <div className={styles.item + " flex justify-between"}>
                                    <p className="text-sm">۱۲۰,۰۰۰,۰۰۰ <span className="text-xs">تومان</span> </p>
                                    <p className="text-sm">قیمت کالاها </p>
                                </div>
                                <div className={styles.item + " flex justify-between"}>
                                    <p className="text-sm">۱۲۰,۰۰۰,۰۰۰ <span className="text-xs">تومان</span> </p>
                                    <p className="text-sm">قیمت کالاها </p>
                                </div>
                            </div>
                            <RedPrimaryButton>
                                ادامه خرید
                            </RedPrimaryButton>
                        </div>
                    </div>
                    <div className={styles.items + " w-2/3"}>
                        <BasketItem />
                        {/* <BasketItem /> */}
                    </div>
                </div>



                <div className={styles.related + " flex flex-col gap-7 mt-20"}>
                    <p className={styles.title + " font-bold text-xl"}>
                        پیشنهادات ویژه :
                    </p>
                    <div className={styles.items + " grid grid-cols-4 gap-4 max-w-5xl mx-auto max-lg:grid-cols-3 max-md:grid-cols-2"}>
                        <ActiveShopItem />
                        <ActiveShopItem />
                        <ActiveShopItem />
                        <ActiveShopItem />
                        <ActiveShopItem />
                        <ActiveShopItem />
                        <ActiveShopItem />
                        <ActiveShopItem />
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Basket;