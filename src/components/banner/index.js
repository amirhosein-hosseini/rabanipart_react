import React from "react";
import { Link } from "react-router-dom";

export const SpecialSaleBanner  = () => {
    return(
        <div className="w-full overflow-hidden">
            <Link to={"/special/123"}>
                <img className="object-cover w-full" src="../../images/specialbanner.png" alt="image" />
            </Link>
        </div>
    )
}



export const WebsiteBanner  = () => {
    return(
        <div className="container w-11/12 mx-auto overflow-hidden">
            <Link to={"/special/123"}>
                <img className="object-cover w-full" src="../../images/websitebanner.png" alt="image" />
            </Link>
        </div>
    )
}