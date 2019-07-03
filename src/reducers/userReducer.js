import types from "../actions";
import jwt_decode from "jwt-decode";

const initialState = {
  user: {},
  family: [],
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_SUCCESS:
      return { user: payload.user };
    case types.REGISTER_SUCCESS:
      return { user: payload.user };
    case types.LOGOUT:
      return initialState;
    case types.WELCOME_BACK_SUCCESS:
      return { user: payload.user, error: null };
    case types.WELCOME_BACK_FAILURE:
      return { user: {}, error: payload };
    case types.CREATE_TASK_SUCCESS:
      return { user: payload, error: null };
    case types.CREATE_TASK_FAILURE:
      return { ...state, error: payload };
    case types.GET_FAMILY_MEMBERS_SUCCESS:
      return { ...state, family: payload };
    case types.GET_FAMILY_MEMBERS_FAILURE:
      return { ...state, error: payload };
    case types.RESET:
      return { ...state, error: null };
    default:
      return state;
  }
};
