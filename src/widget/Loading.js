/**
 *
 */
import React, { Component } from 'react';
import { Image, StyleSheet, DeviceEventEmitter } from 'react-native';
import styleUtil from '../common/styleUtil';

export default class Loading extends Component{
  constructor(){
    super();
    this.state = {
      show: true,
    };
  }
  componentWillMount(){
    
  }
  componentDidMount(){
    this.deEmitter = DeviceEventEmitter.addListener('loading', (a) => {
      this.setState({show: a});
    });
  }
  componentWillUnmount(){
    this.deEmitter.remove();
  }
  render(){
    return !this.state.show ?  null : 
    (
      <Image source={require('../img/loading.gif')} style={styles.loading} />
    )
  }

}

const styles = StyleSheet.create({
  loading:{
    position: 'absolute',
    marginTop: styleUtil.window.height - 20,
    width: 40,
    height: 40,
    zIndex: 10,
  },
})
