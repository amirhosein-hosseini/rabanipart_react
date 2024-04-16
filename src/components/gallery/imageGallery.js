import React from "react";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import gallery1image from "../../asset/image/galleryimage.png"
import gallery1image2 from "../../asset/image/indexcontactrightimage.png"
import gallery1image3 from "../../asset/image/shopitemimage.png"
import "./galleryStyle.css"


const images = [
  {
    original: gallery1image,
    thumbnail: gallery1image,
  },
  {
    original: gallery1image2,
    thumbnail: gallery1image2,
  },
  {
    original: gallery1image3,
    thumbnail: gallery1image3,
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
