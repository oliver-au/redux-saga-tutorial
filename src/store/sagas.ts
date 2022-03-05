import { all } from 'redux-saga/effects'
import { watchButtonAsync } from '../pages/asyncButton/saga'

export default function* rootSaga() {
	yield all([
		watchButtonAsync()
	])
}