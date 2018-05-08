import React, { Component } from 'react'
import {
  View,
  Text,
  Animated,
  ScrollView,
  Image,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'

import TransactionItem from './TransactionItem'
import TransactionModal from '../TransactionModal'
import Modal from '../../Components/Modal'
import LoadingView from '../../Components/LoadingView'
import ResultModal from './ResultModal'

import styles from './style'
import {G} from '../../Utils/'

import sendImage from '../../Images/wallet_debited.png'
import receiveImage from '../../Images/wallet_credited.png'
import closeIcon from '../../Images/close.png'

// Redux
import TXNActions from '../../Redux/TransactionsRedux'

class TransactionsView extends Component {
  state = {
    progress: new Animated.Value(0),
    opacity: new Animated.Value(1),
    showModal: false
  }

  type = 'get'

  componentWillReceiveProps (nextProps) {
    if (this.props.transferring && !nextProps.transferring && !nextProps.error) {
      this.setState({success: true})
    }
  }

  onTransfer = (type) => () => {
    this.type = type
    this.setState({showModal: true})
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  open = () => {
    this.props.onOpen()
    setTimeout(() => {
      Animated.timing(this.state.progress, {toValue: 1}).start(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        this.setState({open: true})
        this.props.fetch(this.props.units)
      })
    }, 300)
  }

  close = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({open: false})
    Animated.sequence([
      Animated.delay(300),
      Animated.timing(this.state.progress, {toValue: 0})
    ]).start(this.props.onClose)
  }

  getAnimtedProps = () => {
    const margin = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [12, 0]
    })

    const height = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [56, 172]
    })

    const borderRadius = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [4, 0]
    })

    return {margin, height, borderRadius}
  }

  renderText = () => {
    const closedStyle = styles.closedContainer
    const openStyle = styles.openContainer
    const containerStyle = this.state.open ? openStyle : closedStyle
    return (
      <View key='textContainer' style={[styles.txtContainer, containerStyle]}>
        <Text style={styles.labelText}>{this.props.label}</Text>
        {this.state.open ? <View key='spacer' style={styles.spacer} /> : null}
        <Text style={styles.balanceText}>
          {this.props.balance} {this.props.units}
        </Text>
      </View>
    )
  }

  renderTransactions = (transactions) => {
    if (!transactions.length) return null

    return (
      <View>
        <Text style={styles.txnsLabel}>Transactions</Text>
        { transactions.map(txn =>
          <TransactionItem key={txn.id} {...txn} units={this.props.units} />) }
      </View>

    )
  }

  renderContent = () => {
    if (!this.state.open) return null
    return (
      <Animated.View key='content' style={{opacity: this.state.opacity}} >
        <ScrollView>
          <View style={styles.btnHolder}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={this.onTransfer('send')}
              style={styles.btn}
            >
              <Image source={sendImage} style={styles.icon} />
              <Text>SEND</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={this.onTransfer('get')}
              style={styles.btn}
            >
              <Image source={receiveImage} style={styles.icon} />
              <Text>REQUEST</Text>
            </TouchableOpacity>
          </View>
          {this.renderTransactions(this.props.transactions)}
        </ScrollView>
        <LoadingView loading={this.props.fetching} />
      </Animated.View>
    )
  }

  render () {
    const {
      margin,
      height,
      borderRadius
    } = this.getAnimtedProps()

    return <View style={{maxHeight: G.height}}>
      <Animated.View style={[styles.container, {height, margin, borderRadius}]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.open}
          style={styles.flex}
        >
          {this.renderText()}
          {!this.state.open
            ? null
            : <TouchableOpacity onPress={this.close} style={styles.closeBtn}>
              <Image source={closeIcon} style={{height: 24, width: 24}} />
            </TouchableOpacity>
          }
        </TouchableOpacity>
      </Animated.View>
      {this.renderContent()}
      <Modal
        show={this.state.showModal}
        onClose={this.closeModal} >
        {this.state.success
          ? <ResultModal />
          : <TransactionModal type={this.type} />}
      </Modal >
    </View>
  }
}

export default connect(
  state => ({
    fetching: state.txn.fetching,
    transferring: state.txn.transferring,
    error: state.txn.error,
    transactions: state.txn.data
  }),
  dispatch => ({
    fetch: id => dispatch(TXNActions.transactionsRequest(id)),
    transfer: params => dispatch(TXNActions.transactionsRequest(params))
  })
)(TransactionsView)
