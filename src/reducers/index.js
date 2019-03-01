import {combineReducers} from 'redux';
import projectsReducer from './projectsReducer';
import mediaReducer from './mediaReducer';

export default combineReducers({
  projectsReducer,
  mediaReducer
});