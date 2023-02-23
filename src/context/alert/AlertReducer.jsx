import { REMOVE_ALERT, SET_ALERT } from "../Acctions";

const AlertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        Alert: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        Alert: null,
      };
    default:
      return state;
  }
};

export default AlertReducer;
