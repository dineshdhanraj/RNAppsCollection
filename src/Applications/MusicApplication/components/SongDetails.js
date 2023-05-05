import {View,Text,TouchableOpacity,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default function SongDetails({navigation,route}){
  const list=route.params.results;

  return(
    <View style={{marginTop:40, marginBottom:20}}>
      <View>
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Icon paddingLeft={5} name="arrowleft" color={'black'} size={40} />
        </TouchableOpacity>
      <Text style={{fontSize:40, marginBottom:20, textAlign:'center'}}> Collection List </Text>
      </View>
    <FlatList
    data={list}
    renderItem={({item})=>(<View style={{flexDirection:'row', justifyContent:'space-between', margin:10}}>
      <View style={{borderRadius:10, borderWidth:2, marginTop:2, width:'80%', paddingLeft:10}}>
      <Text style={{fontSize:18}}>{item.collectionName}</Text>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('SingerDetails',item)}}>
        <Icon backgroundColor='white' name="arrowright" color={'black'} size={25} />
        </TouchableOpacity>
        </View>)}
    />
    </View>
  )
}