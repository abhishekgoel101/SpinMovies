import initialState from './state';
import * as actionTypes from './action';

export default function shortlistReducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: {...state.data,[action.payload.imdbID]:action.payload},
        loading: false,
        success: true,
        error:null
      };

    default:
      console.log(action, 'DEFAULT');
      return state;
  }
}
