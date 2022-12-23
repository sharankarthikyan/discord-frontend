// types
import { UserActionTypes } from "./user.types";

// actions
import { openAlertMessage } from "../alert/alert.actions";

// apis
import * as api from "../../api/public/auth.api";

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data?.message));
    } else {
      const { userDetails } = response?.data;

      dispatch(setCurrentUser(userDetails));
      navigate("/");
    }
  };
};

const signup = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.signup(userDetails);

    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data?.message));
    } else {
      const { userDetails } = response?.data;

      dispatch(setCurrentUser(userDetails));
      navigate("/");
    }
  };
};

const setCurrentUser = (userDetails) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  userDetails,
});

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    signup: (userDetails, navigate) => dispatch(signup(userDetails, navigate)),
  };
};
