import { INCREMENT_COUNT } from "./constants";
import { initialState } from "./initialState";
import { ButtonActionTypes } from "./types";

const reducer = (state = initialState, action: ButtonActionTypes) => {
	switch(action.type) {
		case INCREMENT_COUNT: {
			const { value } = action.payload
			return {
				count: state.count + value
			}
		}
			
		default:
			return state
	}
}

export default reducer