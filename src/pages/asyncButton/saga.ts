import { call, put, takeLatest } from "redux-saga/effects";
import { INCREMENT_COUNT, INCREMENT_COUNT_ASYNC } from "./constants";
import { delay } from "./helper";
import { IncrementCountActionAsync } from "./types";


export function* getIncrementCountAsync({ payload }: IncrementCountActionAsync) {
	try {
		const value: number = yield call(delay, 1000, payload.value);
		yield put({
			type: INCREMENT_COUNT,
			payload: {
				value
			}
		})

	} catch (error) {
		console.log(error)
	}
}

export function* watchButtonAsync() {
	yield takeLatest(INCREMENT_COUNT_ASYNC, getIncrementCountAsync)
}