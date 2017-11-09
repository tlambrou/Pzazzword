import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './src/components/Home'
var NativeRouter = require('react-router-native').NativeRouter
var Route = require('react-router-native').Route
var Link = require('react-router-native').Link
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers'

const store = createStore(reducers)

export default class App extends React.Component {

  generatePassword() {
    console.log("Password Generate!")
  }

  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
              <Route exact path='/' component={Home} />
          </NativeRouter>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: '#FB5258',
    fontSize: 56,
  },
  tagline: {
    color: '#DDD',
  },
});
