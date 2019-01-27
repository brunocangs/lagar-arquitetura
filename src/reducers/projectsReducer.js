import {types} from '../actions';
const {
  CREATE_PROJECTS,
  DELETE_PROJECTS,
  GET_PROJECTS,
  LOADING_PROJECTS,
  UPDATE_PROJECTS
} = types;
const DEFAULT_STATE = {
  items: [],
  loading: false
};
export default (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
  case GET_PROJECTS:
    return {
      ...state,
      items: payload
    };
  case LOADING_PROJECTS:
    return {
      ...state,
      loading: payload
    };
  default:
    return DEFAULT_STATE;
  }
};