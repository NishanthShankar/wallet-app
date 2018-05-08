import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import transfer from '../../Images/transfer_success.png'

/**
 * Component for showing TransactionRequests.
 * @param  {!Function} onSave
 * @param  {!String} type
 * @param  {!Boolean} loading
 */

const ResultModal = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{height: 200, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: 12, borderTopLeftRadius: 4, borderTopRightRadius: 4}}>
        <Image source={transfer} resizeMode='contain' style={{height: 124}} />
      </View>
      <Text style={{marginVertical: 24}}> SUCCESS </Text>

      <TouchableOpacity
        onPress={props.close}
        activeOpacity={0.8}
        style={{margin: 8, minWidth: 88, padding: 12, minHeight: 44, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center'}}>
        <Text>CLOSE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResultModal
