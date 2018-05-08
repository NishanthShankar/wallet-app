import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setInfoText: ['text'],
  setInfoTextAgain: ['text']
})

export const UITypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  infoText: ''
})

/* ------------- Reducers ------------- */

export const setInfoText = (state, {text}) => state.merge({infoText: text})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_INFO_TEXT]: setInfoText,
  [Types.SET_INFO_TEXT_AGAIN]: setInfoText
})
