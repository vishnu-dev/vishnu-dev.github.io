import React from 'react';
import './Experience.scss';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {PALETTE} from '../../constants/Palette';
import {Grid, Link, Typography} from '@mui/material';
import {makeStyles} from "@mui/styles";
import {isMobile} from "react-device-detect";
import {useScrollPercentage} from "react-scroll-percentage";

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

const ExperienceElement = (index, item, label) => {
    const companyIcon = <img src="/edu_and_work/company.png" alt="Company"/>;
    const educationIcon = <img src="/edu_and_work/hat.png" alt="EducationIcon"/>;
    return (
        <VerticalTimelineElement
            key={label + index}
            className={'vertical-timeline-element--' + label}
            contentArrowStyle={{borderRightWidth: '7px', borderRightStyle: 'solid'}}
            date={item.year}
            iconStyle={{background: PALETTE.background}}
            icon={label === 'work' ? companyIcon : educationIcon}
        >
            <Link href={item.link} target={'_blank'} color={'inherit'} style={{textDecoration: 'none'}}>
                <Grid container spacing={2} className="Item">
                    <Grid item className="Image">
                        <img src={item.image} className="TimelineImage" alt={item.position}/>
                    </Grid>
                    <Grid item className="Details">
                        <Typography variant="h5" style={{fontWeight: 600}}>{item.company || item.institute}</Typography>
                        <Typography variant="overline">{item.position || item.examination}</Typography>
                    </Grid>
                </Grid>
            </Link>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    const classes = useStyles();
    const [ref, percentage] = useScrollPercentage();
    React.useEffect(() => {
        const eduHeight = percentage < 0.4 ? 0 : (percentage - 0.4) * 250;
        document.documentElement.style.setProperty('--dynamic-height-work', Math.min(100, percentage * 250) + '%');
        document.documentElement.style.setProperty('--dynamic-height-edu',  Math.min(100, eduHeight)  + '%');
    }, [percentage]);

    const education = [
        {
            institute: 'Kendriya Vidyalaya No.1 AFS Sambra, Belagavi',
            examination: 'All India Secondary School Examination - 10th',
            year: '2011-12',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543638/assets/kvsambra_r3rmfo.jpg',
            link: 'https://kvsangathan.nic.in/'
        },
        {
            institute: 'Expert PU College Mangalore',
            examination: 'Department Of Pre-University Education - 11th and 12th',
            year: '2012-14',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543637/assets/expert_avygul.jpg',
            link: 'http://kodialbail.expertclasses.org/'
        },
        {
            institute: 'Sir M Visvesvaraya Institute of Technology, Bangalore',
            examination: 'Bachelor of Engineering in Computer Science',
            year: '2014-18',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543638/assets/mvit_xagddx.jpg',
            link: 'https://www.sirmvit.edu/'
        },
        {
            institute: 'Friedrich-Alexander-Universität, Germany',
            examination: 'Master of Science in Artificial Intelligence',
            year: 'Current',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/c_scale,w_720/v1641054747/assets/FAU_Aerial_vgwgyd.jpg',
            link: 'https://www.fau.eu/'
        }
    ];
    const work = [
        {
            company: 'Crowd Product',
            position: 'Web Developer Intern',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543637/assets/crowdproduct_oxcsx7.png',
            year: 2016,
            link: 'https://coprotechnologies.com/'
        },
        {
            company: 'Sumyag Insights LLP',
            position: 'Data Science Intern',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543638/assets/sumyaginsights_uifw7a.png',
            year: 2018,
            link: 'https://yourstory.com/companies/sumyag-data-sciences'
        },
        {
            company: 'Sumyag Data Sciences Pvt Ltd',
            position: 'Data Scientist',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1617543638/assets/sumyagds_orsy6m.png',
            year: 2021,
            link: 'https://yourstory.com/companies/sumyag-data-sciences'
        },
        {
            company: 'Siemens Healthineers',
            position: 'Working student in Big Data Research',
            image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1678788662/assets/siemens-healthineers.webp',
            year: 'Current',
            link: 'https://www.siemens-healthineers.com/'
        }
    ];
    return (
        <div className="Experience" id="experience" ref={ref}>
            <Typography variant="h3" className={classes.header}>Work</Typography>
            <VerticalTimeline className="work" layout={isMobile ? '1-column-left' : '2-columns'} intersectionObserverProps={{threshold: 1}}>
                {
                    work.reverse().map((item, i) => ExperienceElement(i, item, 'work'))
                }
            </VerticalTimeline>
            <Typography variant="h3" className={classes.header}>Education</Typography>
            <VerticalTimeline className="edu" layout={isMobile ? '1-column-left' : '2-columns'} intersectionObserverProps={{threshold: 1}}>
                {
                    education.reverse().map((item, i) => ExperienceElement(i, item, 'edu'))
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
