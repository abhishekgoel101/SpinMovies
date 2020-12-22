import {BASE_URL, SEARCH_MOVIES} from '../../../res/ApiUrls';

export const FETCH_DATA_INIT = 'GET_MOVIE_FETCH_DATA_INIT';
export const FETCH_DATA_SUCCESS = 'GET_MOVIE_FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'GET_MOVIE_FETCH_DATA_FAILURE';

export const getMovies = (searchText) => {
  return (dispatch) => {
    dispatch(fetchDataInit());
    fetch(SEARCH_MOVIES + searchText, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.message);
        } else {
          return response.json();
        }
      })
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'False') {
          throw new Error(jsonResponse.Error);
        }
        console.log('jsonResponse', jsonResponse);
        dispatch(moviesData(jsonResponse.Search));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export function fetchDataInit() {
  return {
    type: FETCH_DATA_INIT,
  };
}

export function fetchDataFailure(payload) {
  return {
    type: FETCH_DATA_FAILURE,
    payload: payload,
  };
}

export function moviesData(payload) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: payload,
  };
}
