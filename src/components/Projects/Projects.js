import React from 'react';
import './Projects.scss';
import {Grid, Typography} from "@mui/material";
import ProjectCard from "./ProjectCard/ProjectCard";
import {motion} from 'framer-motion';
import {PALETTE} from "../../constants/Palette";

const projectsData = {
    'sygnifai': {
        name: 'Sygnifai',
        label: 'Sumyag Data Sciences',
        description: 'AI powered commercial insurance policy checker',
        image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1648980263/assets/projects/sygnifai_nble3q.png'
    },
    'resumegini': {
        name: 'ResumeGini',
        label: 'Sumyag Data Sciences',
        description: 'AI powered commercial insurance policy checker',
        image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1648980263/assets/projects/sygnifai_nble3q.png'
    },
    'spock': {
        name: 'SPOCK',
        label: 'Sumyag Data Sciences',
        description: 'AI powered commercial insurance policy checker',
        image: 'https://res.cloudinary.com/vishnu-dev/image/upload/v1648980263/assets/projects/sygnifai_nble3q.png'
    }
};

const Projects = () => {
    const initialProject = 'sygnifai';
    const [selectedProject, setSelectedProject] = React.useState(initialProject);
    return (
        <div className="Projects">
            <Typography variant="h2" color="secondary" className="Header" gutterBottom>Projects</Typography>
            <Grid container justifyContent="center">
                <Grid container item xs={3} justifyContent="right">
                    <Grid item>
                        {
                            Object.keys(projectsData).map((project, i) => (
                                <motion.h2
                                    fontWeight={600}
                                    onMouseOver={() => setSelectedProject(project)}
                                    onMouseOut={() => setSelectedProject(initialProject)}
                                    className={
                                        project === selectedProject ?
                                        (
                                            i === 0 ?
                                                'ProjectNameActivatedFirst' :
                                                (
                                                    i === Object.keys(projectsData).length - 1 ?
                                                    'ProjectNameActivatedLast' :
                                                    'ProjectNameActivated'
                                                )
                                        ) : 'ProjectNameDeactivated'
                                    }
                                    key={i}
                                    style={{
                                        color: project === selectedProject ? PALETTE.primary : '#c9c9c9'
                                    }}>
                                        {projectsData[project].name}
                                </motion.h2>
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid container item xs={9} justifyContent="left">
                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8} style={{paddingBottom: '30px'}}>
                        <ProjectCard
                            data={projectsData[selectedProject]}
                            position={
                                Object.keys(projectsData).indexOf(selectedProject) === 0 ?
                                    'first' :
                                    (
                                        Object.keys(projectsData).indexOf(selectedProject) === Object.keys(projectsData).length - 1 ?
                                            'last' :
                                            'middle'
                                    )
                            }/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
