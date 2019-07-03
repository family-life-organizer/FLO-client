import types from "../actions";

const initialState = {
  categories: [],
  familyTasks: [],
  errors: null,
  isTaskAssigned: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, errors: null };
    case types.GET_CATEGORIES_FAILURE:
      return { ...state, categories: [], errors: "Hello World" };
    case types.CREATE_CATEGORY_SUCCESS:
      return { ...state, categories: payload, errors: null };
    case types.CREATE_CATEGORY_FAILURE:
      return { ...state, categories: [], errors: null };
    case types.FAMILY_TASKS_SUCCESS:
      return { ...state, familyTasks: action.payload, errors: null };
    case types.UPDATE_TASK_SUCCESS:
      return { ...state, isTaskAssigned: true, errors: null };
    case types.UPDATE_TASK_FAILURE:
      return { ...state, errors: action.payload };
    case types.RESET:
      return {
        ...state,
        isLoading: false,
        errors: null,
        isTaskAssigned: false
      };

    default:
      return state;
  }
};
