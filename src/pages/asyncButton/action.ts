import { INCREMENT_COUNT, INCREMENT_COUNT_ASYNC } from "./constants";
import { ButtonActionTypes } from "./types";

export const incrementCountAction = (value: number): ButtonActionTypes => ({
	type: INCREMENT_COUNT,
	payload: {
		value
	}
})

export const incrementCountAsyncAction = (value: number): ButtonActionTypes => ({
	type: INCREMENT_COUNT_ASYNC,
	payload: {
		value
	}
})