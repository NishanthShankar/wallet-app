import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import {request, failure, successWithData} from './commonReducers'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  walletsRequest: ['params'],
  walletsSuccess: ['data'],
  walletsFailure: ['params']
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

// export const request = (state) => state.merge({fetching: true, error: null})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.WALLETS_REQUEST]: request,
  [Types.WALLETS_SUCCESS]: successWithData,
  [Types.WALLETS_FAILURE]: failure
})
