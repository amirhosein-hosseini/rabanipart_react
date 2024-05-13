import React from "react";
import axios from "axios";
import { url } from "./domain";
import { prefix } from "./domain";



export const getAllProducts = async (filter) => {
    try {
        const response = await axios.get(url + "/" + prefix + "/product/all?off=0&original&used&showcase&suggest=" + filter?.suggest + "&exists=" + filter?.exists + "&vip_exists=" + filter?.vip_exists + "&cat=" + filter?.cat + "&brand=" + filter?.brand + "&lowest_price&highest_price");
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};



export const showProduct = async (slug) => {
    try {
        const response = await axios.get(url + "/" + prefix + "/product/" + slug);
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};


export const getAllBrands = async () => {
    try {
        const response = await axios.get(url + "/" + prefix + "/brand/all");
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};
