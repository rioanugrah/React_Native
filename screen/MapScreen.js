import React, { Component } from 'react';
import { View, Text, Dimensions,StyleSheet } from 'react-native';
import {Constants,MapView,Location,Permissions} from "expo";

const window = Dimensions.get('window');
const {width,height}=window;
export default class MapScreen extends Component {
    constructor(props){
        super(props)

        this.state = {
            locationResult:null,
            location:{
                coords:{
                    latitude: -7.966,
                    longitude: 112.632
                }
            },
            mapRegion:{
                latitude: -7.966,
                longitude: 112.632,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0922
            }
        };
    };
    componentWillMount(){
        this._getLocationAsync();
    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
      };
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
        region={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922
        }}
        >
            <MapView.Marker 
                coordinate={this.state.location.coords}
                title="My Location"
                description="Hello"
            />
        </MapView>
        <Text>{JSON.stringify(this.state.location)}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
    map:{
        alignSelf: 'stretch',
        height:window.height*0.8
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      textAlign: 'center',
    },
  });