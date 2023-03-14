import React, {useEffect} from 'react';
import './Projects.scss';
import {Grid, Typography} from "@mui/material";
import ProjectCard from "./ProjectCard/ProjectCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCards, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const projectsDataUrl = 'https://res.cloudinary.com/vishnu-dev/raw/upload/v1678806554/assets/projects/projects_data.json';

const Projects = () => {
    const [projectsData, setData] = React.useState({});
    useEffect(() => {
        fetch(projectsDataUrl)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="Projects" id="projects">
            <Typography variant="h2" color="secondary" className="Header" gutterBottom pt={4}>Projects</Typography>
            <Grid container justifyContent="center">
                <Grid xs={10} md={8} lg={6} xl={6} item pt={4} pb={4}>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        navigation={true}
                        autoplay={{delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false}}
                        modules={[EffectCards, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            Object.entries(projectsData).map(([key, value], i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <ProjectCard data={value} style={{margin: '0 auto'}}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Grid>
            </Grid>
        </div>
    );
}

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
