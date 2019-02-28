
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator }from 'react-navigation'
import { Home,Main } from './Components';

export default class App extends Component{
  render() {
    return (
      <Main></Main>


      // <Home></Home>
    );
  }
}

