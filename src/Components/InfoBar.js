import React, { Component } from 'react'
import {
  StyleSheet,
  Animated,
  Text
} from 'react-native'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'

// import UIActions from '../Redux/UIRedux'

// const DISAPPEAR_DELAY = 2000

class InfoBar extends Component {
  static propTypes = {
    infoText: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {top: new Animated.Value(-32)}
  }

  shouldComponentUpdate = (nextProps) => {
    return this.props.infoText !== nextProps.infoText
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.infoText !== nextProps.infoText) {
      this.animateInfoBar(nextProps.infoText)
    }
  }

  animateInfoBar = (hasText) => {
    const toValue = hasText ? 0 : -32
    Animated.timing(this.state.top, {toValue}).start()
  }

  render () {
    return <Animated.View style={[styles.container, {top: this.state.top}]}>
      <Text style={styles.text}>{this.props.infoText}</Text>
    </Animated.View>
  }
}

const mapStateToProps = state => ({
  infoText: state.ui.infoText
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    elevation: 5,
    shadowColor: '#303030',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 4,
    shadowOpacity: 0.24
  },
  text: {
    color: 'white',
    fontSize: 14,
    lineHeight: 14
  }
})
