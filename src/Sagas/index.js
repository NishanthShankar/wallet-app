import { call, put, takeLatest, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import TransferActions from '../Redux/TransferRedux'
import TxnActions from '../Redux/TransactionsRedux'
import WalletActions from '../Redux/WalletsRedux'
import UIActions from '../Redux/UIRedux'
// import Api from '...'

// https://api.myjson.com/bins/19x4ci Get list of coins
// https://api.myjson.com/bins/fm5nm transactions
// https://api.myjson.com/bins/auote send/receive

const getParty = (state) => state.txn.party
const getAPI = (url) =>
  fetch(url)
    .then(d => d.json())
    .then(data => ({data}))
    .catch(error => ({error}))

function * showNoInternet (error) {
  __DEV__ && console.log('Error:', error)
  yield put(UIActions.setInfoText('No internet connection'))
}

function * fetchWallets (action) {
  const url = 'https://api.myjson.com/bins/19x4ci'
  const {data, error} = yield getAPI(url)
  if (data) yield put(WalletActions.walletsSuccess(data))
  if (error) {
    yield put(WalletActions.walletsFailure(error))
    yield showNoInternet(error)
  }
}

function * fetchTransactions (action) {
  const url = 'https://api.myjson.com/bins/18yts2'
  const {data, error} = yield getAPI(url)
  if (data) yield put(TxnActions.transactionsSuccess(data))
  if (error) {
    yield put(TxnActions.transactionsFailure(error))
    yield showNoInternet(error)
  }
}

function * makeTransfer (action) {
  const url = 'https://api.myjson.com/bins/auote'
  const toId = yield select(getParty)
  if (!toId) {
    return yield put(TransferActions.transferFailure('Need ID to transfer'))
  }
  const {data, error} = yield getAPI(url)
  if (data) yield put(TransferActions.transferSuccess(data))
  if (error) {
    yield put(TransferActions.transferFailure(error))
    yield showNoInternet(error)
  }
}

function * resetInfoText (action) {
  yield call(delay, 2000)
  yield put(UIActions.setInfoText(''))
}

function * mySaga () {
  yield takeLatest('WALLETS_REQUEST', fetchWallets)
  yield takeLatest('TRANSACTIONS_REQUEST', fetchTransactions)
  yield takeLatest('TRANSFER_REQUEST', makeTransfer)
  yield takeLatest('SET_INFO_TEXT', resetInfoText)
}

export default mySaga
