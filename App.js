import React from 'react';
import Login from './src/Login';
import HomePage from './src/HomePage';
import DrawerNavigator from './navigation/DrawerNavigator';
import {createSwitchNavigator,createStackNavigator,createBottomTabNavigator,createAppContainer, createDrawerNavigator} from "react-navigation";
import LinkScreen from './src/LinkScreen';
import SettingScreen from './src/SettingScreen';

const LoginNavigasi = createSwitchNavigator(
  {
    Login:Login,
  }
)
const Navigasi = createSwitchNavigator(
  {
    Login:LoginNavigasi,
    Drawer:DrawerNavigator,
  },
  {initialRouteName:'Login'}
)
const AppContainer = createAppContainer(Navigasi);
export default class App extends React.Component {
  render() {
    return (
      // <HomePage/>
      // <AppContainer/>
      <DrawerNavigator/>
    );
  }
}
