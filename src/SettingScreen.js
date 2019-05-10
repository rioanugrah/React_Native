import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MenuButton from '../components/MenuButton'
export default class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation}/>
        <Text style={styles.text}>SettingScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: 'center',
    },
    button:{
        width:'90%'
    }
});