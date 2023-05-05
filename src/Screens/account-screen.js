import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {

const navigation=useNavigation();
const handleLogout= async ()=>{
    try {
        await AsyncStorage.removeItem('userToken');
        navigation.navigate('Login');
      } catch (err) {
      }
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Logout Screen!</Text>
      <TouchableOpacity onPress={()=>handleLogout()}>
      <Text style={{marginTop:20, fontSize:30, color:'white'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#2f4f4f'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AccountScreen;
