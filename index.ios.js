/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import ChatView from './ChatView'

const App = StackNavigator({
  Main: {screen: ChatView}
});

AppRegistry.registerComponent('ChatUIExample', () => App);
