import React from "react";
import styles from "./styles.module.scss";

export const RedPrimaryButton = ({children}) => {
    return(
        <button className={styles.primarybtn + " bg-[#EB0E23] text-white px-4 py-[7px] rounded-lg"}>
            {children}
        </button>
    )
}

export const BlackPrimaryButton = ({children}) => {
    return(
        <button className={styles.primarybtn + " bg-black text-white px-4 py-[7px] rounded-lg"}>
            {children}
        </button>
    )
}

export const SecondPrimaryButton = ({children}) => {
    return(
        <button className={styles.primarybtn + " bg-[#E14957] text-white px-4 py-[7px] w-full"}>
            {children}
        </button>
    )
}

export const OutlineBlackButton = ({children}) => {
    return(
        <button className={styles.OutlineBlackButton + " text-black px-4 py-[7px] w-full"}>
            {children}
        </button>
    )
}

export const PrimaryArrowButton = ({children}) => {
    return(
        <button className={styles.primaryarrowbutton}>
            {children}
        </button>
    )
}