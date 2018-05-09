import React from 'react'
import {TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native'
import {C} from '../Utils/index'

const Loader = ({
  loading,
  size,
  color = C.primary,
  backgroundColor = '#fff8',
  style,
  onCancel }) => {
  if (!loading) return null
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onCancel}
      style={[styles.container, {backgroundColor}, style]}>
      <ActivityIndicator
        animating
        size={size}
        color={color} />
    </TouchableOpacity>
  )
}

module.exports = Loader

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
