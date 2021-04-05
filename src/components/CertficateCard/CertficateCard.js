import React from 'react';
import PropTypes from 'prop-types';
import './CertficateCard.scss';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { PALETTE } from '../../constants/Palette';
import { Typography } from '@material-ui/core';

const CertficateCard = (props) => {
  return (
    <Box className="CertficateCard" style={{background: PALETTE.card}} display="flex" alignItems="center">
      <div className="Image">
        <div className="GradientWrapper" style={{backgroundImage: props.certData.gradient}}></div>
        <img src={props.certData.image}></img>
      </div>
      <Box>
        <Typography variant="h5" gutterBottom>{props.certData.name}</Typography>
        <Typography variant="body2" gutterBottom>{props.certData.description}</Typography>
        <Typography variant="overline" style={{fontWeight: 200}}>{props.certData.from} - {props.certData.to}</Typography>
      </Box>
    </Box>
  );
}

CertficateCard.propTypes = {};

CertficateCard.defaultProps = {};

export default CertficateCard;
