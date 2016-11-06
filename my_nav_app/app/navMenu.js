'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

import NavButton from './navButton';
import Root from './root';
import PageTwo from './pageTwo';

export default class NavMenu extends Component {

  navigate(routeName) {
    this.props.navigator.push({
      name : routeName
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <NavButton
          stlye={styles.container}
          onPress={this.navigate.bind(this, 'root')}
          text='Root'/>
        <NavButton
          stlye={styles.container}
          onPress={this.navigate.bind(this, 'pagetwo')}
          text='Page Two'/>
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
