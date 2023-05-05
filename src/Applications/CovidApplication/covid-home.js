import {View, Text} from 'react-native'


export default function Home({Covid_Details}){
  return(
    <View style={{marginTop: 50, paddingLeft:50}}>


      <View style={{padding:10,borderRadius:20,borderWidth:2, marginRight:50}}>
    <Text>Cases: {Covid_Details.cases}</Text>
    </View>

    <View style={{padding:10, borderRadius:20, marginTop:20,borderWidth:2, marginRight:50}}>
    <Text>Tests: {Covid_Details.tests}</Text>
    </View>
    <View style={{padding:10,borderRadius:20, marginTop:20,borderWidth:2, marginRight:50}}>
    <Text>Flag: {Covid_Details.flag}</Text>
    </View>

    <View style={{padding:10,borderRadius:20, marginTop:20,borderWidth:2, marginRight:50}}>
    <Text>Recovered: {Covid_Details.recovered}</Text>
    </View>

    </View>
  )
}

