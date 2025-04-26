import React from 'react'
import  GoogleMapReact from 'google-map-react';
import {paper,Typography,useMediaQuery} from '@mui/materail';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@materail-ui/lab/Rating';

import useStyles from './styles';

const Map = ({setbounds,setcoordinates,coordinates,places}) => {
    const classes=useStyles();
    const isDesktop=useMediaQuery('(min-width:600px)');
    

    const coordinator={lat:0,lng:0};
    return (
    <div className={classes.mapContainer}>
        <GoogleMapReact bootstrapURLKeys={{key:'AIzaSyDSF3yHMAtgfpEKxxdBFhLwwF2Ui98nNtU'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e)=>{
          
          setcoordinates({ lat :e.center.lat,lng:e.center.lng});
          setbounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
        }}
        onChildClick={(child)=>{setChildClicked(child)}}
        >
        {places?.map((places,i)=>(
          <div 
          className={classes.markerContainer}
          lat={Number(places.latitude)}
          lng={Number(places.longitude)}
          key={i}
          >
            {
              !isDesktop ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
              ) : (
                <paper elevation ={3} className={classes.paper}>
                  <Typography className={classes.Typography} varient ="subtitle2" gutterBottom>{places.name}</Typography>
                  <img 
                  className={classes.pointer}
                  src={places.photo? places.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
                  />
                  <Rating name="read-only" size="small" value={Number(places.rating)} readOnly/>
                </paper>
              )}
          </div>
        ))}
        </GoogleMapReact>
    </div>
  );
};

export default Map;