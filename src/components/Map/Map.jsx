import React from 'react'
import  GoogleMapReact from 'google-map-react';
import {Paper,Typography,useMediaQuery} from '@mui/materail';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@materail-ui/lab/Rating';

import useStyles from './styles.js';

import mapStyles from './mapStyles';

const Map = ({coord,setcoord,places,setChildClicked,weatherData}) => {
    const classes=useStyles();
    const matches=useMediaQuery('(min-width:600px)');
    

    return (
    <div className={classes.mapContainer}>
        <GoogleMapReact bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={coord}
        center={coord}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={{disableDefaultUI:true , zoomControl:true , styles:mapStyles}}
        onChange={(e)=>{
          
          setcoord({ lat :e.center.lat,lng:e.center.lng});
          setbounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
        }}
        onChildClick={(child)=>{setChildClicked(child)}}
        >
        {places.length && places.map((places,i)=>(
          <div 
          className={classes.markerContainer}
          lat={Number(places.latitude)}
          lng={Number(places.longitude)}
          key={i}
          >
            {
              ! matches ?
                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
              : (
                <Paper elevation ={3} className={classes.Paper}>
                  <Typography className={classes.Typography} varient ="subtitle2" gutterBottom>{places.name}</Typography>
                  <img 
                  className={classes.pointer}
                  src={places.photo? places.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
                  />
                  <Rating name="read-only" size="small" value={Number(places.rating)} readOnly/>
                </Paper>
              )}
          </div>
        ))}
        {weatherData ?.list?.length && weatherData.list.map((data,i)=>(
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))}
        </GoogleMapReact>
    </div>
  );
};

export default Map;