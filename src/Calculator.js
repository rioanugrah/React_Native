import React, {Component} from 'react';
import {View,TextInput,Image,StyleSheet,Button,Text} from 'react-native';

export default class Calculator extends Component {
  constructor(props){
      super(props)
      this.state={
          usd:'',
          idr:''
      };
  };
  _onPressConvert=()=>{
    this.setState({idr:"Rp. "+this.state.usd*14000});
  }
    render() {
    return (
      <View style={styles.container}>
          <TextInput style={styles.input}
          placeholder="USD"
          value={this.state.usd}
          onChangeText={(inputan)=>this.setState({usd:inputan})}
          />
          <View style={styles.button}>
            <Button
            onPress={this._onPressConvert}
            title="Convert"
            color="#63CDE2"
            />
            </View>
           <Text>{this.state.idr}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#D4F1F7'
},
input:{
    backgroundColor:'white',
    borderColor:'#52A8B9',
    borderRadius:5,
    width:'90%',
    padding:5,
    marginBottom:10,
},
button:{
    width:'90%',
    marginBottom:10,
}
});