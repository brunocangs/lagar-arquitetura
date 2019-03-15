import {
  CREATE_MEDIA,
  DELETE_MEDIA,
  GET_MEDIA,
  GET_SINGLE_MEDIA,
  UPDATE_MEDIA,
  LOADING_MEDIA
} from './types';
import { media } from '../data';
  
export const getMedia = (filter) => (dispatch) => {
  dispatch({ type: LOADING_MEDIA, payload: true });
  let query;
  if (filter) {
    const keys = Object.keys(filter);
    if (keys.length !== 1) {
      throw new Error('Invalid filter provided to getMedia');
    } 
    query = media.where(keys[0], '==', filter[keys[0]]).get();
  } else {
    query = media.get();
  }
  query.then((value) => {
    const values = value.docs.map(item => {
      return {
        ...item.data(),
        id: item.id
      };
    });
    dispatch({type: GET_MEDIA, payload: values});
    dispatch({ type: LOADING_MEDIA, payload: false });
  });
};