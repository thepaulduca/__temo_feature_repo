'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Root from './app/root';
import PageTwo from './app/pageTwo';

export default class my_nav_app extends Component {

  renderScene(route, navigator) {
    if(route.name === 'root') {
      return <Root navigator={navigator} />
    }
    if(route.name === 'pagetwo') {
      return <PageTwo navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute = {{name: 'root'}}
        renderScene = {this.renderScene}
      />
    );
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

AppRegistry.registerComponent('my_nav_app', () => my_nav_app);
