import React from 'react';
import {Platform, Dimensions} from 'react-native';
import {createDrawerNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import HomePage from '../src/HomePage';
import ProfilePage from '../src/ProfilePage';
import LinkScreen from '../src/LinkScreen';
import SettingScreen from '../src/SettingScreen';
import MenuDrawer from '../components/MenuDrawer';
import CameraScreen from '../screen/CameraScreen';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: ({navigation}) => {
        return(<MenuDrawer navigation={navigation}/>)
    }
}
const TabNavigasi = createBottomTabNavigator(
    {
      Home:HomePage,
      Profile:ProfilePage,
    },
    {initialRouteName:'Home'}
  )
  
const DrawerNavigator = createDrawerNavigator(
    {
    Home:{
        screen:TabNavigasi
        },
    Links:{
        screen:LinkScreen
        },
    SettingScreen:{
        screen:SettingScreen
        },
    Camera:{
        screen:CameraScreen
    }
    },
    DrawerConfig
);
export default createAppContainer(DrawerNavigator);
