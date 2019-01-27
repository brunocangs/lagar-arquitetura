import {
  CREATE_PROJECTS,
  DELETE_PROJECTS,
  GET_PROJECTS,
  UPDATE_PROJECTS,
  LOADING_PROJECTS
} from './types';
import { projects } from '../data';

export const getProjects = () => (dispatch) => {
  dispatch({ type: LOADING_PROJECTS, payload: true });
  projects.get()
    .then((value) => {
      const values = value.docs.map(item => {
        return item.data();
      });
      dispatch({type: GET_PROJECTS, payload: values});
      dispatch({ type: LOADING_PROJECTS, payload: false });
    });
};