import { SUBMISSIONS_SUCCESS } from "../action/actionType";

export default function submissionReducer(state = { submissions: [] }, action) {
  switch (action.type) {
    case SUBMISSIONS_SUCCESS:
      return { ...state, submissions: action.payload };

    default:
      return state;
  }
}
