import {combineReducers} from 'redux';
import searchReducer from '../modules/Search/redux/reducer';
import shortlistReducer from '../modules/Shortlist/redux/reducer';

const rootReducer = combineReducers({
    searchReducer:searchReducer,
    shortlistReducer:shortlistReducer

});

export default rootReducer;
