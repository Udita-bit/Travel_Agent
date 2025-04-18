import React from 'react';
import {CircularProgress,Grid,Typography,InputLable,MenuItem,FormControl,Select} from ;
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = () => {
  const classes = useStyles();
  const[type,setType]=useStates("restaurants");
  const[rating,setrating]=useState('');

  const places=[
    {name:'Cool place'},
    {name:"Best beer"},
    {name:'Best Streak'},
    {name:'Cool place'},
    {name:"Best beer"},
    {name:'Best Streak'},
    {name:'Cool place'},
    {name:"Best beer"},
    {name:'Best Streak'},
  ];

  return (
    <div className={classes.container}>
      <Typography varient ="h4">Restaurants,Hotels &Attractions around you</Typography>
      <FormControl className={classes.FormControl}>
        <InputLable>Type</InputLable>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotel">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.FormControl}>
        <InputLable>Rating</InputLable>
        <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.List}>
        {places?.map((place,i)=>(
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}/>
            </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default List