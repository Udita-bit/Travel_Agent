import React,{useEffect,useState} from 'react';
import {CssBaseline, Grid} from '@mui/material';
import { getPlacesData } from './api/travelAdvisorAPI';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {

  const [places,setPlaces] = useState([]);
  const [ChildClicked,setChildClicked]=useState(null);

  const [coordinates,setcoordinates] = useState({});
  const [bounds,setbounds] = useState({});
  const [isloading,setisloading] = useState(false);
  const[type,setType]=useStates("restaurants");
  const[rating,setRating]=useState('');


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setcoordinates({lat:latitude,lng:longitude});
    })
  },[]);

  useEffect(()=>{
     getPlacesData(type,bounds.sw,bounds.ne)
     .then((data)=>{
      console.log(data);
      setPlaces(data);
      setisloading(false);
     })
  },[coordinates,bounds]);


  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List places={places}
          ChildClicked ={ChildClicked}
          isloading={isloading}
          type={type}
          setType = {setType}
          rating={rating}
          setRating={setRating}
          />
      </Grid>
      <Grid item xs={12} md={8}>
        <Map
        setcoordinates={setcoordinates}
        setbounds={setbounds}
        coordinates={coordinates}
        places={places}
        setChildClicked={setChildClicked}

        />
      </Grid>
      </Grid>
    </>
  );
}
export default App;