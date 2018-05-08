import React, { Component } from 'react'
import {
  View,
  FlatList,
  LayoutAnimation,
  StyleSheet,
  Text
} from 'react-native'

import { connect } from 'react-redux'

import TransactionsView from '../TransactionsView/'
import LoadingView from '../../Components/LoadingView'
import {G} from '../../Utils/'

// Redux
import WalletActions from '../../Redux/WalletsRedux'

const ITEM_HEIGHT = 80
const HEADER_HEIGHT = 72
const OFFSET_HEIGHT = G.height - HEADER_HEIGHT - ITEM_HEIGHT / 2

class MainView extends Component {
  state = {
    scrollable: true
  }

  componentDidMount () {
    this.props.fetch()
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
    <TransactionsView
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
          data={this.props.data}
          renderItem={this.renderItem}
          ListFooterComponent={() => <View style={{height: OFFSET_HEIGHT}} />}
        />
        <LoadingView loading={this.props.fetching} />
      </View>
    )
  }
}

export default connect(
  state => ({
    fetching: state.wallets.fetching,
    data: state.wallets.data
  }),
  dispatch => ({
    fetch: _ => dispatch(WalletActions.walletsRequest())
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
