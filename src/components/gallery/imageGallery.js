import React, { useEffect, useState } from "react";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { url } from "../../api/domain";
import gallery1image from "../../asset/image/galleryimage.jpg"
import "./galleryStyle.css"


// const images = [
//   {
//     original: gallery1image,
//     thumbnail: gallery1image,
//   },
//   {
//     original: gallery1image,
//     thumbnail: gallery1image,
//   },
//   {
//     original: gallery1image,
//     thumbnail: gallery1image,
//   },
//   // Add more images as needed
// ];



const MyImageGallery = ({data}) => {


  const [images, setImages] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
        setImages(data.map(item => ({
            original: url + item,
            thumbnail: url + item,
        })));
    }
}, [data, url]);




    return(
        <div className="relative">
            <ImageGallery items={images} />
            <div className="absolute left-[50%] top-[50%] w-[50%] h-[50%]" style={{transform: "translate(-50%,-50%"}}>
                <img className="w-full" src="../../images/watermark.png" alt="image" />
            </div>
        </div>
    )
}

export default MyImageGallery;
