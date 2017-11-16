import { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Home from './src/components/Home'
import PasswordList from './src/components/PasswordList'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers'
const NativeRouter = require('react-router-native').NativeRouter
const Route = require('react-router-native').Route
const Link = require('react-router-native').Link

const store = createStore(reducers)

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={{ flex:1 }}>
            <Route exact path='/' component={Home} />
            <Route path='/list' component={PasswordList} />
          </View>
        </NativeRouter>
      </Provider>
    )
  }
}
