import {
  CREATE_MEDIA,
  DELETE_MEDIA,
  GET_MEDIA,
  GET_SINGLE_MEDIA,
  UPDATE_MEDIA,
  LOADING_MEDIA,
} from './types';
import { media } from '../data';

export const getMedia = filter => dispatch => {
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
  query.then(value => {
    const values = value.docs.map(item => {
      return {
        ...item.data(),
        id: item.id
      };
    });
    dispatch({ type: GET_MEDIA, payload: values });
    dispatch({ type: LOADING_MEDIA, payload: false });
  });
};

export const deleteMedia = ({ id, title, name }) => (dispatch) => {
  dispatch({ type: LOADING_MEDIA, payload: true });
  if (window.confirm(`Deseja deletar ${name || title}?\nEsta ação é irreversível.`)) {
    media.doc(id).delete().then(() => {
      dispatch({ type: DELETE_MEDIA, payload: id });
      dispatch({ type: LOADING_MEDIA, payload: false });
    });
  }
};

export const updateMedia = (fields) => dispatch => {
  dispatch({ type: LOADING_MEDIA, payload: true });
  if (fields.id === 'newMedia') {
    const { id, ...data } = fields;
    return media.add(data).then(snap => {
      return snap.get();
    }).then(data => {
      dispatch({ type: CREATE_MEDIA, payload: data });
    });
  }
  media.doc(fields.id).set(fields, { merge: true }).then(() => {
    dispatch({ type: UPDATE_MEDIA, payload: fields });
    dispatch({ type: LOADING_MEDIA, payload: false });
  });
};