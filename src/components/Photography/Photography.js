import React from 'react';
import './Photography.scss';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import {Grid, Typography} from "@mui/material";
import PhotoAlbum from "react-photo-album";

const Photography = () => {
    const [photos, setPhotos] = React.useState([]);
    const [photosIndex, setPhotosIndex] = React.useState(-1);
    const cloudinaryPhotosUrl = 'https://res.cloudinary.com/vishnu-dev/image/list/photography.json';
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
                setPhotos(data.resources.map(image => createImageObject(image)));
            }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div className="Photography">
            <Lightbox
                slides={photos}
                open={photosIndex >= 0}
                index={photosIndex}
                close={() => setPhotosIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
            <Grid container justifyContent="center" pt={8}>
                <Grid item xs={12} className="photography">
                    <Typography variant="h2" color="secondary" className="Header" gutterBottom pb={4}
                                pt={4}>Photography</Typography>
                    <PhotoAlbum layout="masonry" photos={photos} spacing={10} onClick={({index}) => setPhotosIndex(index)}/>
                </Grid>
            </Grid>
        </div>
    );
};

Photography.propTypes = {};

Photography.defaultProps = {};

export default Photography;
