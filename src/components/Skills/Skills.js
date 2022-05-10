import React from 'react';
import './Skills.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Typography} from '@mui/material';
import Graph from "react-graph-vis";
import {range} from '../../Utils';
import CertificateCard from '../CertficateCard/CertificateCard';
import {certificates} from '../../data/certificates';
import {motion} from "framer-motion";
import {makeStyles} from "@mui/styles";


const graph = {
    nodes: [
        {id: 1, label: "Technical Skills", image: "skill-icons/tools.png", group: 'root'},
        {id: 2, label: "Web", image: "skill-icons/web.png", group: 'web'},
        {id: 3, label: "Data", image: "skill-icons/data.png", group: 'data'},
        {id: 4, label: "Cloud", image: "skill-icons/cloud.png", group: 'cloud'},
        {id: 5, label: "HTML", image: "skill-icons/web/html.png", group: 'skills'},
        {id: 6, label: "JavaScript", image: "skill-icons/web/javascript.png", group: 'skills'},
        {id: 7, label: "CSS", image: "skill-icons/web/css.png", group: 'skills'},
        {id: 8, label: "TypeScript", image: "skill-icons/web/typescript.png", group: 'skills'},
        {id: 9, label: "Bootstrap", image: "skill-icons/web/bootstrap.png", group: 'skills'},
        {id: 10, label: "Figma", image: "skill-icons/web/figma.png", group: 'skills'},
        {id: 11, label: "Angular", image: "skill-icons/web/angular.png", group: 'skills'},
        {id: 12, label: "React", image: "skill-icons/web/react.png", group: 'skills'},
        {id: 13, label: "Material", image: "skill-icons/web/material.png", group: 'skills'},
        {id: 14, label: "Nodejs", image: "skill-icons/web/nodejs.png", group: 'skills'},
        {id: 15, label: "Nestjs", image: "skill-icons/web/nestjs.png", group: 'skills'},
        {id: 16, label: "SQL", image: "skill-icons/web/sql.png", group: 'skills'},
        {id: 17, label: "Python", image: "skill-icons/data/python.png", group: 'skills'},
        {id: 18, label: "Pandas", image: "skill-icons/data/pandas.png", group: 'skills'},
        {id: 19, label: "Numpy", image: "skill-icons/data/numpy.png", group: 'skills'},
        {id: 20, label: "NLTK", image: "skill-icons/data/nltk.png", group: 'skills'},
        {id: 21, label: "Spacy", image: "skill-icons/data/spacy.png", group: 'skills'},
        {id: 22, label: "BeautifulSoup", image: "skill-icons/data/beautifulsoup.png", group: 'skills'},
        {id: 23, label: "Excel", image: "skill-icons/data/excel.png", group: 'skills'},
        {id: 24, label: "AWS", image: "skill-icons/cloud/aws/aws.png", group: 'skills'},
        {id: 25, label: "EC2", image: "skill-icons/cloud/aws/ec2.png", group: 'skills'},
        {id: 26, label: "S3", image: "skill-icons/cloud/aws/s3.png", group: 'skills'},
        {id: 27, label: "RDS", image: "skill-icons/cloud/aws/rds.png", group: 'skills'},
        {id: 28, label: "Route53", image: "skill-icons/cloud/aws/route53.png", group: 'skills'},
        {id: 29, label: "AWS CLI", image: "skill-icons/cloud/aws/cli.png", group: 'skills'},
        {id: 30, label: "SQS", image: "skill-icons/cloud/aws/sqs.png", group: 'skills'},
        {id: 31, label: "ACM", image: "skill-icons/cloud/aws/acm.png", group: 'skills'},
        {id: 32, label: "Google APIs", image: "skill-icons/cloud/googleapis.png", group: 'skills'},
        {id: 33, label: "HTTPS/SSL", image: "skill-icons/cloud/ssl.png", group: 'skills'},
        {id: 34, label: "Domain management", image: "skill-icons/cloud/domain.png", group: 'skills'},
    ],
    edges: [
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 1, to: 4},
        {from: 4, to: 24},
        ...range(5, 17).map(id => ({from: 2, to: id})),            // Web Skills
        ...range(17, 24).map(id => ({from: 3, to: id})),           // Data Skills
        ...range(25, 32).map(id => ({from: 24, to: id})),          // AWS Skills
        ...range(32, 35).map(id => ({from: 4, to: id})),           // Cloud Skills
    ]
};

const graphOptions = {
    autoResize: true,
    layout: {
        clusterThreshold: 50,
        hierarchical: {
            enabled: false,
            parentCentralization: true
        }
    },
    interaction: {
        hover: true,
        navigationButtons: true,
        keyboard: true,
        zoomView: false
    },
    nodes: {
        font: {
            color: '#FFFFFF'
        },
        shape: "image"
    },
    edges: {
        width: 4,
        hoverWidth: 5.5,
        arrows: {
            to: {
                enabled: false
            }
        },
        smooth: true,
        color: {inherit: true, opacity: 0.4}
    },
    groups: {
        root: {
            color: '#FF80FF',
            size: 45,
            font: {size: 18}
        },
        web: {
            color: '#00FFFF',
            size: 40,
            font: {size: 18}
        },
        data: {
            color: '#FF4000',
            size: 40,
            font: {size: 18}
        },
        cloud: {
            color: '#40FF80',
            size: 40,
            font: {size: 18}
        },
        skills: {
            color: 'rgb(255, 140, 0)',
            font: {size: 16}
        }
    }
};

const useStyles = makeStyles((theme) => ({
    graph: {
        [theme.breakpoints.down('lg')]: {
            height: '60vh'
        },
        [theme.breakpoints.up('md')]: {
            height: '85vh'
        }
    }
}));

const Skills = () => {
    const classes = useStyles();
    return (
        <div className="Skills" id="skills">
            <Container maxWidth="xl">
                <Grid container spacing={3} style={{minHeight: '100vh'}}>
                    <Typography variant="h2" color="secondary" className="Header">
                        Skills & Certifications
                    </Typography>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Grid container item xs={12} className={classes.graph}>
                            <Graph
                                graph={graph}
                                options={graphOptions}
                                getNetwork={network => {
                                    network.stabilize(5);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Grid container item xs={12} justifyContent={"space-around"}
                              style={{paddingTop: '20px', maxHeight: '85vh', overflowY: 'scroll'}}>
                            {
                                certificates.map((certificate, i) => (
                                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} key={i} style={{padding: '20px 0'}}>
                                        <motion.div animate={{opacity: 1}}
                                                    transition={{type: "spring", stiffness: 100}}>
                                            <CertificateCard certData={certificate}/>
                                        </motion.div>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

Skills.propTypes = {};

Skills.defaultProps = {};

export default Skills;
