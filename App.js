// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";
 
// export default function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
 
//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} source={require("./assets/log2.jpg")} />
 
//       <StatusBar style="auto" />
//       {/* <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Email"
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         />
//       </View>
 
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password"
//           placeholderTextColor="#003f5c"
//           secureTextEntry={true}
//           onChangeText={(password) => setPassword(password)}
//         />
//       </View> */}
 
//       {/* <TouchableOpacity>
//         <Text style={styles.forgot_button}>Forgot Password?</Text>
//       </TouchableOpacity> */}

//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>SIGN UP</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   image: {
//     width: 320,
//     height: 320,
//     marginBottom: 40,
//   },
 
//   inputView: {
//     backgroundColor: "#8BE3E3",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
 
//     alignItems: "center",
//   },
 
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },
 
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//     marginLeft: 20,
//   },
 
//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#8BE3E3",
//   },
// });
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
const Stack = createStackNavigator();
const MyStack = () => {
   return (
      <NavigationContainer><Stack.Navigator><Stack.Screen name="Home" component={HomePage} options={{ title: 'From home page : Navigation' }} /><Stack.Screen name="About" component={AboutPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator></NavigationContainer>
   );
};
export default MyStack;