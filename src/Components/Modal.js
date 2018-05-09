import React from 'react'
import {
  Modal,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

/**
 * Component for showing Modals.
 * @param  {!Function} onClose
 * @param  {!Boolean} show
 */
const TransactionModal = (props) => {
  return (
    <Modal visible={props.show} transparent animationType='slide' onRequestClose={props.onClose}>
      <ScrollView
        contentContainerStyle={styles.flex}
        keyboardShouldPersistTaps='always' >
        <TouchableOpacity
          activeOpacity={1}
          onPress={props.onClose}
          style={styles.overlay} >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.card}>
            {props.children}
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  )
}

export default TransactionModal

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  overlay: {
    flex: 1,
    backgroundColor: '#30303080',
    padding: 24,
    justifyContent: 'center'
  },
  card: {
    minHeight: 340,
    backgroundColor: 'white',
    borderRadius: 4
  }
})
