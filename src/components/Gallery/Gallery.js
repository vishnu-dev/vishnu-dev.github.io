import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.scss';
import Gallery from "react-photo-gallery";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const removeImageAttrs = (o) => {
  setTimeout(() => {
    const image = document.getElementsByClassName('SRLImage')[0];
    image.removeAttribute('width');
    image.removeAttribute('height');
  }, 500);
};

const callbacks = {
  onSlideChange: removeImageAttrs,
  onLightboxOpened: removeImageAttrs
};

const PhotoGallery = (props) => {
  const lightboxOptions = {
    buttons: {
      showDownloadButton: false
    }
  };
  
  return (
    <SimpleReactLightbox>
      <SRLWrapper options={lightboxOptions} callbacks={callbacks}>
        <Gallery photos={props.images}></Gallery>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default PhotoGallery;
