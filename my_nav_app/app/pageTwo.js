'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

import NavMenu from './navMenu';

export default class PageTwo extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello (page two) World!</Text>
        <NavMenu navigator={this.props.navigator}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
