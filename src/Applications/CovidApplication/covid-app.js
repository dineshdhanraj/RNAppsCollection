import React,{useState} from 'react';
import {View,TextInput,Text, TouchableOpacity, Alert} from 'react-native';
import MainUrl from './covid-url';
import Load from './covid-load';
import HomeDetails from './covid-home';
export default function CovidApp(){

const Loader = {
    flag: "",
    todayCases: "",
    cases: "",
    recovered: "",
    todayRecovered: "",
    tests: ""
  };
  const [data, setData] = useState(Loader);
  const [text,setText]=useState('Sai');
  return(
    <View style={{backgroundColor:'white', flex:1}}>
       <TextInput placeholder='Enter the Country Name to find covid details' style={{borderWidth:2, marginTop:50, color:'black', paddingLeft:20, borderRadius:20, margin:20, height:40}} onChangeText={(text)=>{setText(text)}}/>
<TouchableOpacity onPress={async ()=>{
  const res=await Load(MainUrl(text));
  setData(res);
}} style={{backgroundColor:'red', alignItems:'center', alignSelf:'center'}}>
    <Text style={{fontSize:20}}> Search </Text>
    </TouchableOpacity>
    <View>
    <HomeDetails Covid_Details={data}/>
    </View>
    </View>
  )
}