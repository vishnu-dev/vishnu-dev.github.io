import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { PALETTE } from '../../constants/Palette';
import './About.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion, useMotionValue } from 'framer-motion';
import { useScrollPercentage } from 'react-scroll-percentage';


const About = () => {
  const profilePhotoDark = 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543637/assets/me-dark_fwimvv.jpg';
  const [ref, percentage] = useScrollPercentage();
  const scrollElementPercentage = useMotionValue(0.5);
  React.useEffect(() => {
    scrollElementPercentage.set(percentage * 2);
  }, [percentage]);
  return (
    <div className="About" id="about">
      <Container maxWidth="xl">
        <Grid container spacing={0} style={{ minHeight: '90vh' }} ref={ref}>
          <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center" justify="center" style={{paddingTop: '10vh'}}>
            <Grid item xs={12} sm={12} md={10} lg={10} xl={10} className="BorderBox">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M20,0 0,0 0,100 100,100 100,0 20,0"
                  style={{ pathLength: scrollElementPercentage }}
                  fill="transparent" stroke="#EEE" strokeWidth="5"
                  vectorEffect="non-scaling-stroke"
                ></motion.path>
              </svg>
              <Typography color="primary" className="Title" variant="h1">ABOUT</Typography>
              <Typography variant="h5" color="textPrimary" align="justify">
                I’m a full-stack developer and a data science enthusiast from Kerala, 🇮🇳.
                For the past 3 years, I have worked with startups to transform their ideas into reality.
                I specialise in the design and development of applications that derive meaningful insights
                from data, visualise them in a user-friendly manner and assist in the making of business decisions.
                </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center" justify="center">
            <div className="MyThumbnail">
              <svg width="100" height="100" className="SvgTriangle">
                <motion.path
                  d="M 50,5 90,90 5,90 z"
                  fill="transparent" stroke={PALETTE.primary} strokeWidth="6"
                  style={{ pathLength: scrollElementPercentage }}
                ></motion.path>
              </svg>
              <svg width="100" height="100" className="SvgCircle">
                <motion.path
                  d="M 0, 40 a 40, 40 0 1,0 80,0 a 40, 40 0 1,0 -80,0"
                  fill="transparent" stroke={PALETTE.primary} strokeWidth="6"
                  style={{ pathLength: scrollElementPercentage }}
                ></motion.path>
              </svg>
              <LazyLoadImage className="Image" src={profilePhotoDark} style={{filter: `grayscale(${1 - (percentage * 2)})`}}></LazyLoadImage>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

About.propTypes = {};

About.defaultProps = {};

export default About;
