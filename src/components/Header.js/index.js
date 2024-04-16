import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Header = ({background}) => {


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);




    return(
        <div className={`${styles.header} ${styles.sticky} bg-${scrolled ? "black" : background} py-6 duration-300`}>
            <div className={styles.nav + " container w-11/12 mx-auto flex items-center justify-between"}>
                <div className="flex items-center gap-10">
                    <div className={styles.logo}>
                        <img className="w-[65px]" src="../../images/headerlogo.png" alt="logo" />
                    </div>
                    <div className={styles.icons + " flex items-center gap-3"}>
                        <Link to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.41663 4.66667C2.41663 4.02233 2.95762 3.5 3.62496 3.5H4.15475C5.81814 3.5 7.26808 4.59304 7.67152 6.15112L7.89131 7H22.3623C24.6814 7 26.4041 9.07346 25.901 11.2593L24.5584 17.0926C24.1898 18.694 22.7187 19.8333 21.0197 19.8333H11.5535C9.89011 19.8333 8.44017 18.7403 8.03674 17.1822L5.32701 6.71704C5.19253 6.19768 4.70921 5.83333 4.15475 5.83333H3.62496C2.95762 5.83333 2.41663 5.311 2.41663 4.66667ZM8.49548 9.33333L10.3812 16.6163C10.5157 17.1357 10.999 17.5 11.5535 17.5H21.0197C21.5861 17.5 22.0764 17.1202 22.1993 16.5864L23.5419 10.7531C23.7096 10.0245 23.1353 9.33333 22.3623 9.33333H8.49548Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4791 24.5C12.4801 24.5 13.2916 23.7165 13.2916 22.75C13.2916 21.7835 12.4801 21 11.4791 21C10.4781 21 9.66663 21.7835 9.66663 22.75C9.66663 23.7165 10.4781 24.5 11.4791 24.5Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1459 24.5C22.1469 24.5 22.9584 23.7165 22.9584 22.75C22.9584 21.7835 22.1469 21 21.1459 21C20.1449 21 19.3334 21.7835 19.3334 22.75C19.3334 23.7165 20.1449 24.5 21.1459 24.5Z" fill="white"/>
                            </svg>
                        </Link>
                        <Link to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 11.6668C16.5021 11.6668 18.125 10.0998 18.125 8.16683C18.125 6.23383 16.5021 4.66683 14.5 4.66683C12.498 4.66683 10.875 6.23383 10.875 8.16683C10.875 10.0998 12.498 11.6668 14.5 11.6668ZM14.5 14.0002C17.8368 14.0002 20.5417 11.3885 20.5417 8.16683C20.5417 4.94517 17.8368 2.3335 14.5 2.3335C11.1633 2.3335 8.45837 4.94517 8.45837 8.16683C8.45837 11.3885 11.1633 14.0002 14.5 14.0002Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.875 18.6668C8.20562 18.6668 6.04167 20.7562 6.04167 23.3335V24.5002C6.04167 25.1445 5.50068 25.6668 4.83333 25.6668C4.16599 25.6668 3.625 25.1445 3.625 24.5002V23.3335C3.625 19.4675 6.87094 16.3335 10.875 16.3335H18.125C22.1291 16.3335 25.375 19.4675 25.375 23.3335V24.5002C25.375 25.1445 24.834 25.6668 24.1667 25.6668C23.4993 25.6668 22.9583 25.1445 22.9583 24.5002V23.3335C22.9583 20.7562 20.7944 18.6668 18.125 18.6668H10.875Z" fill="white"/>
                            </svg>
                        </Link>
                        <Link to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12.8335C21 17.3438 17.3437 21.0002 12.8334 21.0002C8.32305 21.0002 4.66671 17.3438 4.66671 12.8335C4.66671 8.32317 8.32305 4.66683 12.8334 4.66683C17.3437 4.66683 21 8.32317 21 12.8335ZM21.0373 19.3875C22.4742 17.5912 23.3334 15.3127 23.3334 12.8335C23.3334 7.03451 18.6324 2.3335 12.8334 2.3335C7.03438 2.3335 2.33337 7.03451 2.33337 12.8335C2.33337 18.6325 7.03438 23.3335 12.8334 23.3335C15.3126 23.3335 17.5911 22.4743 19.3873 21.0374L22.5084 24.1585C22.964 24.6141 23.7027 24.6141 24.1583 24.1585C24.6139 23.7028 24.6139 22.9641 24.1583 22.5085L21.0373 19.3875Z" fill="white"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className={styles.navList}>
                    <ul className="flex items-center gap-5">
                        <li>
                            <Link className="text-white text-sm duration-300 hover:text-[#FF0000]" to={"/"}>خانه</Link>
                        </li>
                        <li>
                            <Link className="text-white text-sm duration-300 hover:text-[#FF0000]" to={"/"}>فروشگاه</Link>
                        </li>
                        <li>
                            <Link className="text-white text-sm duration-300 hover:text-[#FF0000]" to={"/"}>پشتیبانی</Link>
                        </li>
                        <li>
                            <Link className="text-white text-sm duration-300 hover:text-[#FF0000]" to={"/"}>قوانین</Link>
                        </li>
                        <li>
                            <Link className="text-white text-sm duration-300 hover:text-[#FF0000]" to={"/"}>درباره ما</Link>
                        </li>
                        <li>
                            <Link className="text-white text-sm duration-300 hover:text-[#FF0000]" to={"/"}>تماس با ما</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.headerContact + " flex items-center gap-3"}>
                    <div className={styles.item + " flex items-center gap-1"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                            <g clip-path="url(#clip0_717_2259)">
                            <path d="M8.116 3.39242C8.64272 3.49519 9.1268 3.75279 9.50627 4.13226C9.88574 4.51173 10.1433 4.9958 10.2461 5.52252M8.116 1.23535C9.21032 1.35692 10.2308 1.84697 11.0098 2.62505C11.7889 3.40312 12.2802 4.42296 12.4032 5.51713M11.8639 9.82048V11.4383C11.8645 11.5885 11.8338 11.7371 11.7736 11.8747C11.7134 12.0123 11.6252 12.1359 11.5145 12.2374C11.4038 12.3389 11.2732 12.4162 11.1309 12.4643C10.9886 12.5125 10.8379 12.5303 10.6883 12.5168C9.02889 12.3365 7.43491 11.7695 6.03443 10.8613C4.73147 10.0333 3.62678 8.92863 2.79883 7.62567C1.88745 6.21883 1.32029 4.61709 1.14328 2.95022C1.1298 2.8011 1.14752 2.6508 1.19532 2.5089C1.24311 2.367 1.31993 2.2366 1.42087 2.12602C1.52182 2.01543 1.64469 1.92707 1.78166 1.86658C1.91862 1.80608 2.06669 1.77476 2.21642 1.77462H3.83422C4.09593 1.77204 4.34965 1.86472 4.54808 2.03537C4.74652 2.20603 4.87613 2.44301 4.91275 2.70216C4.98104 3.21989 5.10767 3.72824 5.29024 4.2175C5.3628 4.41051 5.3785 4.62028 5.33549 4.82195C5.29248 5.02362 5.19256 5.20873 5.04757 5.35535L4.3627 6.04022C5.13038 7.3903 6.24822 8.50815 7.5983 9.27582L8.28317 8.59095C8.42979 8.44596 8.61491 8.34604 8.81657 8.30304C9.01824 8.26003 9.22801 8.27573 9.42103 8.34828C9.91029 8.53085 10.4186 8.65749 10.9364 8.72577C11.1983 8.76273 11.4376 8.89467 11.6086 9.09651C11.7796 9.29836 11.8705 9.55601 11.8639 9.82048Z" stroke="white" stroke-width="1.07853" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_717_2259">
                            <rect width="12.9424" height="12.9424" fill="white" transform="translate(0 0.696289)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p className="text-white text-xs">۰۲۸۳۳۵۶۰۰۹۹</p>
                    </div>
                    <div className={styles.item + " flex items-center gap-1"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                            <g clip-path="url(#clip0_717_2259)">
                            <path d="M8.116 3.39242C8.64272 3.49519 9.1268 3.75279 9.50627 4.13226C9.88574 4.51173 10.1433 4.9958 10.2461 5.52252M8.116 1.23535C9.21032 1.35692 10.2308 1.84697 11.0098 2.62505C11.7889 3.40312 12.2802 4.42296 12.4032 5.51713M11.8639 9.82048V11.4383C11.8645 11.5885 11.8338 11.7371 11.7736 11.8747C11.7134 12.0123 11.6252 12.1359 11.5145 12.2374C11.4038 12.3389 11.2732 12.4162 11.1309 12.4643C10.9886 12.5125 10.8379 12.5303 10.6883 12.5168C9.02889 12.3365 7.43491 11.7695 6.03443 10.8613C4.73147 10.0333 3.62678 8.92863 2.79883 7.62567C1.88745 6.21883 1.32029 4.61709 1.14328 2.95022C1.1298 2.8011 1.14752 2.6508 1.19532 2.5089C1.24311 2.367 1.31993 2.2366 1.42087 2.12602C1.52182 2.01543 1.64469 1.92707 1.78166 1.86658C1.91862 1.80608 2.06669 1.77476 2.21642 1.77462H3.83422C4.09593 1.77204 4.34965 1.86472 4.54808 2.03537C4.74652 2.20603 4.87613 2.44301 4.91275 2.70216C4.98104 3.21989 5.10767 3.72824 5.29024 4.2175C5.3628 4.41051 5.3785 4.62028 5.33549 4.82195C5.29248 5.02362 5.19256 5.20873 5.04757 5.35535L4.3627 6.04022C5.13038 7.3903 6.24822 8.50815 7.5983 9.27582L8.28317 8.59095C8.42979 8.44596 8.61491 8.34604 8.81657 8.30304C9.01824 8.26003 9.22801 8.27573 9.42103 8.34828C9.91029 8.53085 10.4186 8.65749 10.9364 8.72577C11.1983 8.76273 11.4376 8.89467 11.6086 9.09651C11.7796 9.29836 11.8705 9.55601 11.8639 9.82048Z" stroke="white" stroke-width="1.07853" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_717_2259">
                            <rect width="12.9424" height="12.9424" fill="white" transform="translate(0 0.696289)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p className="text-white text-xs">۰۲۸۳۳۵۶۰۰۹۹</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;