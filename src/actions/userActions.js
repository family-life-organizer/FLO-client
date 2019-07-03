import types from './';
import { customAuth } from '../api/customAuth';
import api from '../api/customApi';
import { checkAddMemberInputs } from '../utils/validators';

export const doGetCategories = () => async dispatch => {
	dispatch({ type: types.GET_CATEGORIES_START });
	try {
		const response = await customAuth().get('/categories/family');
		dispatch({ type: types.GET_CATEGORIES_SUCCESS, payload: response.data.categories });
	} catch (error) {
		dispatch({ type: types.GET_CATEGORIES_FAILURE, payload: error.response.data });
	}
};

export const doGetFamilyMembers = () => async dispatch => {
	dispatch({ type: types.GET_FAMILY_MEMBERS_START });
	try {
		const response = await customAuth().get('/users/family');
		dispatch({ type: types.GET_FAMILY_MEMBERS_SUCCESS, payload: response.data.data });
	} catch (error) {
		dispatch({ type: types.GET_FAMILY_MEMBERS_FAILURE, payload: error.response.data });
	}
};

export const doGetSingleUser = id => async dispatch => {
	dispatch({ type: types.GET_SINGLE_USER_START });
	try {
		const response = await customAuth().get(`/users/${id}`);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

export const doUpdateAccount = accountInfo => async dispatch => {
	dispatch({ type: types.UPDATE_ACCOUNT_START });
	try {
		const response = await customAuth().patch('/profile', accountInfo);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

export const doAddFamilyMember = addMemberDetails => async dispatch => {
	dispatch({ type: types.ADD_FAMILY_MEMBER_START });
	const { errors, isValid } = checkAddMemberInputs(addMemberDetails);
	if (!isValid) {
		return dispatch({ type: types.ADD_FAMILY_MEMBER_FAILURE, payload: errors });
	}
	try {
		const response = await customAuth().post('/addUser', addMemberDetails);
		dispatch({ type: types.ADD_FAMILY_MEMBER_SUCCESS, payload: response.data });
	} catch (error) {
		dispatch({ type: types.ADD_FAMILY_MEMBER_FAILURE, payload: error.response.data });
	}
};

export const doCreateTask = newTask => async dispatch => {
	/*
Payload: {
    description: TEXT,
    dueDate: DATETIME (2019-07-02 04:01:46 +0000)
    categoryId: INTEGER,
    assigneeId: INTEGER [optional]
}	*/
	dispatch({ type: types.CREATE_TASK_START });
	try {
		const response = await customAuth().post('/tasks', newTask);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

export const doCreateCategory = name => async dispatch => {
	dispatch({ type: types.CREATE_CATEGORY_START });
	try {
		const response = await customAuth().post('/categories', name);
		const res = await customAuth().get('/categories/family');
		dispatch({ type: types.CREATE_CATEGORY_SUCCESS, payload: res.data.categories });
	} catch (error) {
		dispatch({ type: types.CREATE_CATEGORY_FAILURE });
	}
};

export const doCompleteTask = taskId => async dispatch => {
	dispatch({ type: types.COMPLETE_TASK_START });
	try {
		const response = await customAuth().patch(`/tasks/${taskId}`);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

export const doUpdateTask = (id, updatedTask) => async dispatch => {
	/*
Payload: {
    description: TEXT,
    dueDate: DATETIME (2019-07-02 04:01:46 +0000)
    categoryId: INTEGER,
    assigneeId: INTEGER [optional]
}	*/
	dispatch({ type: types.UPDATE_TASK_START });
	try {
		const response = await customAuth().patch(`/tasks/${id}`, updatedTask);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
