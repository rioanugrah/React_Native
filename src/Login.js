import React, {Component} from 'react';
import {View,TextInput,Image,StyleSheet,Button} from 'react-native';

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:''
    };
  };
  static navigationOptions = {title:'Login', header:null};
  _onPressLogin=()=>{
    if (this.state.username == 'admin' && this.state.password =='12345'){
      alert('Login Sukses');
      this.setState({username:'',password:''});
      this.props.navigation.navigate('Home');
    } else{
      alert('Login Gagal');
      this.setState({password:''});
    }
  }
  _onPressCancel=()=>{
      this.setState({username:'',password:''});
  }
  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.image}
          source={require('../assets/logo.png')}
          />
          <TextInput style={styles.input}
          placeholder="Your Username"
          value={this.state.username}
          onChangeText={(inputan)=>this.setState({username:inputan})}
          />
          <TextInput style={styles.input}
          placeholder="Your Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(inputan)=>this.setState({password:inputan})}
          />
          <View style={styles.button}>
            <Button
            onPress={this._onPressLogin}
            title="Login"
            color="#63CDE2"
            />
          </View>
          <View style={styles.button}>
            <Button
            onPress={this._onPressCancel}
            title="Cancel"
            color="#7FD6E7"
            />
          </View>   
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
image:{
    width:300,
    height:130
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