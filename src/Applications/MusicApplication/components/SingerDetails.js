import {Text,View, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function SingerDetails({route}){
  const data=route.params;
  const navigation=useNavigation();
  return(
    <View style={{marginTop:40, backgroundColor:'aquamarine', flex:1}}>
    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Icon backgroundColor='aquamarine' paddingLeft={5} name="arrowleft" color={'black'} size={40} />
        </TouchableOpacity>
        
    <View style={{marginTop:50, justifyContent:'center', flex:1}} >
      <View style={styles.textBox}>
    <Text>Artist Id: {data.artistId}</Text>
    </View>
    <View style={styles.textBox}>
    <Text>Artist Name: {data.artistName}</Text>
    </View>
    <View style={styles.textBox}>
    <Text>ReleaseDate: {data.releaseDate}</Text>
    </View>
    <View style={styles.textBox}>
    <Text>Currency: {data.currency}</Text>
    </View>
    <View style={styles.textBox}>
    <Text>Disc Count: {data.discCount}</Text>
    </View>
    </View>
    </View>
  )
}


const styles=StyleSheet.create({
  textBox:{
    borderRadius:10,
    borderWidth:2,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
    padding:5
  }
})