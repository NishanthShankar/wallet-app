import React from 'react'
import {
  Modal,
  TouchableOpacity
} from 'react-native'

/**
 * Component for showing Modals.
 * @param  {!Function} onClose
 * @param  {!Boolean} show
 */
const TransactionModal = (props) => {
  return (
    <Modal visible={props.show} transparent animationType='slide' onRequestClose={props.onClose}>
      <TouchableOpacity activeOpacity={1} onPress={props.onClose} style={{flex: 1, backgroundColor: '#30303080', padding: 24, justifyContent: 'center'}}>
        <TouchableOpacity activeOpacity={1} style={{minHeight: 360, backgroundColor: 'white', borderRadius: 4}}>
          {props.children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  )
}

export default TransactionModal
