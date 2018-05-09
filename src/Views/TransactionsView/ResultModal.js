import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import transfer from '../../Images/transfer_success.png'
import {C} from '../../Utils/'

/**
 * Component for showing TransactionRequests.
 * @param  {!Function} onClose
 */

const ResultModal = (props) => {
  return (
    <View style={styles.container}>
      <Image source={transfer} resizeMode='contain' style={styles.image} />
      <Text style={styles.primaryText}>
        The transaction was successfull
      </Text>
      <Text style={styles.secondaryText}>
        This page with close in 5 seconds.
      </Text>

      <TouchableOpacity
        onPress={props.onClose}
        activeOpacity={0.8}
        style={styles.btn}>
        <Text style={styles.btnText}>CLOSE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResultModal

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  imageContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  image: {
    height: 124
  },
  primaryText: {
    marginTop: 24,
    marginBottom: 4,
    color: '#303030',
    fontSize: 16
  },
  secondaryText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#30303060',
    marginBottom: 24
  },
  btn: {
    margin: 8,
    minWidth: 88,
    padding: 12,
    minHeight: 44,
    borderTopRightRadius: 4,
    backgroundColor: C.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: C.lightText,
    fontSize: 16,
    fontWeight: '500'
  }
})
