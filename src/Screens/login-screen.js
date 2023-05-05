import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


//192.168.1.9

const LoginScreen = () => {

    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user,setUser] = useState({isLoggedIn:false, tokenData: null});

  useEffect(() => {
    const checkToken = async () => {
     const token = await AsyncStorage.getItem('userToken'); // Check if token exists in AsyncStorage
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set the token in the axios headers
        navigation.navigate('tab');
      }
    };

    checkToken();
  }, []);

  

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.9:3000/login', { email, password });
      const token=response.data.token;
      await AsyncStorage.setItem('userToken',token);
      if(response.status === 200)
    {  setUser({isLoggedIn:true,tokenData:token});
      navigation.navigate('tab');
    }
    else
    {
        setError('Cannot Reach the server');
    }
    } catch (err) {
      setError('Cannot Reach the server/ Invalid Credentilas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter User Credentials</Text> 
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Enter your Email Id"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.buttons} onPress={handleLogin} >Login</Text>
      <Text style={styles.buttons} onPress={() => navigation.navigate('Signup')} >SignUp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#2f4f4f',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  error: {
    color: '#a52a2a',
    fontSize:15,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius:10,
    marginBottom: 20,
    paddingLeft:10
  },
  buttons:{
    borderWidth:2,
    borderRadius:20,
    marginBottom:15,
    width:'50%',
    textAlign:'center',
    paddingTop:5,
    paddingBottom:5,
    fontSize:15,
    fontWeight:'bold'
  }
});

export default LoginScreen;
