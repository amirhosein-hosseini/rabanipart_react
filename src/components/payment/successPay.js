import React from "react";
import { RedPrimaryButton } from "../button";
import { Link } from "react-router-dom";


const SuccessPay = () => {
    return(
        <div className="mt-20 py-20 min-h-[70vh] flex items-center justify-center flex-col gap-4">
            <div>
                <p className="text-center text-green">
                    پرداخت با موفقیت انجام شد
                </p>
            </div>
            <div>
                <Link to={"/"}>
                    <RedPrimaryButton>
                        بازگشت به خانه
                    </RedPrimaryButton>
                </Link>
            </div>
        </div>
    )
}

export default SuccessPay;