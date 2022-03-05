import { combineReducers } from 'redux';
import buttonReducer from '../pages/asyncButton/reducer'

export const rootReducer = combineReducers({
	button: buttonReducer,
})