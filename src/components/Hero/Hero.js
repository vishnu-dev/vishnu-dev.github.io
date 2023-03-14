import React from 'react';
import './Hero.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Box, Typography} from '@mui/material';
import Typed from 'typed.js';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {backgroundParticlesConfig} from '../../data/hero';
import { motion } from 'framer-motion';
import {isMobile} from 'react-device-detect';


const Hero = () => {
    const profilePhotoUrl = 'https://res.cloudinary.com/vishnu-dev/image/upload/q_auto/v1617543640/assets/me-transparent_nblhoc.webp';
    const profilePhotoPreloadUrl = 'https://res.cloudinary.com/vishnu-dev/image/upload/e_blur:500,q_10/v1617543640/assets/me-transparent_nblhoc.webp';
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        const el = document.querySelector('.type');
        if (el) {
            new Typed('.type', {
                strings: ['Designer', 'Developer', 'Data Scientist'], typeSpeed: 90, startDelay: 100, backSpeed: 50, loop: true
            });
        }
    }, []);
    const particlesInit = async (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    return (
        <div className="Hero">
            {
                isMobile ?
                    <div className="noParticles"/>:
                    <Particles className="Particles" init={particlesInit} options={backgroundParticlesConfig}/>
            }
            <Container maxWidth="xl">
                <Grid container display="flex" style={{height: '100vh'}} justifyContent={'center'}>
                    <Grid container item xs={12} sm={12} md={6} lg={6} xl={6}
                          order={{xs: 2, sm: 2, md: 1, lg: 1, xl: 1}} justifyContent="center" alignItems="flex-end"
                          className="PhotoContainer">
                        <motion.div
                            className="BackgroundCircle">
                        </motion.div>
                        {!loaded && <img src={profilePhotoPreloadUrl} alt="Portrait"/>}
                        <img src={profilePhotoUrl} onLoad={(e) => {
                            setLoaded(true)
                        }} alt="Portrait"/>
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
                            <Typography variant="h4" color="secondary" display="inline" style={{fontWeight: 400}}>
                                <span className="type"/>
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
