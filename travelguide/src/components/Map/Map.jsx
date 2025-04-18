import React from 'react'
import  GoogleMapReact from 'google-map-react';
import {paper,Typography,useMediaQuery} from '@materail-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@materail-ui/lab';

import useStyles from './styles';

const Map = () => {
    const classes=useStyles();
    const isMobile=useMediaQuery('(min-width:600px)');

    const coordinator={lat:0,lng:0};
    return (
    <div className={classes.mapContainer}>
        <GoogleMapReact bootstrapURLKeys={{key:'AIzaSyDSF3yHMAtgfpEKxxdBFhLwwF2Ui98nNtU'}}
        defaultCenter={coordinator}
        center={coordinator}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={''}
        onChildClick={''}
        >

        </GoogleMapReact>
    </div>
  );
}

export default Map;