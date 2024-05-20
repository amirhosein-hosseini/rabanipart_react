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
        <div>
            <ImageGallery items={images} />
        </div>
    )
}

export default MyImageGallery;
