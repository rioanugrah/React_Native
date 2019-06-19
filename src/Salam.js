import React from 'react';
import {Text} from 'react-native';

export default class Salam extends React.Component{
    render(){
      return(
        <Text>Selamat {this.props.waktu}</Text>
      );
    }
  }