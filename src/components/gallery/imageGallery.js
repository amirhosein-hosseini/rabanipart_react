import React from "react";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import gallery1image from "../../asset/image/galleryimage.jpg"
import "./galleryStyle.css"


const images = [
  {
    original: gallery1image,
    thumbnail: gallery1image,
  },
  {
    original: gallery1image,
    thumbnail: gallery1image,
  },
  {
    original: gallery1image,
    thumbnail: gallery1image,
  },
  // Add more images as needed
];



const MyImageGallery = () => {

    return(
        <div>
            <ImageGallery items={images} />
        </div>
    )
}

export default MyImageGallery;
