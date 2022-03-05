import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../../store/types";
import { incrementCountAsyncAction } from "./action";

export const useAsyncButton = () => {

	const dispatch = useDispatch<AppDispatch>();
	const { count } = useSelector((state: RootState) => state.button, shallowEqual)

	const incrementCount = (value: number) => {
		dispatch(incrementCountAsyncAction(value))
	}

	return {
		count,
		incrementCount
	}
}