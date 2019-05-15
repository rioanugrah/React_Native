import React, { Component } from 'react';
import { Alert,ImageBackground,SaveAreaView,View,TouchableOpacity,Text } from 'react-native';
import { Camera,Permissions,MediaLibrary } from "expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from 'react-navigation';
export default class CameraScreen extends Component {
    constructor() {
      super();
      this.state ={
          cameraPermission:null,
          cameraRollPermission:null,
          imgSrc:null,
          type: Camera.Constants.Type.back
      }
    }

    async componentWillMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({cameraPermission: status === 'granted'});
        const {statusCameraRoll} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({cameraRollPermission: statusCameraRoll === 'granted'});
    }
    
  render() {
      const {cameraPermission,imgSrc,type} = this.state;
      if(cameraPermission === null){
          return null;
      }else if(cameraPermission === false){
          return <Text>No Access to camera</Text>
      }

      if(imgSrc){
          return(
              <ImageBackground
                resizeMode="stretch"
                source={{uri:imgSrc}}
                style={{ flex:1,justifyContent:'flex-end' }}
              >
                <View style={{
                    flex:0.1,
                    flexDirection:'row',
                    justifyContent:'space-evenly'}}
              >
                <TouchableOpacity onPress={this._savePicture}>
                    <Ionicons name="md-save" color="white" size={32} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({imgSrc:null})}>
                    <Ionicons name="md-trash" color="white" size={32} />
                </TouchableOpacity>
                </View>
              </ImageBackground>
          )
      }
      return(
          <SafeAreaView style={{flex:1}}>
          <Camera
                ref={(ref)=>(this.camera=ref)}
                type={type}
                style={{ flex:1,justifyContent:'flex-end' }}
              >
                <View style={{
                    flex:0.1,
                    flexDirection:'row',
                    justifyContent:'space-evenly'}}
              >
                <TouchableOpacity onPress={this._takePicture}>
                    <Ionicons name="md-camera" color="white" size={32} />
                </TouchableOpacity>

                <TouchableOpacity onPress={this._switchCamera}>
                    <Ionicons name="md-refresh" color="white" size={32} />
                </TouchableOpacity>
                </View>
              </Camera>
          </SafeAreaView> 
      )
  }
  _takePicture = async ()=>{
        const {uri}=await this.camera.takePictureAsync();
        const imgSrc = uri;
        this.setState({imgSrc})
  }
  _switchCamera = ()=>{
      this.setState({
          type: this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
      })

  }
  _savePicture = async ()=>{
      const asset = await MediaLibrary.createAssetAsync(this.state.imgSrc);
      MediaLibrary.createAlbumAsync('Expo',asset)
        .then(()=>{
            Alert.alert('Image saved');
        })
        .catch(error=>{
            Alert.alert('An error occured');
        })
  }
}