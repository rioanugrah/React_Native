import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MenuButton from '../components/MenuButton'
export default class ProfilePage extends Component {
    _goToHome=()=>{
        this.props.navigation.navigate('Home')
    }
    static navigationOptions = {
        title: 'Profile',
        headerStyle:{
            backgroundColor: 'skyblue'
        }
    }
    render() {
      return (
        <View style={styles.container}>
          <MenuButton navigation={this.props.navigation}/>
          <Text> This is your Profile </Text>
              <View style={styles.button}>
              <Button
                  title="Profile"
                  onPress={this._goToHome}
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
