import React, { Component } from 'react';
import { View,ActivityIndicator,StatusBar } from 'react-native';
import firebase from "firebase";

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props)
    this.checkAuthState();
  }
  _checkAuthState = ()=>{
      firebase.auth().onAuthStateChanged((user)=>{
          if(user)
          { this.props.navigation.navigate('Home')}
          else
          { this.props.navigation.navigate('Auth')}
      });
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default"/>
      </View>
    );
  }
}
