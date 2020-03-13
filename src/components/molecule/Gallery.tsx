import React, { useState, useCallback, FunctionComponent } from "react";
import { render } from "react-dom";
import PhotoGallery, {PhotoProps} from "react-photo-gallery";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


type Props =  {
  images: PhotoProps[]
}

const Gallery: FunctionComponent<Props> = ({images}:Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <PhotoGallery photos={images} onClick={openLightbox} />

      <AwesomeSlider
    media={
      images.map(image => ({source: image.src}))}  
  />
    </div>
  );
}

export default Gallery
