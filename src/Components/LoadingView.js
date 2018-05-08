import React from 'react'
import {TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native'

const Loader = ({
  loading,
  size,
  color = 'blue',
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
