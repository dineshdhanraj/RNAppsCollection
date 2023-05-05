import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const response = await axios.post('http://192.168.1.9:3000/signup', { email, password });
      navigation.navigate('tab');
    } catch (err) {
      setError('Unable to Save Details');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register your details here</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
         
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Text style={styles.buttons} onPress={handleSignup} >SignUp</Text>
      <Text style={styles.buttons} onPress={() => navigation.navigate('Login')} >Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#ffe4c4'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    fontSize:15,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 20,
    padding: 10,
    borderRadius:10,
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

export default SignupScreen;
