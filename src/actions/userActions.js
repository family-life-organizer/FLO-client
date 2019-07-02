import types from './';
import apiWithAuth from '../api/customAuth';
import api from '../api/customApi';

export const doGetCategories = () => async dispatch => {
  dispatch({type: types.GET_CATEGORIES_START});
  try {
    const response = await apiWithAuth.get('/categories/family');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export const doGetFamilyMembers = () => async dispatch => {
  
}