import {Dimensions, UIManager} from 'react-native'

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true)

const {height, width} = Dimensions.get('window')

export default {
  height,
  width
}
