import {
  USERS_LOADING,
  USERS_LOGIN,
  USERS_ERROR,
  USERS_CURRENT_LOGIN,
  USERS_CURRENT_LOGIN_FAMILY,
} from "../action/actionType";

export default function userReducer(
  state = {
    currentLoggedIn: [],
    currentLoggedInFamily: [],
    errors: [],
    usersLoading: false,
    login: "",
  },
  action
) {
  switch (action.type) {
    case USERS_CURRENT_LOGIN:
      return { ...state, currentLoggedIn: action.payload };
    case USERS_CURRENT_LOGIN_FAMILY:
      return { ...state, currentLoggedInFamily: action.payload };
    case USERS_ERROR:
      return { ...state, errors: action.payload };
    case USERS_LOADING:
      return { ...state, usersLoading: action.payload };
    case USERS_LOGIN:
      return { ...state, login: action.payload };
    default:
      return state;
  }
}
