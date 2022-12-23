// importing built in libraries
import axios from "axios";

import { store } from "../store/store";

// util libraries
import { logout } from "../utils/auth";

// ${process.env.REACT_APP_PRIVATE_IP}
export const apiClient = axios.create({
  baseURL: `http://localhost:8080/api`,
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const userDetails = state?.user?.userDetails;

    if (userDetails) {
      const token = userDetails.token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
