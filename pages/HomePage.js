// import * as React from 'react';
//import { Button, View, Alert, Text } from 'react-native';

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
  } from "react-native";

// const HomeScreen = ({ navigation }) => {
//    return (
//       <><Button title="Click Here" onPress={() => navigation.navigate('About', { name: 'About Page' })} />
//       <Button title="Click for login" onPress={() => navigation.navigate('Login', { name: 'Login Page' })} /></>
//    );
// };
// export default HomeScreen;


export default function App(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const HomeScreen = ({ navigation }) => {
//     return (
//        <><Button title="Click Here" onPress={() => navigation.navigate('About', { name: 'About Page' })} />
//        <Button title="Click for login" onPress={() => navigation.navigate('Login', { name: 'Login Page' })} /></>
//     );
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     {/* <Image style={styles.image} source={require("./assets/log2.jpg")} /> */}
 
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={() => navigation.navigate('Login', { name: 'Login Page' })} >LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 320,
    height: 320,
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#8BE3E3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft: 20,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8BE3E3",
  },
})}