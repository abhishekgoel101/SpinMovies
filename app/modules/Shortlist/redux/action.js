
export const FETCH_DATA_SUCCESS = 'ADD_SHORTLIST_MOVIE_DATA_SUCCESS';

export const addToShortlist = (item) => {
  return (dispatch) => {
    dispatch(addToShortlistMovies(item));
  };
};


export function addToShortlistMovies(payload) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: payload,
  };
}
