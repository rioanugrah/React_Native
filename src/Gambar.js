import React from 'react';
import {Image} from 'react-native';
export default class Gambar extends React.Component{
    render(){
       return(
         <Image
         source={{uri: this.props.buah}}
         style={{width:193, height:110}}
         />
       );
     }
   }