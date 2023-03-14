import React from 'react';
import './Experience.scss';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {PALETTE} from '../../constants/Palette';
import {Grid, Typography} from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        [theme.breakpoints.down('lg')]: {
            textAlign: 'left',
            margin: '20px 20px',
            fontWeight: 800,
            opacity: 0.5
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '20px 0',
            fontWeight: 800,
            opacity: 0.5
        }
    },
    timelineEnd: {
        [theme.breakpoints.down('lg')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'center'
        }
    }
}));

const Experience = () => {
    const classes = useStyles();
    const education = [
        {
            institute: 'Kendriya Vidyalaya No.1 AFS Sambra, Belagavi',
            examination: 'All India Secondary School Examination - 10th',
            year: '2011-12',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543638/assets/kvsambra_r3rmfo.jpg'
        },
        {
            institute: 'Expert PU College Mangalore',
            examination: 'Department Of Pre-University Education - 11th and 12th',
            year: '2012-14',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543637/assets/expert_avygul.jpg'
        },
        {
            institute: 'Sir M Visvesvaraya Institute of Technology, Bangalore',
            examination: 'Bachelor of Engineering in Computer Science',
            year: '2014-18',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543638/assets/mvit_xagddx.jpg'
        },
        {
            institute: 'Friedrich-Alexander-Universität, Germany',
            examination: 'Master of Science in Artificial Intelligence',
            year: 'Current',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/c_scale,w_720/v1641054747/assets/FAU_Aerial_vgwgyd.jpg'
        }
    ];
    const work = [
        {
            company: 'Crowd Product',
            position: 'Web Developer Intern',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543637/assets/crowdproduct_oxcsx7.png',
            year: 2016
        },
        {
            company: 'Sumyag Insights LLP',
            position: 'Data Science Intern',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543638/assets/sumyaginsights_uifw7a.png',
            year: 2018
        },
        {
            company: 'Sumyag Data Sciences Pvt Ltd',
            position: 'Data Scientist',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543638/assets/sumyagds_orsy6m.png',
            year: 2021
        },
        {
            company: 'Siemens Healthineers',
            position: 'Working student in Big Data Research',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1678788662/assets/siemens-healthineers.webp',
            year: 'Current'
        }
    ];
    return (
        <div className="Experience" id="experience">
            <Typography variant="h3" className={classes.header}>Work</Typography>
            <VerticalTimeline>
                {
                    work.reverse().map((item, i) => (
                        <VerticalTimelineElement
                            key={'work' + i}
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{borderRightWidth: '7px', borderRightStyle: 'solid'}}
                            date={item.year}
                            iconStyle={{background: PALETTE.background}}
                            icon={<img src="/edu_and_work/company.png" alt="Company"/>}
                        >
                            <Grid container spacing={2} className="Item">
                                <Grid item className="Image">
                                    <img src={item.image} className="TimelineImage" alt={item.position}/>
                                </Grid>
                                <Grid item className="Details">
                                    <Typography variant="h5" style={{fontWeight: 600}}>{item.company}</Typography>
                                    <Typography variant="overline">{item.position}</Typography>
                                </Grid>
                            </Grid>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
            <Typography variant="h3" className={classes.header}>Education</Typography>
            <VerticalTimeline>
                {
                    education.reverse().map((item, i) => (
                        <VerticalTimelineElement
                            key={'edu' + i}
                            className="vertical-timeline-element--edu"
                            contentArrowStyle={{borderRightWidth: '7px', borderRightStyle: 'solid'}}
                            date={item.year}
                            iconStyle={{background: PALETTE.background}}
                            icon={<img src="/edu_and_work/hat.png" alt="EducationIcon"/>}
                        >
                            <Grid container spacing={2} className="Item">
                                <Grid item className="Image">
                                    <img src={item.image} className="TimelineImage" alt="TimelineImage"/>
                                </Grid>
                                <Grid item className="Details">
                                    <Typography variant="h5" style={{fontWeight: 600}}>{item.institute}</Typography>
                                    <Typography variant="overline">{item.examination}</Typography>
                                </Grid>
                            </Grid>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
            <div className={classes.timelineEnd}>
                <div className="Circle"/>
            </div>
        </div>
    );
}

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
