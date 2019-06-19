import React, {Component} from 'react';
import {Text,View,TextInput,Image,StyleSheet,Button,KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import firebase from "firebase";
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',
      error:'',
      success:'',
      loading:false
    }
  }
  static navigationOptions = {title:'Login', header:null};
  _onPressLogin=()=>{
    this.setState({
      success:'',
      error:'',
      loading:true
    });
    const{email,password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(data => {
      this.setState({
        email:'',
        password:'',
        success:'Login Success',
        loading:false
      });
      this.props.navigation.navigate('Home');
    }).catch(e => {
      this.setState({
        error:'Login failed',
        success:'',
        loading:false
      })
    })
    // if (this.state.username == 'admin' && this.state.password =='12345'){
    //   alert('Login Sukses');
    //   this.setState({username:'',password:''});
    //   this.props.navigation.navigate('Home');
    // } else{
    //   alert('Login Gagal');
    //   this.setState({password:''});
    // }
  }
  _onPressCancel=()=>{
      this.setState({email:'',password:''});
  }
  _loading(){
    if (this.state.loading){
      return <ActivityIndicator/>
    }
    return <Text>{this.state.success}{this.state.error}</Text>
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding enabled">
          <Image style={styles.image}
          source={require('../assets/logo.png')}
          />
          {this._loading()}
          <TextInput style={styles.input}
          placeholder="Your email"
          value={this.state.email}
          onChangeText={(inputan)=>this.setState({email:inputan})}
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
      </KeyboardAvoidingView>
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