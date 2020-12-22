import initialState from './state';
import * as actionTypes from './action';

export default function searchReducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        success: true,
        error:null
      };

    case actionTypes.FETCH_DATA_INIT:
      return {
        ...state,
        loading: true,
        success: true,
      };

    case actionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: undefined,
        error: action.payload,
        success: false,
      };

    default:
      console.log(action, 'DEFAULT');
      return state;
  }
}
