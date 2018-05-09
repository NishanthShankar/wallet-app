import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import {request, success, failure} from './commonReducers'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  transferRequest: ['params'],
  transferSuccess: [],
  transferFailure: ['error'],

  updateParty: ['party']
})

export const UITypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  data: [],
  error: null,
  party: ''
})

/* ------------- Reducers ------------- */

export const updateParty = (state, {party}) => state.merge({party})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRANSFER_REQUEST]: request,
  [Types.TRANSFER_SUCCESS]: success,
  [Types.TRANSFER_FAILURE]: failure,
  [Types.UPDATE_PARTY]: updateParty
})
