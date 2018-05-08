import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/Redux/'

import MainView from './src/Views/MainView/'

export default class App extends Component {
  render () {
    return (
      <Provider store={store} >
        <MainView />
      </Provider>
    )
  }
}
