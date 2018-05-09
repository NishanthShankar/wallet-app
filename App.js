import React, { Component } from 'react'
import {View} from 'react-native'
import { Provider } from 'react-redux'
import store from './src/Redux/'

import MainView from './src/Views/MainView/'
import InfoBar from './src/Components/InfoBar'

export default class App extends Component {
  render () {
    return (
      <Provider store={store} >
        <View style={{flex: 1}}>
          <MainView />
          <InfoBar />
        </View>
      </Provider>
    )
  }
}
