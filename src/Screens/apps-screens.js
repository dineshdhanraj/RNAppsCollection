import React from 'react'
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign';

export default function AppScreens(){

    const navigation=useNavigation();
    return(
        <View style={{backgroundColor:'#2f4f4f',flex:1}}>

            <View style={{justifyContent:'space-between',alignItems:'center', flexDirection:'row'}}>
            <Text style={[styles.appNameView,{marginTop:150}]}> Covid Application </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('CovidApp')}}>
        <Icon marginTop={150} marginRight={20} backgroundColor='white' name="arrowright" color={'black'} size={25} />
        </TouchableOpacity>
        </View>



        <View style={{justifyContent:'space-between',alignItems:'center', flexDirection:'row'}}>
            <Text style={[styles.appNameView,{marginTop:100}]}> EarthQuake Application </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('EarthQuakeTrackerApp')}}>
        <Icon marginTop={100} marginRight={20} backgroundColor='white' name="arrowright" color={'black'} size={25} />
        </TouchableOpacity>
        </View>

        <View style={{justifyContent:'space-between',alignItems:'center', flexDirection:'row'}}>
            <Text style={[styles.appNameView,{marginTop:100}]}> Music Application </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('MusicApp')}}>
        <Icon marginTop={100} marginRight={20} backgroundColor='white' name="arrowright" color={'black'} size={25} />
        </TouchableOpacity>
        </View>

        <View style={{justifyContent:'space-between',alignItems:'center', flexDirection:'row'}}>
            <Text style={[styles.appNameView,{marginTop:100}]}> Food App UI Application </Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('FoodAppUI')}}>
        <Icon marginTop={100} marginRight={20} backgroundColor='white' name="arrowright" color={'black'} size={25} />
        </TouchableOpacity>
        </View>
        </View>
    )


}


const styles=StyleSheet.create({
    appNameView:{
        marginTop:10,paddingTop:2, paddingBottom:2,backgroundColor:'#d3d3d3', width:'70%', marginLeft:20, fontSize:25, borderWidth:2,justifyContent:'center', textAlign:'center', borderRadius:20
    }
})