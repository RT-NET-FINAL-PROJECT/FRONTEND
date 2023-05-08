import { RTS_SUCCESS, RTS_LOADING } from "../action/actionType";

export default function rtReducer(
  state = { rts: [], rtsLoading: false },
  action
) {
  switch (action.type) {
    case RTS_SUCCESS:
      return { ...state, rts: action.payload };
    case RTS_LOADING:
      return { ...state, rtsLoading: action.payload };
    default:
      return state;
  }
}
