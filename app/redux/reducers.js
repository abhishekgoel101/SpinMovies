import {combineReducers} from 'redux';
import searchReducer from '../modules/Search/redux/reducer';

const rootReducer = combineReducers({searchReducer});

export default rootReducer;
