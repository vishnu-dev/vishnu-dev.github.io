import React from 'react';
import './Footer.scss';
import {PALETTE} from '../../constants/Palette';
import {motion} from 'framer-motion';
import {useScrollPercentage} from 'react-scroll-percentage';
import {Box, Button, Container, Grid, Typography} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import {SocialIcon} from 'react-social-icons';
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    main: {
        [theme.breakpoints.down('lg')]: {
            textAlign: 'center'
        },
        [theme.breakpoints.up('md')]: {
            justifyContent: 'flex-start'
        }
    }
}));

const Footer = () => {
    const classes = useStyles();
    const [ref, percentage] = useScrollPercentage();
    const threshold = 0.2;
    const socialMedia = [
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/vishnu-dev/'
        },
        {
            name: 'Github',
            link: 'https://github.com/vishnu-dev'
        },
        {
            name: 'StackOverflow',
            link: 'https://stackoverflow.com/users/5120049/vishnudev?tab=profile'
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/iamvishnudev/'
        },
        {
            name: 'Medium',
            link: 'https://medium.com/@vishnu-dev'
        }
    ];
    return (
        <div className="Footer" id="contact" ref={ref}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{display: 'block'}}>
                <motion.path
                    fill={PALETTE.primary}
                    fillOpacity={1}
                    style={{y: 100 * (percentage > threshold ? (percentage - threshold) / (1 - threshold) : 0), x: 0}}
                    d="M0,256L80,240C160,224,320,192,480,192C640,192,800,224,960,240C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                </motion.path>
                <motion.path
                    fill={PALETTE.primary}
                    fillOpacity={0.6}
                    style={{y: 200 * (percentage > threshold ? (percentage - threshold) / (1 - threshold) : 0), x: 0}}
                    d="M0,192L60,186.7C120,181,240,171,360,165.3C480,160,600,160,720,138.7C840,117,960,75,1080,64C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </motion.path>
                <motion.path
                    fill={PALETTE.primary}
                    fillOpacity={0.3}
                    style={{y: 300 * (percentage > threshold ? (percentage - threshold) / (1 - threshold) : 0), x: 0}}
                    d="M0,32L60,48C120,64,240,96,360,101.3C480,107,600,85,720,69.3C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </motion.path>
            </svg>
            <div className="Content" style={{backgroundColor: PALETTE.primary, color: 'white'}}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.main}>
                            <Typography variant="h1" style={{fontWeight: 800}}>Let's work together</Typography>
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`mailto:contact@vishnudev.in`}
                                style={{fontWeight: 600, fontSize: '1.2em', marginTop: '20px', textTransform: 'none'}}
                                startIcon={<MailIcon></MailIcon>}
                            >
                                contact@vishnudev.in
                            </Button>
                        </Grid>
                        <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} justifyContent="center"
                              alignItems="center">
                            <Box alignItems="center" padding={4} flexGrow={0} display="inline-flex"
                                 flexDirection="column"
                                 style={{backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '15px'}}>
                                <Typography variant="h4" style={{color: 'black'}} gutterBottom>Digital
                                    Presence</Typography>
                                <Box style={{marginBottom: '20px'}}>
                                    {
                                        socialMedia.map((s, i) => (
                                            <motion.div
                                                whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}}
                                                style={{marginRight: '10px', display: 'inline-block'}}
                                                key={'social' + i}
                                            >
                                                <SocialIcon url={s.link} target="_blank"></SocialIcon>
                                            </motion.div>
                                        ))
                                    }
                                </Box>
                                <Typography variant="body1" style={{color: 'black'}} fontStyle="italic">
                                    Feel free to contact me :)
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
