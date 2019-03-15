import {types} from '../actions';

const {
  CREATE_MEDIA,
  DELETE_MEDIA,
  GET_MEDIA,
  LOADING_MEDIA,
  GET_SINGLE_MEDIA,
  UPDATE_MEDIA
} = types;

const DEFAULT_STATE = {
  items: [],
  item: {},
  loading: false
};

const mediaReducer = (state = DEFAULT_STATE, {type, payload}) => {
  switch (type) {
  case GET_MEDIA:
    return {
      ...state,
      items: [...payload]
    };
  case LOADING_MEDIA:
    return {
      ...state,
      loading: payload
    };
  case GET_SINGLE_MEDIA: 
    return {
      ...state,
      item: {...payload}
    };
  default:
    return {...state};
  }
};

export default mediaReducer;