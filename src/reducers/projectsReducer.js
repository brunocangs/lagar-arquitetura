import { types } from '../actions';

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

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
  case CREATE_PROJECTS:
    return {
      ...state,
      items: [...state.items, payload]
    };
  case DELETE_PROJECTS:
    return {
      ...state,
      items: state.items.filter(item => item.id === payload)
    };
  case UPDATE_PROJECTS:
    return {
      ...state,
      items: state.items.map(item => item.id === payload.id ? payload : item)
    };
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
      item: { ...payload }
    };
  default:
    return { ...state };
  }
};
