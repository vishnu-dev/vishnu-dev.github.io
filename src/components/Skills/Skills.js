import React from 'react';
import './Skills.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Typography} from '@mui/material';
import Graph from "react-graph-vis";
import {range} from '../../Utils';
import {certificates} from '../../data/certificates';
import {makeStyles} from "@mui/styles";
import { v4 as uuidv4 } from 'uuid';

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
        {id: 35, label: "Certificates", image: "cert-icons/certificate.png", group: 'data'},
        {id: 36, label: "Certificates", image: "cert-icons/certificate.png", group: 'web'},
        ...certificates.map((cert, index) => {
            return {id: 36 + 1 + index, title: cert.name, group: 'certificate', image: "cert-icons/rec.png"};
        })
    ],
    edges: [
        {from: 1, to: 2, length: 600},
        {from: 1, to: 3, length: 600},
        {from: 1, to: 4, length: 600},
        {from: 4, to: 24, length: 300},
        {from: 3, to: 35, length: 400},
        {from: 2, to: 36, length: 400},
        ...range(5, 17).map(id => ({from: 2, to: id, length: 400})),            // Web Skills
        ...range(17, 24).map(id => ({from: 3, to: id, length: 300})),           // Data Skills
        ...range(25, 32).map(id => ({from: 24, to: id, length: 300})),          // AWS Skills
        ...range(32, 35).map(id => ({from: 4, to: id, length: 300})),           // Cloud Skills
        ...range(37, 50).map(id => ({from: 35, to: id, length: 200})),          // Data Certificates
        ...range(50, 52).map(id => ({from: 36, to: id, length: 200})),          // Web Certificates
    ]
};

const graphOptions = {
    autoResize: true,
    physics: {
        stabilization: true,
        barnesHut: {
            avoidOverlap: 1,
            centralGravity: 0.05,
            gravitationalConstant: -10000
        },
        minVelocity: 0.5
    },
    layout: {
        improvedLayout: true,
        hierarchical: {
            enabled: false,
            parentCentralization: true,
        }
    },
    interaction: {
        hover: true,
        navigationButtons: true,
        zoomView: true
    },
    nodes: {
        font: {
            color: '#FFFFFF'
        },
        shape: "image"
    },
    edges: {
        width: 12,
        hoverWidth: 13,
        arrows: {
            to: {
                enabled: false
            }
        },
        smooth: {
            enabled: true,
            type: 'continuous'
        },
        color: {inherit: true, opacity: 0.4}
    },
    groups: {
        root: {
            color: '#FF80FF',
            size: 100,
            font: {size: 50}
        },
        web: {
            color: '#00FFFF',
            size: 90,
            font: {size: 50}
        },
        data: {
            color: '#FF4000',
            size: 90,
            font: {size: 50}
        },
        cloud: {
            color: '#40FF80',
            size: 90,
            font: {size: 50}
        },
        skills: {
            color: 'rgb(255, 140, 0)',
            size: 50,
            font: {size: 40}
        },
        certificate: {
            size: 30,
            font: {size: 30}
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
        },
        boxShadow: '0 0 20px 1px' + theme.palette.secondary.main,
        borderRadius: '15px'
    }
}));

const Skills = () => {
    const classes = useStyles();
    return (
        <div className="Skills" id="skills">
            <Container maxWidth="xl">
                <Grid container spacing={3} justifyContent={'center'} style={{minHeight: '100vh'}}>
                    <Typography variant="h2" color="secondary" className="Header">
                        Skills & Certifications
                    </Typography>
                    <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                        <Grid container item xs={12} className={classes.graph}>
                            <Graph
                                graph={graph}
                                options={graphOptions}
                                key={uuidv4()}
                                getNetwork={network => {
                                    // network.stabilize(5);
                                }}
                            />
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
