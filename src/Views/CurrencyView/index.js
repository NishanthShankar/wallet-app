import React, { Component } from 'react'
import {
  View,
  Text,
  Animated,
  ScrollView,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'

import UIActions from '../../Redux/UIRedux'
import TransactionItem from './TransactionItem'
import TransactionModal from '../TransactionModal'
import Modal from '../../Components/Modal'

import styles from './style'
import {G} from '../../Utils/'

const dummyData = [
  {id: 'eqad', amount: 120, party: 'Nishanth S'},
  {id: 'eqad1', amount: 60, party: 'Nishanth S'},
  {id: 'eqad2', amount: -120, party: 'Nishanth S'},
  {id: 'eqaf6', amount: -120, party: 'Nishanth S'},
  {id: 'eqsf7', amount: -120, party: 'Nishanth S'},
  {id: 'eqad8', amount: -120, party: 'Nishanth S'},
  {id: 'eqad9', amount: -120, party: 'Nishanth S'},
  {id: 'eqad3', amount: 80, party: 'Nishanth S'},
  {id: 'eqad4', amount: -24, party: 'Nishanth S'},
  {id: 'eqad5', amount: -50, party: 'Nishanth S'}
]

class CurrencyView extends Component {
  state = {
    progress: new Animated.Value(0),
    opacity: new Animated.Value(1),
    showModal: false
  }
  type = 'get'

  onSend = () => {
    this.type = 'send'
    this.setState({showModal: true})
    setTimeout(() => {
      this.setState({success: true})
    }, 1000)
  }

  onGet = () => {
    this.type = 'get'
    this.setState({showModal: true})
  }

  open = () => {
    this.props.onOpen()
    setTimeout(() => {
      Animated.timing(this.state.progress, {toValue: 1}).start(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        this.setState({open: true})
        // opacityAnim.start()
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

  closeModal = () => {
    this.setState({showModal: false})
  }

  renderText = () => {
    const closedContainerStyle = {flexDirection: 'row', justifyContent: 'space-between', top: 7}
    const openContainerStyle = {alignItems: 'center', justifyContent: 'center'}
    const containerStyle = this.state.open ? openContainerStyle : closedContainerStyle
    return (
      <View key='textContainer' style={[{flex: 1, padding: 12}, containerStyle]}>
        <Text style={styles.labelText}>{this.props.label}</Text>
        {this.state.open ? <View key='spacer' style={{height: 8}} /> : null}
        <Text style={styles.balanceText}>{this.props.balance} {this.props.units}</Text>
      </View>
    )
  }

  renderTransactions = (transactions) => {
    if (!transactions.length) return null

    return (
      <View>
        <Text style={styles.style_11}>Transactions</Text>
        { transactions.map(txn => <TransactionItem key={txn.id} {...txn} />) }
      </View>

    )
  }

  render () {
    const {
      margin,
      height,
      borderRadius
    } = this.getAnimtedProps()

    return <View style={{maxHeight: G.height}}>
      <Animated.View style={[styles.style_1, {height, margin, borderRadius}]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.open}
          style={styles.style_2}
        >
          {this.renderText()}
          {!this.state.open ? null
            : <TouchableOpacity onPress={this.close} style={{position: 'absolute', height: 44, width: 44, alignItems: 'center', justifyContent: 'center'}}>
              <Text>X</Text>
            </TouchableOpacity>}
        </TouchableOpacity>
      </Animated.View>
      {!this.state.open ? null
        : <Animated.View key='content' style={{opacity: this.state.opacity}} >
          <ScrollView>
            <View style={styles.style_6}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={this.onSend}
                style={styles.style_7}
              >
                <View style={styles.style_8} />
                <Text>SEND</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={this.onGet}
                style={styles.style_9}
              >
                <View style={styles.style_10} />
                <Text>REQUEST</Text>
              </TouchableOpacity>
            </View>
            {this.renderTransactions(this.props.transactions)}
          </ScrollView>
        </Animated.View>
      }
      <Modal
        show={this.state.showModal}
        onClose={this.closeModal} >
        {this.state.success ? <View style={{flex: 1, backgroundColor: 'green'}} />
        : <TransactionModal type={this.type} />}
      </Modal >
    </View>
  }
}

export default connect(
  state => ({
    transactions: dummyData
  }),
  dispatch => ({
    test: text => dispatch(UIActions.setInfoText(text))
  })
)(CurrencyView)
