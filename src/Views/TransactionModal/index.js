import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'

import {connect} from 'react-redux'
import transferImage from '../../Images/transfer_image.png'
import LoadingView from '../../Components/LoadingView'

// Redux
import TXNActions from '../../Redux/TransactionsRedux'

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
 * @param  {!Function} onSave
 * @param  {!String} type
 * @param  {!Boolean} loading
 */

const TransactionModal = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 200, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: 12, borderTopLeftRadius: 4, borderTopRightRadius: 4}}>
        <Image source={transferImage} resizeMode='contain' style={{height: 124}} />
      </View>
      <View style={{flex: 1}} />

      <TextInput
        style={{height: 44}}
        onChangeText={props.update}
        onSubmitEditing={props.transfer(props.type)}
        placeholder={DETAILS_MAP[props.type].placeholder}
      />
      <Text style={{textAlign: 'center', color: 'red', margin: 4}}>{props.error}</Text>
      <TouchableOpacity
        onPress={props.transfer(props.type)}
        activeOpacity={0.8}
        style={{margin: 8, height: 44, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center'}}>
        <Text>{DETAILS_MAP[props.type].label}</Text>
        <LoadingView loading={props.transferring} />
      </TouchableOpacity>
    </View>
  )
}

export default connect(
  state => ({
    transferring: state.txn.transferring,
    error: state.txn.error
  }),
  dispatch => ({
    update: party => dispatch(TXNActions.updateParty(party)),
    transfer: type => () => dispatch(TXNActions.transferRequest({type}))
  })
)(TransactionModal)
