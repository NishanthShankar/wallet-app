import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  transactionsRequest: ['params'],
  transactionsSuccess: ['data'],
  transactionsFailure: ['error'],

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
  transferring: false,
  party: ''
})

/* ------------- Reducers ------------- */

export const request = (state) => state.merge({fetching: true, error: null})

export const updateParty = (state, {party}) => state.merge({party})

export const success = (state, {data}) =>
  state.merge({data, fetching: false, error: null})

export const transferRequest = (state) =>
  state.merge({transferring: true, error: null})

export const transferSuccess = (state) =>
  state.merge({transferring: false, error: null})

export const transferFailure = (state, {error}) =>
  state.merge({transferring: false, error})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRANSACTIONS_REQUEST]: request,
  [Types.TRANSACTIONS_SUCCESS]: success,
  [Types.TRANSFER_REQUEST]: transferRequest,
  [Types.TRANSFER_SUCCESS]: transferSuccess,
  [Types.TRANSFER_FAILURE]: transferFailure,
  [Types.UPDATE_PARTY]: updateParty
})
