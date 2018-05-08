import { call, put, takeLatest } from 'redux-saga/effects'
// import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function * fetchUser (action) {
  console.log('ACTION:', action)
  yield put({type: 'SET_INFO_TEXT_AGAIN', text: 'DONE'})
}

function * log (action) {
  console.log('ACTION:', action)
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function * mySaga () {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function * mySaga () {
  yield takeLatest('SET_INFO_TEXT', fetchUser)
  yield takeLatest('SET_INFO_TEXT_AGAIN', log)
}

export default mySaga
