import React from "react";

const Certificates = () => {
    return(
        <div className="flex flex-col items-center justify-center h-[90vh]">
            <p className="title">
                گواهی نامه ها
            </p>
            <div className={"flex items-center gap-12 max-md:gap-5 justify-between mt-6"}>
                <div className={"max-w-[100px] max-md:max-w-[65px] overflow-hidden"}>
                    <img className="object-cover w-full" src="../../images/logo1.png" alt="logo" />
                </div>
                <div className={"max-w-[100px] max-md:max-w-[65px] overflow-hidden"}>
                    <img className="object-cover w-full" src="../../images/logo2.png" alt="logo" />
                </div>
                <div className={"max-w-[100px] max-md:max-w-[65px] overflow-hidden"}>
                    <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=361558&Code=kLOQquBGRf4T4hSLC2IJ'>
                        <img className="object-cover w-full" src="../../images/logo3.png" alt="logo" />
                    </a>
                </div>
                <div className={"max-w-[100px] max-md:max-w-[65px] overflow-hidden"}>
                    <img className="object-cover w-full" src="../../images/logo4.png" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Certificates;