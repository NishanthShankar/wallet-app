import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import {C} from '../../Utils/'
export default ({party, amount, units}) => {
  const amountStyle = amount > 0 ? styles.gainText : styles.lossText
  const backgroundColor = amount > 0 ? C.success : C.error
  return (
    <View style={styles.container}>
      <View style={[styles.marker, {backgroundColor}]} />
      <Text style={styles.fromText}>{party}</Text>
      <View style={{flex: 1}} />
      <Text style={amountStyle} >{amount} {units}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    borderBottomColor: '#ececec',
    flexDirection: 'row',
    alignItems: 'center',
  },
  marker: {
    height: 12,
    width: 12,
    borderRadius: 6,
    marginRight: 8
  },
  fromText: {
    fontSize: 16,
    color: '#303030'
  },
  gainText: {
    fontSize: 16,
    color: C.success
  },
  lossText: {
    fontSize: 16,
    color: C.error
  }
})
