import React from 'react';
import PropTypes from 'prop-types';
import './Hobbies.scss';
import { Grid, Typography } from '@material-ui/core';
import PhotoGallery from '../Gallery/Gallery';


const Hobbies = () => {
  const [photos, setPhotos] = React.useState([]);
  const [designs, setDesigns] = React.useState([]);

  const cloudinaryPhotosUrl = 'https://res.cloudinary.com/vishnu-dev/image/list/photography.json';
  const cloudinaryDesignsUrl = 'https://res.cloudinary.com/vishnu-dev/image/list/designs.json';
  const cloudinaryBaseUrl = 'https://res.cloudinary.com/vishnu-dev/image/upload';

  const createImageObject = (imageData) => {
    return {
      src: `${cloudinaryBaseUrl}/w_1600/${imageData.public_id}.${imageData.format}`,
      srcSet: [
        `${cloudinaryBaseUrl}/w_500/${imageData.public_id}.${imageData.format} 500w`,
        `${cloudinaryBaseUrl}/w_800/${imageData.public_id}.${imageData.format} 800w`,
        `${cloudinaryBaseUrl}/w_1024/${imageData.public_id}.${imageData.format} 1024w`,
        `${cloudinaryBaseUrl}/w_1600/${imageData.public_id}.${imageData.format} 1600w`
      ],
      sizes: "(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw",
      width: imageData.width,
      height: imageData.height
    };
  };
  
  React.useEffect(() => {
    fetch(cloudinaryPhotosUrl)
    .then(response => response.json())
    .then(data => {
      setPhotos(data.resources.map(image => createImageObject(image)));
    }).catch(error => {
      console.log(error);
    });
    fetch(cloudinaryDesignsUrl)
    .then(response => response.json())
    .then(data => {
      setDesigns(data.resources.map(image => createImageObject(image)));
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className="Hobbies" id="hobbies">
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h2" color="secondary" className="Header" gutterBottom>Photography</Typography>
          <PhotoGallery images={photos}></PhotoGallery>
        </Grid>
        <Grid item xs={12} style={{paddingTop: '10vh'}}>
          <Typography variant="h2" color="secondary" className="Header" gutterBottom>Designs</Typography>
          <PhotoGallery images={designs}></PhotoGallery>
        </Grid>
        {/* <Grid item style={{paddingTop: '10vh', minHeight: '80vh', minWidth: '500px'}}>
          <Typography variant="h2" color="secondary" className="Header" gutterBottom>Others</Typography>
          <iframe src="https://socard.vishnudev.in/#/user/5120049?size=large&gradient=%231e3c72%2C%232a5298" width="100%" height="100%" seamless frameBorder="0" scrolling="no"></iframe>
        </Grid> */}
      </Grid>
    </div>
  );
}

Hobbies.propTypes = {};

Hobbies.defaultProps = {};

export default Hobbies;
