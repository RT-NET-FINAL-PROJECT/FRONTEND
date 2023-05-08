import {
  SERVICES_SUCCESS,
  SERVICES_DETAILS_SUCCESS,
} from "../action/actionType";

export default function serviceReducer(
  state = { services: [], serviceDetails: {} },
  action
) {
  switch (action.type) {
    case SERVICES_SUCCESS:
      return { ...state, services: action.payload };
    case SERVICES_DETAILS_SUCCESS:
      return { ...state, serviceDetails: action.payload };

    default:
      return state;
  }
}
