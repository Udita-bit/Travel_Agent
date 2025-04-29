import React,{useEffect,useState} from 'react';
import {CssBaseline, Grid} from '@mui/material';
import { getPlacesData ,getWeatherData} from './api/travelAdvisorAPI';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {

  const [places,setPlaces] = useState([]);
  const [weatherData,setWeatherData] = useState([]);
  const [filteredPaces ,setfilteredPlaces] = useState([]);
  const [ChildClicked,setChildClicked]=useState(null);

  const [coord,setcoord] = useState({});
  const [bounds,setbounds] = useState(null);
  const [isloading,setisloading] = useState(false);

  const[type,setType]=useState("restaurants");
  const[rating,setRating]=useState('');
  const [autocomplete,setautocomplete] = useState(null);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coord:{latitude,longitude}})=>{
      setcoord({lat:latitude,lng:longitude});
    });
  },[]);

  useEffect(()=>{
    const filteredPaces = places.filter((places)=>places.rating > rating);
    setfilteredPlaces(filteredPaces);
  },[rating]);

  useEffect(()=>{
    if(bounds){
      setisloading(true);

      getWeatherData(coord.lat,coord.lng)
      .then((data)=>setWeatherData(data)); 

     getPlacesData(type,bounds.sw,bounds.ne)
     .then((data)=>{
      setPlaces(data.filter((place)=>place.name && place.num_reviews > 0));
      setfilteredPlaces([]);
      setRating('');
      setisloading(false);
     });
    }
  },[type,bounds]);
  
  const onLoad = (autoC) => setautocomplete(autoC);
  const onPlaceChanged=()=>{
    const lat=autocomplete.getPlaces().getmetry.location.lat();
    const lng=autocomplete.getPlace().geometry.location.lng();
    setcoord ({lat,lng});
  };

  return (
    <>
      <CssBaseline/>
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List places={filteredPaces.length ? filteredPaces:places}
          ChildClicked ={ChildClicked}
          isloading={isloading}
          type={type}
          setType = {setType}
          rating={rating}
          setRating={setRating}
          />
      </Grid>
      <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Map
        setcoord={setcoord}
        coord={coord}
        setbounds={setbounds}
        places={filteredPaces.length ? filteredPaces :places}
        weatherData={weatherData}
        />
      </Grid>
      </Grid>
    </>
  );
};
export default App;