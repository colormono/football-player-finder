import * as t from './actionTypes';

const initialState = {
  loaded: false,
  error: '',
  data: [],
  currentFilters: {
    values: {
      name: '',
      age: 40,
      position: ''
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.FETCH_START:
      return { ...state, loaded: false };
    case t.FETCH_SUCCESS:
      return { ...state, data: action.payload, loaded: true };
    case t.FETCH_FAIL:
      return {
        ...state,
        error: 'Fail fetching data, please try again in a few minutes.'
      };
    case t.FILTER:
      return { ...state, currentFilters: { values: action.payload } };
    default:
      return state;
  }
};
