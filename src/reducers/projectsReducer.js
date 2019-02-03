import {types} from '../actions';
const {
  CREATE_PROJECTS,
  DELETE_PROJECTS,
  GET_PROJECTS,
  LOADING_PROJECTS,
  GET_SINGLE_PROJECT,
  UPDATE_PROJECTS
} = types;
const DEFAULT_STATE = {
  items: [],
  item: {},
  loading: false
};
export default (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
  case GET_PROJECTS:
    return {
      ...state,
      items: [...payload]
    };
  case LOADING_PROJECTS:
    return {
      ...state,
      loading: payload
    };
  case GET_SINGLE_PROJECT: 
    return {
      ...state,
      item: {...payload}
    };
  default:
    return DEFAULT_STATE;
  }
};