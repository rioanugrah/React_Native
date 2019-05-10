import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MenuButton from '../components/MenuButton'

export default class HomePage extends Component {
    _goToProfile=()=>{
        this.props.navigation.navigate('Profile')
    }
    _logout=()=>{
        this.props.navigation.navigate('Login')
    }
    static navigationOptions = {
        title: 'Home',
        headerStyle:{
            backgroundColor: 'skyblue'
        }
    };
  render() {
    return (
      <View style={styles.container}>
      <MenuButton navigation={this.props.navigation}/>
        <Text> This is your Home </Text>
            <View style={styles.button}>
            <Button
                title="Home"
                onPress={this._goToProfile}
            />
            </View>
            <View style={styles.button}>
            <Button
                title="Logout"
                onPress={this._logout}
            />
            </View>
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
