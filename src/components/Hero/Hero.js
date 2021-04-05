import React from 'react';
import './Hero.scss';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Box, Typography } from '@material-ui/core';
import Typed from 'typed.js';
import Particles from 'react-particles-js';
import { backgroundParticlesConfig } from '../../data/hero';


const Hero = () => {
  const profilePhotoUrl = 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543640/assets/me-transparent_nblhoc.png';
  const options = {
    strings: ['Designer', 'Developer', 'Data Scientist'],
    typeSpeed: 70,
    startDelay: 100,
    backSpeed: 100,
    loop: true
  };
  React.useEffect(() => {
    const el = document.querySelector('.type');
    if (el) {
      const typed = new Typed('.type', options);
    }
  }, []);
  return (
    <div className="Hero">
      <Particles params={backgroundParticlesConfig}></Particles>
      <Container maxWidth="xl">
        <Grid container spacing={0} display="flex" style={{ height: '100vh' }}>
          <Box clone order={{ xs: 2, sm: 2, md: 1, lg: 1, xl: 1 }} flexShrink={1}>
            <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} justify="center" alignItems="flex-end" className="PhotoContainer">
              <div className="BackgroundCircle"></div>
              <img src={profilePhotoUrl}></img>
            </Grid>
          </Box>
          <Box clone order={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }} flexGrow={1}>
            <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center">
              <div style={{ paddingLeft: '10px'}}>
                <Typography variant="h3" color="primary" gutterBottom>Hello,</Typography>
                <Typography variant="h1" color="textPrimary" style={{ fontWeight: 600 }}>I'm Vishnudev</Typography>
                <Typography variant="h4" color="textPrimary" display="inline" style={{ fontWeight: 200, paddingLeft: 5 }}>I am a </Typography>
                <Typography variant="h4" color="primary" display="inline" style={{ fontWeight: 400 }}><span className="type"></span></Typography>
              </div>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};
Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
