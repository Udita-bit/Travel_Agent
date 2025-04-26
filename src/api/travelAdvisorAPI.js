
import axios from 'axios';

const URL ="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const getPlacesData=async(sw,ne)=>{
    try{
        const {data :{data}} = await axios.get(URL,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            
          },
          headers: {
            'x-rapidapi-key': '7c5d687b2fmsh788b8133e95402dp169b37jsn94269aa7b7bf',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
          }
        });
          
        return data;
    }catch(error){
        console.log(error)
    }
}