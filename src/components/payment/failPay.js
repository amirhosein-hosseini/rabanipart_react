import React from "react";
import { RedPrimaryButton } from "../button";
import { Link } from "react-router-dom";


const FailPay = () => {
    return(
        <div className="mt-20 py-20 min-h-[70vh] flex items-center justify-center flex-col gap-4">
            <div>
                <p className="text-center text-green">
                    پرداخت موفقیت آمیز نبود لطفا دوباره تلاش کنید
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

export default FailPay;