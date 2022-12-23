// types
import { AlertActionTypes } from "./alert.types";

const INITIAL_STATE = {
  showAlertMessage: false,
  alertMessageContent: null,
};

const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AlertActionTypes.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: action.content,
      };
    case AlertActionTypes.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: false,
        alertMessageContent: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
