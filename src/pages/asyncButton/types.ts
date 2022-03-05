import { INCREMENT_COUNT, INCREMENT_COUNT_ASYNC } from "./constants";

export interface ButtonState {
	count: number
}

interface IncrementCountActionPayload {
	value: number
}

interface IncrementCountAsyncActionPayload {
	value: number
}

interface IncrementCountAction {
	type: typeof INCREMENT_COUNT
	payload: IncrementCountActionPayload
}

export interface IncrementCountActionAsync {
	type: typeof INCREMENT_COUNT_ASYNC
	payload: IncrementCountAsyncActionPayload
}

export type ButtonActionTypes = IncrementCountAction | IncrementCountActionAsync