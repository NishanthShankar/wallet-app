import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import {request, successWithData, failure} from './commonReducers'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  transactionsRequest: ['params'],
  transactionsSuccess: ['data'],
  transactionsFailure: ['error']
})

export const UITypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  data: [],
  error: null
})

/* ------------- Reducers ------------- */

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRANSACTIONS_REQUEST]: request,
  [Types.TRANSACTIONS_SUCCESS]: successWithData,
  [Types.TRANSACTIONS_FAILURE]: failure
})
