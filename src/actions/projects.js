import {
  CREATE_PROJECTS,
  DELETE_PROJECTS,
  GET_PROJECTS,
  GET_SINGLE_PROJECT,
  UPDATE_PROJECTS,
  LOADING_PROJECTS
} from './types';
import { projects } from '../data';

export const getProjects = (filter) => (dispatch) => {
  dispatch({ type: LOADING_PROJECTS, payload: true });
  let query;
  if (filter) {
    const keys = Object.keys(filter);
    if (keys.length !== 1) {
      throw new Error('Invalid filter provided to getProjects');
    } 
    query = projects.where(keys[0], '==', filter[keys[0]]).get();
  } else {
    query = projects.get();
  }
  query.then((value) => {
    const values = value.docs.map(item => {
      return {
        ...item.data(),
        id: item.id
      };
    });
    dispatch({type: GET_PROJECTS, payload: values});
    dispatch({ type: LOADING_PROJECTS, payload: false });
  });
};

export const getProject = (searchObject) => async (dispatch, getState) => {
  // if (Object.keys(searchObject).length > 1) {
  //   throw new Error('Search object has too many fields. Can only specify one');
  // }
  // const key = Object.keys(searchObject)[0];
  // const query = [key, '==', searchObject[key]];
  // if (Array.isArray(searchObject[key])) {
  //   query[1] = 'array-contains';
  // }
  const result = await projects.doc(searchObject.id).get();
  dispatch({
    type: GET_SINGLE_PROJECT,
    payload: {
      ...result.data(),
      id: result.id
    }
  });
  
}; 