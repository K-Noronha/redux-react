import userReducer from './userReducer';
import matterReducer from './matterReducer';
import sectionReducer from './sectionReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    userReducer,
    matterReducer,
    sectionReducer
});

export default allReducers;