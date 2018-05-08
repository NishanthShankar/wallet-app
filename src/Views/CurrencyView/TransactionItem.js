import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default ({party, amount, units}) => {
  const amountStyle = amount > 0 ? styles.gainText : styles.lossText
  return (
    <View style={styles.container}>
      <Text style={styles.fromText}>{party}</Text>
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
    justifyContent: 'space-between'
  },
  fromText: {
    fontSize: 16,
    color: '#303030'
  },
  gainText: {
    fontSize: 16,
    color: 'green'
  },
  lossText: {
    fontSize: 16,
    color: 'red'
  }
})
