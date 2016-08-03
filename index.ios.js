/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
require('./App/Test');
class githubNoteTaker extends Component{
  render(){
    return(
      <View style={testing.global}>
        <Text>Aloha Moog</Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('githubNoteTaker', () => githubNoteTaker);
