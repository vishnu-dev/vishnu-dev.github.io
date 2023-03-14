import React from 'react';
import './Hobbies.scss';
import {Button, Grid, Typography} from '@mui/material';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Hobbies = () => {
    const [photos, setPhotos] = React.useState([]);
    const [designs, setDesigns] = React.useState([]);
    const [photosIndex, setPhotosIndex] = React.useState(-1);
    const [designsIndex, setDesignsIndex] = React.useState(-1);
    const maxPhotos = 15;

    const cloudinaryPhotosUrl = 'https://res.cloudinary.com/vishnu-dev/image/list/photography.json';
    const cloudinaryDesignsUrl = 'https://res.cloudinary.com/vishnu-dev/image/list/designs.json';
    const cloudinaryBaseUrl = 'https://res.cloudinary.com/vishnu-dev/image/upload';

    const createImageObject = (imageData) => {
        const alternativeImages = ([500, 800, 1024, 1600]).map((width) => {
            return {
                src: `${cloudinaryBaseUrl}/w_${width}/${imageData.public_id}.${imageData.format}`,
                width: width
            }
        });
        return {
            src: `${cloudinaryBaseUrl}/w_1600/${imageData.public_id}.${imageData.format}`,
            images: alternativeImages,
            width: imageData.width,
            height: imageData.height
        };
    };

    React.useEffect(() => {
        fetch(cloudinaryPhotosUrl)
            .then(response => response.json())
            .then(data => {
                setPhotos(data.resources.map(image => createImageObject(image)).slice(0, maxPhotos));
            }).catch(error => {
            console.log(error);
        });
        fetch(cloudinaryDesignsUrl)
            .then(response => response.json())
            .then(data => {
                setDesigns(data.resources.map(image => createImageObject(image)));
            }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div className="Hobbies" id="hobbies">
            <Lightbox
                slides={photos}
                open={photosIndex >= 0}
                index={photosIndex}
                close={() => setPhotosIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
            <Lightbox
                slides={designs}
                open={designsIndex >= 0}
                index={designsIndex}
                close={() => setDesignsIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
            <Grid container justifyContent="center" style={{minHeight: '90vh'}}>
                <Grid item xs={8} sm={8} md={6} lg={4} xl={4} style={{paddingTop: '10vh'}}>
                    <Typography variant="h2" color="secondary" className="Header"
                                gutterBottom>StackOverflow</Typography>
                    <iframe
                        title="StackOverflow Card"
                        src="https://vishnudev.in/stackoverflow-profile-card/#/user/5120049?size=large&gradient=%23091E3A%2C%232F80ED%2C%232D9EE0"
                        width="100%" height="100%" seamless frameBorder="0" scrolling="no"/>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" pt={6}>
                <Grid item xs={12} className="photography">
                    <Typography variant="h2" color="secondary" className="Header" gutterBottom pb={4}
                                pt={4}>Photography</Typography>
                    <PhotoAlbum layout="masonry" photos={photos} spacing={10} onClick={({index}) => setPhotosIndex(index)}/>
                </Grid>
                <Grid item xs={12} justifyContent={'center'} textAlign={'center'} className={'view-more'}>
                    <Button
                        variant="outlined"
                        color={'warning'}
                        style={{fontWeight: 800}}
                        startIcon={<KeyboardDoubleArrowDownIcon/>}
                        endIcon={<KeyboardDoubleArrowDownIcon/>}
                        href={'/photography'}
                    >Show more</Button>
                </Grid>
                <Grid item xs={12} style={{paddingTop: '10vh'}}>
                    <Typography variant="h2" color="secondary" className="Header" gutterBottom
                                pb={4}>Designs</Typography>
                    <PhotoAlbum layout="masonry" photos={designs} padding={1} onClick={({index}) => setDesignsIndex(index)}/>
                </Grid>
            </Grid>
        </div>
    );
}

Hobbies.propTypes = {};

Hobbies.defaultProps = {};

export default Hobbies;
