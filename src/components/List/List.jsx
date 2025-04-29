import React,{useState,useEffect,createRef} from 'react';
import {CircularProgress,Grid,Typography,InputLable,MenuItem,FormControl,Select} from '@mui/materail';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles.js';

const List = ({places,ChildClicked,isloading,type,setType,rating,setRating}) => {
  const classes = useStyles();
  const [elRefs,setElRefs] = useState([]);

  useEffect(()=>{
    const refs = Array(places.length).fill().map((_,i)=>refs[i] || createRef());
   
  },[places]);

  return (
    <div className={classes.container}>
      <Typography varient ="h4">Restaurants,Hotels &Attractions around you</Typography>
      { isloading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem"/>
          </div>
      ) :(
        <>
  
      <FormControl className={classes.FormControl}>
        <InputLable id="type">Type</InputLable>
        <Select id="type" value={type} onChange={(e)=>setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotel">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
        </FormControl >


      <FormControl className={classes.FormControl}>
        <InputLable id="rating">Rating</InputLable>
        <Select id="rating" value={rating} onChange={(e)=>setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.List}>
        {places?.map((place,i)=>(
          <Grid ref={elRefs[i]} item key={i} xs={12}>
            <PlaceDetails place={place}
            selected={Number(ChildClicked === i)}
            refProp={elRefs[i]}/>
            </Grid>
        ))}
      </Grid>
    </>
      )}
      </div>
  );
};

export default List;