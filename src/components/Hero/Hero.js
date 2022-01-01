import React from 'react';
import './Hero.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Box, Typography} from '@mui/material';
import Typed from 'typed.js';
import Particles from "react-tsparticles";
import {backgroundParticlesConfig} from '../../data/hero';


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
            new Typed('.type', options);
        }
    }, []);
    return (
        <div className="Hero">
            <Particles params={backgroundParticlesConfig}/>
            <Container maxWidth="xl">
                <Grid container display="flex" style={{height: '100vh'}} justifyContent={'center'}>
                    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6}
                          order={{xs: 2, sm: 2, md: 1, lg: 1, xl: 1}} justifyContent="center" alignItems="flex-end"
                          className="PhotoContainer">
                        <div className="BackgroundCircle"></div>
                        <img src={profilePhotoUrl} alt="Portrait"/>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6}
                          order={{xs: 1, sm: 1, md: 2, lg: 2, xl: 2}} alignItems="center">
                        <Box style={{paddingLeft: '10px'}}>
                            <Box display={{xs: 'none', sm: 'none', md: 'block'}}>
                                <Typography variant="h3" color="primary" gutterBottom>Hello,</Typography>
                            </Box>
                            <Typography variant="h1" color="textPrimary" style={{fontWeight: 600}}>
                                I'm Vishnudev
                            </Typography>
                            <Typography variant="h4" color="textPrimary" display="inline"
                                        style={{fontWeight: 200, paddingLeft: 5}}>I am a </Typography>
                            <Typography variant="h4" color="primary" display="inline" style={{fontWeight: 400}}>
                                <span className="type"></span>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
