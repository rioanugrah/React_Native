import React from 'react';
import Login from './src/Login';
import HomePage from './src/HomePage';
import DrawerNavigator from './navigation/DrawerNavigator';
import {createSwitchNavigator,createStackNavigator,createBottomTabNavigator,createAppContainer, createDrawerNavigator} from "react-navigation";
import LinkScreen from './src/LinkScreen';
import SettingScreen from './src/SettingScreen';
import firebase from "firebase";
import AuthLoadingScreen from './screen/AuthLoadingScreen';
const LoginNavigasi = createSwitchNavigator(
  {
    Login:Login,
  }
)
const Navigasi = createSwitchNavigator(
  {
    Login:LoginNavigasi,
    Drawer:DrawerNavigator,
    AuthLoading:AuthLoadingScreen,
  },
  {initialRouteName:'Login'}
)
const AppContainer = createAppContainer(Navigasi);
export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyA19yztv_OQRKAwGOEVVBR6for7rpwI9hM",
    authDomain: "expo-575a3.firebaseapp.com",
    databaseURL: "https://expo-575a3.firebaseio.com",
    projectId: "expo-575a3",
    storageBucket: "expo-575a3.appspot.com",
    messagingSenderId: "578239107125",
    appId: "1:578239107125:web:e17d6b9169819c37"
    })
  }
  render() {
    return (
      // <HomePage/>
      <AppContainer/>
      // <DrawerNavigator/>
    );
  }
}