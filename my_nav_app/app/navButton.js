'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';



export default class NavButton extends Component {
  render(){
    return(
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: 'blue',
    padding: 15,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
  }
})
