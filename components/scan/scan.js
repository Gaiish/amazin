import React, {Component} from 'react';
import {
  Text,
  View,
  Linking,
  Vibration,
}from 'react-native';

import styles from '../../styles/styles';
import Camera from 'react-native-camera';

export default class Scan extends Component{
  constructor(){
    super();
    this.state={
      scanning:true,
      cameraType: Camera.constants.Type.back
    }
  }

  static navigationOptions = {
    header: null
  }

  handleBarCodeRead(e){
    Vibration.vibrate();
    this.setState({scanning: false});
    Linking.openURL(e.data).catch(err=>console.error("err:",err));
    return;
  }

  render(){
    return(
      <View style={styles.rectangleContainer}>
        <Camera style={styles.camera} type={this.state.cameraType}
                onBarCodeRead={this.handleBarCodeRead.bind(this)}>
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle} />
          </View>
        </Camera>
      </View>
    )
  }
}
