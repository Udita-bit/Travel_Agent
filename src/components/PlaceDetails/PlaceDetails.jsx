import React from "react"
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from "@mui/material";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles.js";

const PlaceDetails =({places,selected,refProp}) => {
  const classes= useStyles();
  if (selected) refProp ?.current?.scrollIntoView({behavior :"smooth",block:"start"})
  
}
  const classes = useStyles();

  return(
    <Card elevation={6}>
      <CardMedia
      style={{height:350}}
      image={places.photo ? places.photo.images.large.url:"https://tse2.mm.bing.net/th?id=OIP.SDwnZMaktoyfIxJ8rxnbXgHaE8&pid=Api&P=0&h=180"}
      title={places.name}
      />
      <CardContent>
      <Typography gutterBottom varient ="h5 ">{places.name}</Typography>
        <Box display ="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(places.rating)} readOnly />
          <Typography component ="legend">{places.num_reviews} review{places.num_reviews> 1 && 's'}</Typography>
          </Box>

        <Typography gutterBottom varient ="h5 ">{places.name}</Typography>
        <Box display ="flex" justifyContent="space-between">
          <Typography varient="subtitle1">Price</Typography>
          <Typography  gutterBottom varient="subtitle1">{places.price_level}Price</Typography>
        </Box>

        <Box display ="flex" justifyContent="space-between">
          <Typography varient="subtitle1">Ranking</Typography>
          <Typography  gutterBottom varient="subtitle1">{places.ranking}Ranking</Typography>
        </Box>

        {places?.awards?.map((award)=>(
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small}/>
            <Typography varient="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
  ))}
  {places?.cuisine?.map(({name})=>(
    <Chip key={name} size="small" label={name} className={classes.chip}/>

  ))}
  {places.address && (
    <Typography gutterBottom varient="body2" color="textSecondary" className={classes.subtitle}>
      <LocationOnIcon/>{places.address}
    </Typography>
  )}
  {places.phone && (
    <Typography varient="body2" color="textSecondary" className={classes.spacing}>
      <LocationOnIcon/>{places.phone}
    </Typography>
  )}
   </CardContent>
  <CardActions>
    <Button size="small" color="primary" onClick={()=>window.open(places.web_url,'_blank')}>
      Trip Advisor
    </Button>
    <Button size="small" color="primary" onClick={()=>window.open(places.website,'_blank')}>
      Website
    </Button>
  </CardActions>

      
    </Card>
  );
};
export default PlaceDetails;