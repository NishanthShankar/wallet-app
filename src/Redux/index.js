import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from '../Sagas/'

/* ------------- Assemble The Reducers ------------- */
const reducers = combineReducers({
  ui: require('./UIRedux').reducer,
  wallets: require('./WalletsRedux').reducer,
  txn: require('./TransactionsRedux').reducer
})

const sagaMiddleware = createSagaMiddleware()
export default createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)
