import React from "react";
import styles from "./styles.module.scss";
import ActiveShopItem from "./activeShopItem";
import NotActiveShopItem from "./notActiveShopItem";
import Category from "../index/category";
import Faq from "../faq";
import { SpecialSaleBanner, WebsiteBanner } from "../banner";

const ShopArchive = () => {
    return(
        <div className={styles.shopArchive + " flex flex-col gap-20 mb-20"}>

            <SpecialSaleBanner />

            <WebsiteBanner />


            <div className={styles.shopArchiveContainer + " flex items-start gap-7 container w-11/12 mx-auto mt-20"}>
                <div className={styles.items + " w-3/4 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4"}>
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <NotActiveShopItem />
                    <NotActiveShopItem />
                    <NotActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                    <ActiveShopItem />
                </div>
                <div className={styles.filter + " w-1/4 flex flex-col gap-3"}>
                    <div className={styles.related + " p-3 border border-[#E1E1E1] rounded-2xl flex flex-col gap-3"}>
                        <p className="font-bold">جستجوهای مرتبط</p>
                        <div className={styles.items + " flex flex-col gap-2"}>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <div>
                                    <svg width="8" height="10" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 15.2071C9.09763 14.8166 9.09763 14.1834 8.70711 13.7929L2.91421 8L8.70711 2.20711C9.09763 1.81658 9.09763 1.18342 8.70711 0.792893C8.31658 0.402369 7.68342 0.402368 7.29289 0.792893L1.5 6.58579C0.718951 7.36684 0.718952 8.63317 1.5 9.41421L7.29289 15.2071C7.68342 15.5976 8.31658 15.5976 8.70711 15.2071Z" fill="#35383F"/>
                                    </svg>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">هیوندای </p>
                                    <svg width="12" height="12" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.125 18 13.078 17.2635 14.6177 16.0319L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L16.0319 14.6177Z" fill="#35383F"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <div>
                                    <svg width="8" height="10" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 15.2071C9.09763 14.8166 9.09763 14.1834 8.70711 13.7929L2.91421 8L8.70711 2.20711C9.09763 1.81658 9.09763 1.18342 8.70711 0.792893C8.31658 0.402369 7.68342 0.402368 7.29289 0.792893L1.5 6.58579C0.718951 7.36684 0.718952 8.63317 1.5 9.41421L7.29289 15.2071C7.68342 15.5976 8.31658 15.5976 8.70711 15.2071Z" fill="#35383F"/>
                                    </svg>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">دسته موتور هیوندای </p>
                                    <svg width="12" height="12" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.125 18 13.078 17.2635 14.6177 16.0319L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L16.0319 14.6177Z" fill="#35383F"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <div>
                                    <svg width="8" height="10" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 15.2071C9.09763 14.8166 9.09763 14.1834 8.70711 13.7929L2.91421 8L8.70711 2.20711C9.09763 1.81658 9.09763 1.18342 8.70711 0.792893C8.31658 0.402369 7.68342 0.402368 7.29289 0.792893L1.5 6.58579C0.718951 7.36684 0.718952 8.63317 1.5 9.41421L7.29289 15.2071C7.68342 15.5976 8.31658 15.5976 8.70711 15.2071Z" fill="#35383F"/>
                                    </svg>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">زیربندی </p>
                                    <svg width="12" height="12" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.125 18 13.078 17.2635 14.6177 16.0319L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L16.0319 14.6177Z" fill="#35383F"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <div>
                                    <svg width="8" height="10" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 15.2071C9.09763 14.8166 9.09763 14.1834 8.70711 13.7929L2.91421 8L8.70711 2.20711C9.09763 1.81658 9.09763 1.18342 8.70711 0.792893C8.31658 0.402369 7.68342 0.402368 7.29289 0.792893L1.5 6.58579C0.718951 7.36684 0.718952 8.63317 1.5 9.41421L7.29289 15.2071C7.68342 15.5976 8.31658 15.5976 8.70711 15.2071Z" fill="#35383F"/>
                                    </svg>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">الکتریکال</p>
                                    <svg width="12" height="12" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.125 18 13.078 17.2635 14.6177 16.0319L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L16.0319 14.6177Z" fill="#35383F"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.filters + " p-3 border border-[#E1E1E1] rounded-2xl flex flex-col gap-3"}>
                        <p className="font-bold">فیلتر ها</p>
                        <div className={styles.items}>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <svg width="10" height="8" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2071 0.292893C14.8166 -0.0976311 14.1834 -0.0976311 13.7929 0.292893L8 6.08579L2.20711 0.292893C1.81658 -0.0976311 1.18342 -0.0976311 0.792893 0.292893C0.402369 0.683417 0.402369 1.31658 0.792893 1.70711L6.58579 7.5C7.36684 8.28105 8.63317 8.28105 9.41421 7.5L15.2071 1.70711C15.5976 1.31658 15.5976 0.683417 15.2071 0.292893Z" fill="#35383F"/>
                                </svg>
                                <p className="text-sm">دسته بندی</p>
                            </div>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <svg width="10" height="8" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2071 0.292893C14.8166 -0.0976311 14.1834 -0.0976311 13.7929 0.292893L8 6.08579L2.20711 0.292893C1.81658 -0.0976311 1.18342 -0.0976311 0.792893 0.292893C0.402369 0.683417 0.402369 1.31658 0.792893 1.70711L6.58579 7.5C7.36684 8.28105 8.63317 8.28105 9.41421 7.5L15.2071 1.70711C15.5976 1.31658 15.5976 0.683417 15.2071 0.292893Z" fill="#35383F"/>
                                </svg>
                                <p className="text-sm">نام خودرو</p>
                            </div>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <svg width="10" height="8" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2071 0.292893C14.8166 -0.0976311 14.1834 -0.0976311 13.7929 0.292893L8 6.08579L2.20711 0.292893C1.81658 -0.0976311 1.18342 -0.0976311 0.792893 0.292893C0.402369 0.683417 0.402369 1.31658 0.792893 1.70711L6.58579 7.5C7.36684 8.28105 8.63317 8.28105 9.41421 7.5L15.2071 1.70711C15.5976 1.31658 15.5976 0.683417 15.2071 0.292893Z" fill="#35383F"/>
                                </svg>
                                <p className="text-sm">فروش ویژه</p>
                            </div>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <svg width="10" height="8" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2071 0.292893C14.8166 -0.0976311 14.1834 -0.0976311 13.7929 0.292893L8 6.08579L2.20711 0.292893C1.81658 -0.0976311 1.18342 -0.0976311 0.792893 0.292893C0.402369 0.683417 0.402369 1.31658 0.792893 1.70711L6.58579 7.5C7.36684 8.28105 8.63317 8.28105 9.41421 7.5L15.2071 1.70711C15.5976 1.31658 15.5976 0.683417 15.2071 0.292893Z" fill="#35383F"/>
                                </svg>
                                <p className="text-sm">نوع</p>
                            </div>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round" />
                                </label>
                                <p className="text-sm">کالاهای موجود</p>
                            </div>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round" />
                                </label>
                                <p className="text-sm">کالا های ربانی پارت</p>
                            </div>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <svg width="10" height="8" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2071 0.292893C14.8166 -0.0976311 14.1834 -0.0976311 13.7929 0.292893L8 6.08579L2.20711 0.292893C1.81658 -0.0976311 1.18342 -0.0976311 0.792893 0.292893C0.402369 0.683417 0.402369 1.31658 0.792893 1.70711L6.58579 7.5C7.36684 8.28105 8.63317 8.28105 9.41421 7.5L15.2071 1.70711C15.5976 1.31658 15.5976 0.683417 15.2071 0.292893Z" fill="#35383F"/>
                                </svg>
                                <p className="text-sm">محدوده قیمت</p>
                            </div>
                            <div className={styles.item + " flex items-center justify-between py-4"}>
                                <svg width="10" height="8" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2071 0.292893C14.8166 -0.0976311 14.1834 -0.0976311 13.7929 0.292893L8 6.08579L2.20711 0.292893C1.81658 -0.0976311 1.18342 -0.0976311 0.792893 0.292893C0.402369 0.683417 0.402369 1.31658 0.792893 1.70711L6.58579 7.5C7.36684 8.28105 8.63317 8.28105 9.41421 7.5L15.2071 1.70711C15.5976 1.31658 15.5976 0.683417 15.2071 0.292893Z" fill="#35383F"/>
                                </svg>
                                <p className="text-sm">نوع فروشنده</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Category />

            <Faq />

        </div>
    )
}

export default ShopArchive;