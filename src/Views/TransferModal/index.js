import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import {connect} from 'react-redux'
import transferImage from '../../Images/transfer_image.png'
import LoadingView from '../../Components/LoadingView'
import {C} from '../../Utils/'

// Redux
import TransferActions from '../../Redux/TransferRedux'

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

const TransferModal = (props) => {
  return (
    <View style={styles.flex}>
      <View style={styles.imageContainer}>
        <Image source={transferImage} resizeMode='contain' style={styles.image} />
      </View>
      <View style={styles.flex} />

      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={props.update}
        onSubmitEditing={props.transfer(props.type)}
        placeholder={DETAILS_MAP[props.type].placeholder}
      />
      <Text style={styles.errorText}>{props.error}</Text>
      <TouchableOpacity
        onPress={props.transfer(props.type)}
        activeOpacity={0.8}
        style={styles.btn}>
        <Text style={styles.btnTxt}>{DETAILS_MAP[props.type].label}</Text>
        <LoadingView loading={props.transferring} />
      </TouchableOpacity>
    </View>
  )
}

export default connect(
  state => ({
    transferring: state.transfer.fetching,
    error: state.transfer.error
  }),
  dispatch => ({
    update: party => dispatch(TransferActions.updateParty(party)),
    transfer: type => () => dispatch(TransferActions.transferRequest({type}))
  })
)(TransferModal)

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  imageContainer: {
    height: 200,
    backgroundColor: C.colorBg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  image: {
    height: 124
  },
  input: {
    height: 44,
    marginHorizontal: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ececec'
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    margin: 4
  },
  btn: {
    margin: 8,
    height: 44,
    backgroundColor: C.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTxt: {
    color: C.lightText,
    fontSize: 16,
    fontWeight: '500'
  }
})
