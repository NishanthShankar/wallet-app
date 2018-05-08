import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

const DETAILS_MAP = {
  send: {
    label: 'SEND',
    placeholder: 'Enter id to send amount to'
  },
  get: {
    label: 'REQUEST',
    placeholder: 'Enter id to request amount'
  }
}

/**
 * Component for showing TransactionRequests.
 * @param  {!Function} onClose
 * @param  {!Function} onPress
 * @param  {!Boolean} show
 * @param  {!String} type
 */
const TransactionModal = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 200, backgroundColor: 'cyan', borderTopLeftRadius: 4, borderTopRightRadius: 4}} />
      <View style={{flex: 1}} />

      <TextInput
        style={{height: 44}}
        placeholder={DETAILS_MAP[props.type].placeholder}
      />
      <TouchableOpacity activeOpacity={0.8} style={{margin: 8, height: 44, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center'}}>
        <Text>{DETAILS_MAP[props.type].label}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TransactionModal
