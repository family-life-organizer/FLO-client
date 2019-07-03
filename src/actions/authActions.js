import types from "./";
import api from "../api/customApi";
import { customAuth } from "../api/customAuth";
import jwt_decode from "jwt-decode";
import { checkRegisterInputs } from "../utils/validators";

export const doLogin = credentials => async dispatch => {
  dispatch({ type: types.LOGIN_START });
  try {
    const { user, password } = credentials;
    const userLogin = {};

    if (/(@)/.test(user)) {
      userLogin.email = user;
    } else {
      userLogin.username = user;
    }
    userLogin.password = password;
    const response = await api.post("/login", userLogin);
    dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};

export const doRegisterAccount = accountInfo => async dispatch => {
  dispatch({ type: types.REGISTER_START });
  try {
    const { isValid, errors } = checkRegisterInputs(accountInfo);
    if (!isValid) {
      dispatch({ type: types.REGISTER_FAILURE, payload: errors });
    } else {
      const { email, password, username, firstName, lastName } = accountInfo;
      const response = await api.post("/signup", {
        email,
        password,
        username,
        firstName,
        lastName
      });
      dispatch({ type: types.REGISTER_SUCCESS, payload: response.data });
    }
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

export const doLogout = () => ({ type: types.LOGOUT });

export const doWelcomeBack = () => async dispatch => {
  dispatch({ type: types.WELCOME_BACK_START });
  const token = localStorage.getItem("login_token");
  const decoded = jwt_decode(token);
  try {
    const userResponse = await customAuth().get(
      `/users/${decoded.id.toString()}`
    );
    const user = userResponse.data.data;
    dispatch({ type: types.WELCOME_BACK_SUCCESS, payload: { token, user } });
    dispatch(doGetFamilyTask());
  } catch (error) {
    console.log(error);
    return dispatch({ type: types.WELCOME_BACK_FAILURE, payload: error });
  }
};

export const doGetFamilyTask = () => async dispatch => {
  try {
    const tasks = await customAuth().get(`/tasks/family`);
    const tasksData = tasks.data.data;
    dispatch({ type: types.FAMILY_TASKS_SUCCESS, payload: tasksData });
  } catch (error) {
    console.log(error);
  }
};
