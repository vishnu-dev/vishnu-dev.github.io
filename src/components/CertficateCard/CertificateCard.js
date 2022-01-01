import React from 'react';
import './CertficateCard.scss';
import Box from '@mui/material/Box';
import {PALETTE} from '../../constants/Palette';
import {Typography} from '@mui/material';

const CertificateCard = (props) => {
    return (
        <Box className="CertificateCard" style={{background: PALETTE.card}} display="flex" alignItems="center">
            <div className="Image">
                <div className="GradientWrapper" style={{backgroundImage: props.certData.gradient}}></div>
                <img src={props.certData.image}></img>
            </div>
            <Box>
                <Typography gutterBottom>{props.certData.name}</Typography>
                <Typography variant="body2" style={{color: 'grey'}}
                            gutterBottom>{props.certData.description}</Typography>
                <Typography variant="overline"
                            style={{color: 'grey'}}>{props.certData.from} - {props.certData.to}</Typography>
            </Box>
        </Box>
    );
}

CertificateCard.propTypes = {};

CertificateCard.defaultProps = {};

export default CertificateCard;
