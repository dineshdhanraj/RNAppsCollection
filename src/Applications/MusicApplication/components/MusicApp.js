import React,{useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function MusicApp(){

  const [name,setName] = useState('');
  const [data,setData] = useState('');
const navigation=useNavigation();
  const dataRender=async (name)=>{
const Url= "https://itunes.apple.com/search?term="+name;
    try{

      const res= await fetch(Url);
      const ans=await res.json();
      setData(ans);
      navigation.navigate('SongDetails', ans);
          }
          catch(error){
      setData('Content Not Found');
          }
    
  } 

  return(
    <View style={{ flexDirection:'row', flex:1, alignSelf:'center',alignItems:'center', alignContent:'center'}}>
    <TextInput placeholder='Enter Singer Name' onChangeText={(text)=>setName(text)} style={{borderWidth:2, borderRadius:20, justifyContent:'space-between', width:'70%', paddingLeft:10, paddingTop:2, marginLeft:10, paddingBottom:2}}/>
    <TouchableOpacity onPress={()=>dataRender(name)}>
    <Text style={{textAlign:'center', fontSize:18,color:'black', fontWeight:'bold', marginLeft:20, backgroundColor:'coral', borderRadius:10, padding:6}}> Search </Text>
    </TouchableOpacity>
    </View>
  )
}