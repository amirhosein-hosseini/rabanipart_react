import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useAuth } from "../../context/authContext";

const MobileNavbar = () => {


    const {isLoggedIn} = useAuth();
    const [showMobileNavbar , setShowMobileNavbar] = useState(false);



    const handleCall = () => {
        window.open('tel:02833560066', '_self'); // Replace with the desired phone number

    }




    return(
        <>
            <div className={styles.mobileNavbar + " md:hidden bg-[#F4F4F4] relative z-30 w-11/12 rounded-xl flex items-center justify-between p-2 py-[6px]"}>
                <div className={styles.item + "  max-w-[14px] overflow-hidden"}>
                    <img className="object-cover w-full" src="../../images/mobilecall.png" alt="icon" onClick={handleCall} />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M10.2783 6.27077C10.0275 6.27077 9.82913 6.0666 9.82913 5.8216C9.82913 5.60577 9.61329 5.1566 9.25163 4.76577C8.89579 4.3866 8.50496 4.16493 8.17829 4.16493C7.92746 4.16493 7.72913 3.96077 7.72913 3.71577C7.72913 3.47077 7.93329 3.2666 8.17829 3.2666C8.76163 3.2666 9.37413 3.5816 9.91079 4.14743C10.4125 4.67827 10.7333 5.33744 10.7333 5.81577C10.7333 6.0666 10.5291 6.27077 10.2783 6.27077Z" fill="#292D32"/>
                        <path d="M12.3842 6.27067C12.1333 6.27067 11.935 6.0665 11.935 5.8215C11.935 3.75067 10.2492 2.07067 8.18415 2.07067C7.93332 2.07067 7.73499 1.8665 7.73499 1.6215C7.73499 1.3765 7.93332 1.1665 8.17832 1.1665C10.745 1.1665 12.8333 3.25484 12.8333 5.8215C12.8333 6.0665 12.6292 6.27067 12.3842 6.27067Z" fill="#292D32"/>
                        <path d="M6.44579 8.72067L5.36663 9.79984C5.13913 10.0273 4.77746 10.0273 4.54413 9.80567C4.47996 9.7415 4.41579 9.68317 4.35163 9.619C3.75079 9.01234 3.20829 8.3765 2.72413 7.7115C2.24579 7.0465 1.86079 6.3815 1.58079 5.72234C1.30663 5.05734 1.16663 4.4215 1.16663 3.81484C1.16663 3.41817 1.23663 3.039 1.37663 2.689C1.51663 2.33317 1.73829 2.0065 2.04746 1.71484C2.42079 1.34734 2.82913 1.1665 3.26079 1.1665C3.42413 1.1665 3.58746 1.2015 3.73329 1.2715C3.88496 1.3415 4.01913 1.4465 4.12413 1.59817L5.47746 3.50567C5.58246 3.6515 5.65829 3.78567 5.71079 3.914C5.76329 4.0365 5.79246 4.159 5.79246 4.26984C5.79246 4.40984 5.75163 4.54984 5.66996 4.684C5.59413 4.81817 5.48329 4.95817 5.34329 5.09817L4.89996 5.559C4.83579 5.62317 4.80663 5.699 4.80663 5.79234C4.80663 5.839 4.81246 5.87984 4.82413 5.9265C4.84163 5.97317 4.85913 6.00817 4.87079 6.04317C4.97579 6.23567 5.15663 6.4865 5.41329 6.78984C5.67579 7.09317 5.95579 7.40234 6.25913 7.7115C6.31746 7.76984 6.38163 7.82817 6.43996 7.8865C6.67329 8.114 6.67913 8.48734 6.44579 8.72067Z" fill="#292D32"/>
                        <path d="M12.8158 10.6924C12.8158 10.8558 12.7866 11.0249 12.7283 11.1883C12.7108 11.2349 12.6933 11.2816 12.67 11.3283C12.5708 11.5383 12.4425 11.7366 12.2733 11.9233C11.9875 12.2383 11.6725 12.4658 11.3166 12.6116C11.3108 12.6116 11.305 12.6174 11.2991 12.6174C10.955 12.7574 10.5816 12.8333 10.1791 12.8333C9.58414 12.8333 8.94831 12.6933 8.27748 12.4074C7.60664 12.1216 6.93581 11.7366 6.27081 11.2524C6.04331 11.0833 5.81581 10.9141 5.59998 10.7333L7.50748 8.82577C7.67081 8.94827 7.81664 9.04161 7.93914 9.10577C7.96831 9.11744 8.00331 9.13494 8.04414 9.15244C8.09081 9.16994 8.13748 9.17577 8.18998 9.17577C8.28914 9.17577 8.36498 9.14078 8.42914 9.07661L8.87248 8.63911C9.01831 8.49328 9.15831 8.38244 9.29248 8.31244C9.42664 8.23077 9.56081 8.18994 9.70664 8.18994C9.81747 8.18994 9.93414 8.21327 10.0625 8.26577C10.1908 8.31827 10.325 8.39411 10.4708 8.49328L12.4016 9.86411C12.5533 9.96911 12.6583 10.0916 12.7225 10.2374C12.7808 10.3833 12.8158 10.5291 12.8158 10.6924Z" fill="#292D32"/>
                    </svg> */}
                </div>
                <div className={styles.item + "  max-w-[28px] overflow-hidden"}>
                    <Link to={"/"}>
                        <img className="object-cover w-full" src="../../images/mobilelogo.png" alt="icon" />
                    </Link>
                    {/* <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.232475 15.6253C-0.120347 15.3056 -0.0473909 14.7191 0.287491 14.4132C0.771875 14.4799 1.23951 14.6306 1.70117 14.7824C1.88895 14.7398 2.07672 14.7007 2.26689 14.6651C2.19273 14.7766 2.04443 15.0009 1.97147 15.1124C2.01453 15.1665 2.10184 15.2757 2.14489 15.3309C2.52044 15.3033 2.94502 15.2182 3.15074 14.879C3.41505 14.419 3.56934 13.8911 3.59685 13.3655C3.54781 13.3138 3.44974 13.208 3.4019 13.1562C3.25479 13.3471 3.13519 13.5553 3.01319 13.7623C2.89359 13.6485 2.72735 13.6795 2.57665 13.66C2.76801 13.4219 2.93785 13.1631 3.16628 12.955C3.80615 12.9573 4.44601 13.0021 5.0799 13.0884C6.38713 13.1827 7.70155 13.216 9.01118 13.1758C9.65463 13.1298 10.3208 13.1252 10.932 12.9136C11.292 12.7043 10.9571 12.2972 10.987 11.9901C10.8817 9.34622 11.03 6.70117 11.1042 4.05727C11.1054 3.72606 11.1652 3.38451 11.0444 3.06365C11.0898 3.09815 11.1795 3.16715 11.2238 3.20165C11.4797 3.72606 11.3781 4.30913 11.3613 4.86689C11.28 6.27336 11.3039 7.68444 11.1891 9.08862C11.4451 9.09437 11.7022 9.09782 11.9593 9.10127C11.9904 7.99034 12.2249 6.88977 12.1543 5.7754C12.1471 4.80248 12.25 3.70536 11.6304 2.8716C11.5826 3.0257 11.5348 3.17865 11.4857 3.33161C11.4008 3.27755 11.3255 3.20855 11.2609 3.1246C11.3829 2.94865 11.3841 2.45759 11.7237 2.60479C12.0897 2.90495 12.293 3.36381 12.3456 3.81922C12.4748 4.74268 12.3827 5.67535 12.3026 6.59767C12.2464 8.32155 12.2296 10.0454 12.1973 11.7693C12.183 12.012 12.2165 12.2868 12.0395 12.4858C11.8601 12.7503 11.329 12.3581 11.2178 12.6686C11.4953 13.1102 11.8505 13.5116 12.0466 13.9992C12.2045 14.3143 12.2452 14.68 12.4617 14.9675L12.6363 14.8594C12.6757 14.2131 12.5215 13.5634 12.5406 12.9124C12.5872 10.3835 12.6124 7.85464 12.6315 5.32574C12.6399 4.17342 12.6375 3.0165 12.4904 1.87108C12.4676 1.64222 12.3875 1.40532 12.1902 1.26157C11.6209 0.832607 10.908 0.640554 10.2144 0.487602C8.52919 0.143745 6.77942 0.162145 5.08229 0.41745C4.28575 0.542803 3.4904 0.770508 2.80389 1.18682C2.30994 1.57092 2.3829 2.24829 2.30875 2.79455C2.14609 5.7041 2.27167 8.61941 2.32071 11.5313C2.28363 12.089 2.58981 12.6077 2.44629 13.1654C2.58024 12.9228 2.74051 12.6916 2.87685 12.449C2.75486 11.092 2.95818 9.71538 2.68668 8.371C2.5312 8.2767 2.49173 8.56421 2.52642 8.63666C2.54077 9.81888 2.67831 11.0046 2.58861 12.1868C2.45346 11.828 2.52283 11.4393 2.51087 11.0667C2.52762 10.1236 2.4415 9.18177 2.49652 8.23875C2.51565 8.20195 2.55393 8.12605 2.57426 8.0881C2.63286 7.78334 2.58981 7.47284 2.58144 7.16693C2.5312 6.12271 2.69147 5.07849 2.96057 4.06877C3.08974 3.69846 3.15432 3.24765 3.52867 3.02225C3.66024 2.8509 3.91498 3.0993 3.88867 3.2534C3.24761 3.58806 3.1005 4.33327 3.00602 4.96924C2.8613 6.30211 2.92947 7.64764 3.00721 8.98281C3.54422 8.96211 4.08003 8.95751 4.61704 8.96326C4.65412 7.75574 4.64694 6.54362 4.49744 5.34184C4.37186 4.67598 4.18887 4.01932 3.99273 3.36956C3.99153 3.07515 3.9114 2.79799 3.74635 2.54959C3.54422 2.72669 3.3421 2.9038 3.12921 3.06825C3.28588 2.73359 3.44495 2.39664 3.64469 2.08383C3.89346 2.12408 3.99871 2.34144 4.10037 2.53579C5.68747 1.93088 7.44799 1.91248 9.12719 2.06658C9.83403 2.16433 10.6724 2.24713 11.097 2.8808C11.0492 2.94405 11.0001 3.0073 10.9511 3.0694C10.9033 2.76464 10.6043 2.62319 10.3435 2.51854C9.87589 2.35524 9.37716 2.31154 8.88679 2.26784C7.265 2.17008 5.60973 2.24713 4.05013 2.71289C4.57518 3.77781 4.75817 4.96694 4.8383 6.13306C4.85983 7.90064 4.8706 9.67168 4.76535 11.437C4.74621 11.9729 4.32043 12.3754 4.1518 12.8664L4.05253 12.8756C4.08601 12.7537 4.15419 12.5088 4.18887 12.3857C3.81691 12.4271 3.44376 12.4593 3.0706 12.495C2.82064 12.9078 2.37094 13.2091 2.25493 13.691C2.22024 13.8325 2.15207 14.1165 2.11738 14.258C2.20709 14.1338 2.38649 13.8842 2.47619 13.7589C2.58502 13.9463 2.66994 14.1464 2.74768 14.3465C2.66276 14.312 2.49293 14.2442 2.40682 14.2097C2.37094 14.4178 2.18317 14.5696 1.97984 14.6168C2.00018 12.8664 2.01214 11.1081 1.94038 9.35542C1.95712 7.01168 1.80164 4.66218 2.06715 2.32649C2.13293 1.80782 2.2322 1.18682 2.74529 0.897009C3.81093 0.303598 5.06076 0.128793 6.26873 0.0356423C7.66925 -0.042559 9.09131 -0.00920908 10.4619 0.307046C11.0456 0.447349 11.6376 0.610654 12.1471 0.92806C12.4796 1.13736 12.7894 1.45477 12.793 1.85843C13.0453 4.23437 12.8755 6.62527 12.8922 9.00811C12.8528 10.9079 12.8683 12.8089 12.8563 14.7088C13.2989 14.5501 13.7246 14.3465 14.1767 14.2131C14.4698 14.5271 14.6109 15.0469 14.3836 15.4264C14.0117 15.8013 13.4508 15.9071 12.9508 16.0405C12.8719 17.0123 12.7571 17.999 12.3779 18.911C12.1854 19.3687 11.8481 19.7746 11.3996 20.023C10.0421 20.6866 8.51125 21.0764 6.98036 20.9614C5.72096 20.8786 4.42449 20.7774 3.25718 20.2783C2.71898 20.0656 2.31473 19.6113 2.15566 19.0754C1.84709 18.0461 1.85307 16.964 1.72509 15.9059C1.66529 15.945 1.54569 16.0232 1.4847 16.0623C1.05533 15.9646 0.568554 15.9312 0.232475 15.6253ZM0.237259 15.2769C0.383172 15.5046 0.628354 15.6621 0.889084 15.7438C1.0649 15.7852 1.35433 15.8208 1.37466 15.5805C1.05054 15.301 0.669018 15.0848 0.280316 14.8985C0.188223 15.0216 0.173871 15.1469 0.237259 15.2769ZM1.85785 15.5471C1.91287 15.7001 1.993 15.8484 1.99898 16.0129C2.04443 16.8467 2.23459 17.6632 2.353 18.4877C2.44748 19.1513 2.86369 19.7838 3.5203 20.0483C4.46635 20.4163 5.48774 20.5785 6.50434 20.6176C7.84985 20.7084 9.23363 20.5865 10.4823 20.0702C11.1831 19.8919 11.8266 19.4377 12.0981 18.7764C12.4772 17.8449 12.5561 16.8329 12.6339 15.845C13.1159 15.7093 13.6278 15.6046 14.0464 15.3252C14.3191 15.1446 14.2377 14.8065 14.1684 14.5455C13.7211 14.6628 13.2893 14.8272 12.8898 15.0526C12.6626 15.2079 12.3744 15.1527 12.1148 15.1607C11.7763 14.4891 11.7417 13.6416 11.0659 13.1654C8.7038 13.5749 6.28906 13.4196 3.91379 13.2206C3.92455 13.9003 3.74754 14.6628 3.1603 15.0986C2.77758 15.393 2.25253 15.3298 1.8124 15.4839C1.5134 15.0917 1.06729 14.8226 0.570946 14.7295C0.922572 15.094 1.34835 15.4218 1.85785 15.5471ZM3.06223 12.2052L3.17585 12.2109C3.1029 11.5474 3.15791 10.878 3.09094 10.2156C3.04429 10.8769 3.073 11.5416 3.06223 12.2052ZM3.31459 10.7274C3.35645 11.2162 3.32535 11.7222 3.49758 12.1902C3.73798 12.2615 3.98794 12.2282 4.23312 12.2063C4.59432 11.7486 4.51419 11.1529 4.54169 10.6135C4.54169 10.1156 4.61585 9.61763 4.58355 9.11967C4.08123 9.09667 3.57771 9.15187 3.08017 9.21742C3.1603 9.71998 3.30502 10.2156 3.31459 10.7274ZM11.3374 12.1592C11.536 12.2845 11.7763 12.3949 11.9079 12.1224C12.0347 11.4393 11.9151 10.7331 11.994 10.042C12.0323 9.79013 12.0395 9.53482 12.0096 9.28182C11.7512 9.25997 11.4929 9.24962 11.2346 9.24387C11.1855 10.2179 11.2393 11.1909 11.3374 12.1592Z" fill="#E14957"/>
                        <path d="M3.27513 18.7695C2.85533 18.4786 2.42357 18.1232 2.34344 17.5988C2.60297 17.8863 2.79194 18.237 3.10769 18.4763C3.75114 18.9581 4.52017 19.2652 5.31791 19.4112L5.31672 19.4549C4.58476 19.5055 3.87553 19.1479 3.27513 18.7695Z" fill="#E14957"/>
                        <path d="M3.00482 16.1877C2.9534 16.1383 2.85174 16.0417 2.80031 15.9922C2.96177 16.0589 3.21771 16.0394 3.28828 16.2291C3.33492 16.5615 3.32177 16.9019 3.41506 17.2273C3.54064 17.7471 3.98555 18.1082 4.2104 18.5832C3.96044 18.4084 3.74037 18.2014 3.52748 17.9886C3.47246 18.0059 3.36363 18.0404 3.30981 18.0576C3.34569 18.0254 3.41745 17.9622 3.45333 17.93C3.18183 17.3837 3.10649 16.7777 3.00482 16.1877Z" fill="#E14957"/>
                        <path d="M5.56907 19.5642C5.56907 19.5446 5.57146 19.5055 5.57146 19.486C5.79392 19.4089 6.03671 19.4572 6.26754 19.4595C6.9983 19.5216 7.73026 19.4526 8.46102 19.4124C8.45265 19.4595 8.43829 19.5538 8.42992 19.601C7.4791 19.5504 6.52109 19.6815 5.56907 19.5642Z" fill="#E14957"/>
                        <path d="M6.85598 18.8983C6.95644 18.1347 6.99591 17.3653 7.01146 16.596C7.01146 16.3775 7.04375 16.159 7.13943 15.96C7.25185 16.8628 7.11073 17.7736 7.15378 18.6798C7.05332 18.7523 6.95405 18.8247 6.85598 18.8983Z" fill="#E14957"/>
                        <path d="M8.70022 19.5262C8.61889 19.471 8.53756 19.4147 8.45743 19.3583C9.10327 19.3261 9.71563 19.103 10.3112 18.8788C10.6545 18.7316 11.0145 18.589 11.2908 18.3371C11.4104 18.1577 11.4797 17.953 11.5754 17.7598C11.591 17.5321 11.6161 17.3044 11.6472 17.0778C11.6938 17.0928 11.7871 17.1238 11.8338 17.1399C11.8074 16.6949 11.8314 16.2487 11.8661 15.8036C11.9151 15.8404 12.0144 15.914 12.0646 15.9508C12.1005 16.5799 11.9892 17.2101 11.8098 17.815C11.7225 18.1048 11.5587 18.3831 11.2932 18.5533C10.499 19.026 9.61516 19.348 8.70022 19.5262Z" fill="#E14957"/>
                        <path d="M10.5457 19.831C10.7418 19.3848 11.1401 19.0294 11.6448 18.9385C11.3147 19.2744 10.9212 19.5458 10.5457 19.831Z" fill="#E14957"/>
                        <path d="M19.1269 4.30793V5.20426H19.6107C19.9117 5.20426 20.0901 5.03703 20.0901 4.75832C20.0901 4.48408 19.9006 4.30793 19.6085 4.30793H19.1269ZM19.1269 5.78174V6.90771H18.3086V3.69032H19.7244C20.4758 3.69032 20.9262 4.0872 20.9262 4.75163C20.9262 5.14628 20.73 5.50749 20.3777 5.66134L21.0199 6.90771H20.1013L19.5505 5.78174H19.1269ZM23.7221 6.90771L23.5215 6.20091H22.4713L22.2639 6.90771H21.4523L22.5315 3.69032H23.5326L24.614 6.90771H23.7221ZM22.9797 4.41496L22.6274 5.61228H23.3676L23.022 4.41496H22.9797ZM26.7923 6.90771H25.2471V3.69032H26.7477C27.3898 3.69032 27.7689 3.99355 27.7689 4.49299C27.7689 4.83859 27.5102 5.13068 27.1691 5.1775V5.21986C27.5905 5.24216 27.916 5.56992 27.916 5.98018C27.916 6.54428 27.4812 6.90771 26.7923 6.90771ZM26.0654 4.2678V5.00136H26.498C26.7967 5.00136 26.9707 4.86312 26.9707 4.63569C26.9707 4.40604 26.8079 4.2678 26.5292 4.2678H26.0654ZM26.0654 6.33023H26.5604C26.8993 6.33023 27.0844 6.18085 27.0844 5.90883C27.0844 5.64573 26.8948 5.49857 26.5559 5.49857H26.0654V6.33023ZM30.6473 6.90771L30.4466 6.20091H29.3964L29.1891 6.90771H28.3775L29.4566 3.69032H30.4577L31.5391 6.90771H30.6473ZM29.9048 4.41496L29.5525 5.61228H30.2928L29.9472 4.41496H29.9048ZM32.9482 6.90771H32.1723V3.69032H32.8256L34.1656 5.5008H34.2079V3.69032H34.9839V6.90771H34.335L32.9906 5.07939H32.9482V6.90771ZM36.6538 6.90771H35.8355V3.69032H36.6538V6.90771ZM18.4986 7.07766H20.614C21.6517 7.07766 22.3546 7.7538 22.3546 8.79145C22.3546 9.81904 21.6149 10.4918 20.5404 10.4918H19.727V11.9077H18.4986V7.07766ZM19.727 8.02158V9.56466H20.2827C20.8048 9.56466 21.1128 9.29688 21.1128 8.79479C21.1128 8.28601 20.8082 8.02158 20.2894 8.02158H19.727ZM25.9863 11.9077L25.6851 10.8466H24.1085L23.7973 11.9077H22.5789L24.1989 7.07766H25.7018L27.3252 11.9077H25.9863ZM24.8717 8.16551L24.3429 9.96298H25.4541L24.9353 8.16551H24.8717ZM29.367 8.00485V9.35043H30.0934C30.5453 9.35043 30.813 9.09939 30.813 8.68099C30.813 8.26928 30.5285 8.00485 30.09 8.00485H29.367ZM29.367 10.2174V11.9077H28.1386V7.07766H30.2641C31.3921 7.07766 32.0683 7.67347 32.0683 8.67095C32.0683 9.2634 31.7737 9.80566 31.2448 10.0366L32.2088 11.9077H30.8298L30.003 10.2174H29.367ZM35.3987 11.9077H34.1737V8.0651H32.7812V7.07766H36.7945V8.0651H35.3987V11.9077Z" fill="black"/>
                        <path d="M20.7869 17.8386C20.8851 17.8386 20.9643 17.8132 21.0246 17.7625C21.0848 17.7086 21.1149 17.6357 21.1149 17.5438V16.7736H21.6093V17.5629C21.6093 17.8069 21.5348 18.0002 21.3859 18.1429C21.2369 18.2823 21.0372 18.3521 20.7869 18.3521H19.1466C18.8646 18.3521 18.6506 18.2792 18.5048 18.1334C18.359 17.9844 18.2861 17.7752 18.2861 17.5058V16.7736H18.7758V17.4392C18.7758 17.5724 18.8075 17.6722 18.8709 17.7388C18.9343 17.8053 19.0341 17.8386 19.1704 17.8386H20.7869ZM20.5919 15.9559V16.4123H19.2988V15.9559H20.5919ZM23.022 18.1999C23.022 18.463 22.9697 18.6928 22.8651 18.8893C22.7605 19.0858 22.6115 19.2363 22.4182 19.3409C22.228 19.4487 22.0061 19.5026 21.7526 19.5026H21.396L21.3532 18.9891H21.7478C21.9919 18.9891 22.1821 18.9194 22.3183 18.7799C22.4578 18.6436 22.5275 18.4503 22.5275 18.1999V16.7736H23.022V18.1999ZM24.6438 17.8386C24.6597 17.8386 24.6708 17.856 24.6771 17.8909C24.6866 17.9258 24.6914 17.9971 24.6914 18.1048C24.6914 18.2063 24.6866 18.2728 24.6771 18.3045C24.6708 18.3362 24.6597 18.3521 24.6438 18.3521H24.5012C24.2476 18.3521 24.0559 18.2776 23.9259 18.1286C23.796 17.9796 23.731 17.7689 23.731 17.4963V15.2808H24.2207V17.463C24.2207 17.593 24.2445 17.688 24.292 17.7483C24.3427 17.8085 24.422 17.8386 24.5297 17.8386H24.6438ZM25.9053 17.5533C25.9053 17.8037 25.8308 18.0002 25.6819 18.1429C25.5329 18.2823 25.3332 18.3521 25.0828 18.3521H24.5979C24.5662 18.3521 24.5504 18.2696 24.5504 18.1048C24.5504 17.9273 24.5662 17.8386 24.5979 17.8386H25.0828C25.1811 17.8386 25.2603 17.8132 25.3206 17.7625C25.3808 17.7086 25.4109 17.6342 25.4109 17.5391V16.7736H25.9053V17.5533ZM25.6248 18.9083V19.3647H24.3317V18.9083H25.6248ZM24.7405 20.0636V19.6214H25.216V20.0636H24.7405ZM30.9686 17.8386C31.0003 17.8386 31.0162 17.9273 31.0162 18.1048C31.0162 18.2696 31.0003 18.3521 30.9686 18.3521H30.5027C30.5376 18.3933 30.555 18.4566 30.555 18.5422C30.555 18.7292 30.5011 18.8956 30.3933 19.0414C30.2856 19.1872 30.1335 19.2997 29.9369 19.379C29.7404 19.4614 29.5138 19.5026 29.2571 19.5026H28.8958C28.4901 19.5026 28.1779 19.3853 27.9592 19.1508C27.7405 18.9194 27.6311 18.5929 27.6311 18.1714V17.2491H28.1208V18.1619C28.1208 18.7134 28.3807 18.9891 28.9005 18.9891H29.2571C29.5265 18.9891 29.7278 18.9511 29.8609 18.875C29.994 18.7989 30.0606 18.6896 30.0606 18.547C30.0606 18.4709 30.04 18.4154 29.9987 18.3806C29.9607 18.3489 29.8989 18.333 29.8133 18.333H28.9576L29.0051 17.8386H30.9686ZM32.2301 17.5533C32.2301 17.8037 32.1556 18.0002 32.0067 18.1429C31.8577 18.2823 31.658 18.3521 31.4076 18.3521H30.9227C30.891 18.3521 30.8752 18.2696 30.8752 18.1048C30.8752 17.9273 30.891 17.8386 30.9227 17.8386H31.4076C31.5059 17.8386 31.5851 17.8132 31.6453 17.7625C31.7056 17.7086 31.7357 17.6342 31.7357 17.5391V16.7736H32.2301V17.5533ZM31.4552 16.2317V15.7658H32.0257V16.2317H31.4552ZM33.8496 17.8386C33.8654 17.8386 33.8765 17.856 33.8828 17.8909C33.8923 17.9258 33.8971 17.9971 33.8971 18.1048C33.8971 18.2063 33.8923 18.2728 33.8828 18.3045C33.8765 18.3362 33.8654 18.3521 33.8496 18.3521H33.7069C33.4534 18.3521 33.2616 18.2776 33.1317 18.1286C33.0017 17.9796 32.9367 17.7689 32.9367 17.4963V15.2808H33.4264V17.463C33.4264 17.593 33.4502 17.688 33.4977 17.7483C33.5485 17.8085 33.6277 17.8386 33.7355 17.8386H33.8496ZM35.1111 17.5533C35.1111 17.8037 35.0366 18.0002 34.8876 18.1429C34.7386 18.2823 34.539 18.3521 34.2886 18.3521H33.8036C33.772 18.3521 33.7561 18.2696 33.7561 18.1048C33.7561 17.9273 33.772 17.8386 33.8036 17.8386H34.2886C34.3868 17.8386 34.4661 17.8132 34.5263 17.7625C34.5865 17.7086 34.6166 17.6342 34.6166 17.5391V16.7736H35.1111V17.5533ZM33.8987 19.3742V18.9083H34.4692V19.3742H33.8987ZM36.5236 18.1999C36.5236 18.463 36.4713 18.6928 36.3667 18.8893C36.2621 19.0858 36.1131 19.2363 35.9198 19.3409C35.7296 19.4487 35.5078 19.5026 35.2542 19.5026H35.1163L35.0735 18.9891H35.2495C35.4935 18.9891 35.6837 18.9194 35.82 18.7799C35.9594 18.6436 36.0291 18.4503 36.0291 18.1999V16.7736H36.5236V18.1999Z" fill="black"/>
                    </svg> */}
                </div>
                <div className={styles.item + "  max-w-[24px] overflow-hidden"} onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
                    <img className="object-cover w-full" src="../../images/mobilenav.png" alt="icon" />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 10C3 9.44772 3.44772 9 4 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H4C3.44772 11 3 10.5523 3 10Z" fill="#35383F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z" fill="#35383F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#35383F"/>
                    </svg> */}
                </div>
            </div> 


            {showMobileNavbar === true ? 
                <div className={styles.mobileNavList + " absolute top-0 left-0 bg-white w-full h-full z-50 p-4"}>
                    <div className={styles.header + " flex justify-end mb-20"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
                            <path d="M21 7L7 21" stroke="#25282B" stroke-width="1.58333" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 7L21 21" stroke="#25282B" stroke-width="1.58333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className={styles.items + " flex flex-col gap-8"}>
                        <Link to={"/"} onClick={() => setShowMobileNavbar(!showMobileNavbar)}>خانه</Link>
                        <Link to={"/shop"} onClick={() => setShowMobileNavbar(!showMobileNavbar)}>فروشگاه</Link>
                        <Link to={"/blog"} onClick={() => setShowMobileNavbar(!showMobileNavbar)}>بلاگ</Link>
                        <Link to={"/international-sell"} onClick={() => setShowMobileNavbar(!showMobileNavbar)}>خرید بین المللی</Link>
                        <Link to={"/about"} onClick={() => setShowMobileNavbar(!showMobileNavbar)}>درباره ما</Link>
                        <Link to={"/contact"} onClick={() => setShowMobileNavbar(!showMobileNavbar)}>تماس باما</Link>
                        {isLoggedIn === true ? 
                            <Link to={"/basket"} className="flex items-center gap-2" onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.41663 4.66667C2.41663 4.02233 2.95762 3.5 3.62496 3.5H4.15475C5.81814 3.5 7.26808 4.59304 7.67152 6.15112L7.89131 7H22.3623C24.6814 7 26.4041 9.07346 25.901 11.2593L24.5584 17.0926C24.1898 18.694 22.7187 19.8333 21.0197 19.8333H11.5535C9.89011 19.8333 8.44017 18.7403 8.03674 17.1822L5.32701 6.71704C5.19253 6.19768 4.70921 5.83333 4.15475 5.83333H3.62496C2.95762 5.83333 2.41663 5.311 2.41663 4.66667ZM8.49548 9.33333L10.3812 16.6163C10.5157 17.1357 10.999 17.5 11.5535 17.5H21.0197C21.5861 17.5 22.0764 17.1202 22.1993 16.5864L23.5419 10.7531C23.7096 10.0245 23.1353 9.33333 22.3623 9.33333H8.49548Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4791 24.5C12.4801 24.5 13.2916 23.7165 13.2916 22.75C13.2916 21.7835 12.4801 21 11.4791 21C10.4781 21 9.66663 21.7835 9.66663 22.75C9.66663 23.7165 10.4781 24.5 11.4791 24.5Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1459 24.5C22.1469 24.5 22.9584 23.7165 22.9584 22.75C22.9584 21.7835 22.1469 21 21.1459 21C20.1449 21 19.3334 21.7835 19.3334 22.75C19.3334 23.7165 20.1449 24.5 21.1459 24.5Z" fill="black"/>
                                </svg>
                                <p>سبد خرید</p>
                            </Link> 
                            : 
                            <Link to={"/login"} className="flex items-center gap-2" onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.41663 4.66667C2.41663 4.02233 2.95762 3.5 3.62496 3.5H4.15475C5.81814 3.5 7.26808 4.59304 7.67152 6.15112L7.89131 7H22.3623C24.6814 7 26.4041 9.07346 25.901 11.2593L24.5584 17.0926C24.1898 18.694 22.7187 19.8333 21.0197 19.8333H11.5535C9.89011 19.8333 8.44017 18.7403 8.03674 17.1822L5.32701 6.71704C5.19253 6.19768 4.70921 5.83333 4.15475 5.83333H3.62496C2.95762 5.83333 2.41663 5.311 2.41663 4.66667ZM8.49548 9.33333L10.3812 16.6163C10.5157 17.1357 10.999 17.5 11.5535 17.5H21.0197C21.5861 17.5 22.0764 17.1202 22.1993 16.5864L23.5419 10.7531C23.7096 10.0245 23.1353 9.33333 22.3623 9.33333H8.49548Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4791 24.5C12.4801 24.5 13.2916 23.7165 13.2916 22.75C13.2916 21.7835 12.4801 21 11.4791 21C10.4781 21 9.66663 21.7835 9.66663 22.75C9.66663 23.7165 10.4781 24.5 11.4791 24.5Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1459 24.5C22.1469 24.5 22.9584 23.7165 22.9584 22.75C22.9584 21.7835 22.1469 21 21.1459 21C20.1449 21 19.3334 21.7835 19.3334 22.75C19.3334 23.7165 20.1449 24.5 21.1459 24.5Z" fill="black"/>
                                </svg>
                                <p>سبد خرید</p>
                            </Link>
                        }
                        {isLoggedIn === true ? 
                            <Link to={"/panel"} className="flex items-center gap-2" onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 11.6668C16.5021 11.6668 18.125 10.0998 18.125 8.16683C18.125 6.23383 16.5021 4.66683 14.5 4.66683C12.498 4.66683 10.875 6.23383 10.875 8.16683C10.875 10.0998 12.498 11.6668 14.5 11.6668ZM14.5 14.0002C17.8368 14.0002 20.5417 11.3885 20.5417 8.16683C20.5417 4.94517 17.8368 2.3335 14.5 2.3335C11.1633 2.3335 8.45837 4.94517 8.45837 8.16683C8.45837 11.3885 11.1633 14.0002 14.5 14.0002Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.875 18.6668C8.20562 18.6668 6.04167 20.7562 6.04167 23.3335V24.5002C6.04167 25.1445 5.50068 25.6668 4.83333 25.6668C4.16599 25.6668 3.625 25.1445 3.625 24.5002V23.3335C3.625 19.4675 6.87094 16.3335 10.875 16.3335H18.125C22.1291 16.3335 25.375 19.4675 25.375 23.3335V24.5002C25.375 25.1445 24.834 25.6668 24.1667 25.6668C23.4993 25.6668 22.9583 25.1445 22.9583 24.5002V23.3335C22.9583 20.7562 20.7944 18.6668 18.125 18.6668H10.875Z" fill="black"/>
                                </svg>
                                <p>حساب کاربری</p>
                            </Link> 
                            : 
                            <Link to={"/login"} className="flex items-center gap-2" onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 11.6668C16.5021 11.6668 18.125 10.0998 18.125 8.16683C18.125 6.23383 16.5021 4.66683 14.5 4.66683C12.498 4.66683 10.875 6.23383 10.875 8.16683C10.875 10.0998 12.498 11.6668 14.5 11.6668ZM14.5 14.0002C17.8368 14.0002 20.5417 11.3885 20.5417 8.16683C20.5417 4.94517 17.8368 2.3335 14.5 2.3335C11.1633 2.3335 8.45837 4.94517 8.45837 8.16683C8.45837 11.3885 11.1633 14.0002 14.5 14.0002Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.875 18.6668C8.20562 18.6668 6.04167 20.7562 6.04167 23.3335V24.5002C6.04167 25.1445 5.50068 25.6668 4.83333 25.6668C4.16599 25.6668 3.625 25.1445 3.625 24.5002V23.3335C3.625 19.4675 6.87094 16.3335 10.875 16.3335H18.125C22.1291 16.3335 25.375 19.4675 25.375 23.3335V24.5002C25.375 25.1445 24.834 25.6668 24.1667 25.6668C23.4993 25.6668 22.9583 25.1445 22.9583 24.5002V23.3335C22.9583 20.7562 20.7944 18.6668 18.125 18.6668H10.875Z" fill="black"/>
                                </svg>
                                <p>ورود</p>
                            </Link>
                        }
                    </div>
                </div> : ""
            }
        </>
    )
}


export default MobileNavbar;