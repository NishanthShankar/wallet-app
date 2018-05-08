import React, { Component } from 'react'
import {
  View,
  FlatList,
  LayoutAnimation,
  StyleSheet,
  Text
} from 'react-native'

import { connect } from 'react-redux'

import CurrencyView from '../CurrencyView/'
import {G} from '../../Utils/'

const DUMMY_DATA = [
  {key: 'BTC', label: 'Bitcoin', balance: 200, units: 'BTC'},
  {key: 'BTX', label: 'BitcoinX', balance: 300, units: 'BTX'},
  {key: 'LTC', label: 'LiteCoin', balance: 700, units: 'LTC'},
  {key: 'XTC', label: 'XTcoin', balance: 400, units: 'XTC'},
  {key: 'DTC', label: 'DogeCoin', balance: 200, units: 'DTC'},
  {key: 'DTCX', label: 'DogeCoin', balance: 200, units: 'DTC'}

]

const ITEM_HEIGHT = 80
const HEADER_HEIGHT = 72
const OFFSET_HEIGHT = G.height - HEADER_HEIGHT - ITEM_HEIGHT / 2

class MainView extends Component {
  state = {
    scrollable: true
  }

  getItemLayout = (data, index) => (
    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  )

  onItemOpen = (index) => () => {
    this.refs.list.scrollToIndex({index: index})
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({scrollable: false})
  }

  onItemClose = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({scrollable: true})
  }

  renderItem = ({item, index}) =>
    <CurrencyView
      onOpen={this.onItemOpen(index)}
      onClose={this.onItemClose}
      {...item} />

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#ececec'}} >
        {!this.state.scrollable
          ? <View key='header' style={styles.emptyHeader} />
          : <View key='header' style={styles.header}>
            <Text style={{fontSize: 24}}>My Crypto Wallet</Text>
          </View>}
        <FlatList
          ref='list'
          scrollEnabled={this.state.scrollable}
          getItemLayout={this.getItemLayout}
          data={DUMMY_DATA}
          renderItem={this.renderItem}
          ListFooterComponent={() => <View style={{height: OFFSET_HEIGHT}} />}
        />

      </View>
    )
  }
}

export default connect(
  state => ({
  }),
  dispatch => ({
  })
)(MainView)

const styles = StyleSheet.create({
  emptyHeader: {
    height: 0,
    backgroundColor: 'white',
    elevation: 2
  },
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: 'white',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
