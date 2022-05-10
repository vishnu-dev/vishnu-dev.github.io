import React from 'react';
import './ProjectCard.scss';
import {Grid, ImageListItem} from "@mui/material";

const ProjectCard = (props) => {
    return (
        <Grid container className={'ProjectCard' + props.position.charAt(0).toUpperCase() + props.position.slice(1).toLowerCase()}>
            <Grid item xl={12} style={{maxHeight: '80vh'}}>
                <ImageListItem>
                    <img src={props.data.image} />
                </ImageListItem>
            </Grid>
        </Grid>
    );
}

ProjectCard.propTypes = {};

ProjectCard.defaultProps = {};

export default ProjectCard;
