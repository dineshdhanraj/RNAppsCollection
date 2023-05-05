import React,{useEffect} from 'react';
import {View,Text, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import { Details } from '../Actions/actions';


export default function EarthQuakeTracker(){
const dispatch=useDispatch();
const list = useSelector(state => state.listDetails);
const err = useSelector(state=>state.listError);


const ListDetails=({item})=>
{ 
      return(  
     <View style={{marginTop:10, borderWidth:2, borderRadius:20, width:'80%', padding:10, marginLeft:20, marginRight:20}}>
        <Text>Magnitude: {item.properties.mag}</Text>
        <Text style={{marginTop:5}}>Place: {item.properties.place}</Text>
     </View>
      )
} 


useEffect(()=>{
dispatch(Details('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-06-14&endtime=2021-06-20'));
},[])

return(
<View>
    {list.length!==0?(<View>
  <Text style={{marginTop:50, textAlign:'center'}}>Listing Size is  {list.features.length}</Text>
  <FlatList
  data={list.features}
  renderItem={ListDetails}
  />
  </View>):<View><ActivityIndicator size={100} marginTop={350}  color="#0000ff" /><Text style={{marginLeft:190, marginTop:30}}>Loading ...</Text></View>}
  </View>
)
}