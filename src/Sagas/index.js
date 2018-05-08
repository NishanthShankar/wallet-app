import { put, takeLatest, select } from 'redux-saga/effects'
import TransferActions from '../Redux/TransactionsRedux'
// import Api from '...'

// https://api.myjson.com/bins/19x4ci Get list of coins
// https://api.myjson.com/bins/fm5nm transactions
// https://api.myjson.com/bins/auote send/receive

const getParty = (state) => state.txn.party
const getAPI = (url) => fetch(url).then(d => d.json())

function * fetchWallets (action) {
  const url = 'https://api.myjson.com/bins/19x4ci'
  const data = yield getAPI(url)
  yield put({type: 'WALLETS_SUCCESS', data})
}

function * fetchTransactions (action) {
  const url = 'https://api.myjson.com/bins/18yts2'
  const data = yield getAPI(url)
  yield put({type: 'TRANSACTIONS_SUCCESS', data})
}

function * makeTransfer (action) {
  const url = 'https://api.myjson.com/bins/auote'
  const toId = yield select(getParty)
  if (!toId) {
    return yield put(TransferActions.transferFailure('Need ID to transfer'))
  }
  const data = yield getAPI(url)
  yield put({type: 'TRANSFER_SUCCESS', data})
}

function * mySaga () {
  yield takeLatest('WALLETS_REQUEST', fetchWallets)
  yield takeLatest('TRANSACTIONS_REQUEST', fetchTransactions)
  yield takeLatest('TRANSFER_REQUEST', makeTransfer)
}

export default mySaga
