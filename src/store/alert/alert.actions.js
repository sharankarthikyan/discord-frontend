// types
import { AlertActionTypes } from "./alert.types";

export const openAlertMessage = (content) => {
  return {
    type: AlertActionTypes.OPEN_ALERT_MESSAGE,
    content,
  };
};

export const closeAlertMessage = (content) => {
  return {
    type: AlertActionTypes.CLOSE_ALERT_MESSAGE,
  };
};

export const getActions = (dispatch) => {
  return {
    openAlertMessage: (content) => dispatch(openAlertMessage(content)),
    closeAlertMessage: () => dispatch(closeAlertMessage()),
  };
};
