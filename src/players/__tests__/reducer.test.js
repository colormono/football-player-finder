import reducer from '../reducer';
import * as t from '../actionTypes';

describe('Players reducer', () => {
  describe('Initial state', () => {
    it('has a data and loaded properties', () => {
      const action = { type: 'dummy_action' };
      expect(reducer(undefined, action)).toHaveProperty('data', []);
      expect(reducer(undefined, action)).toHaveProperty('loaded', false);
    });

    it('has current filters values initialized', () => {
      const action = { type: 'dummy_action' };
      const expectedState = {
        values: {
          name: '',
          age: 40,
          position: ''
        }
      };
      const newState = reducer(undefined, action);
      expect(newState).toHaveProperty('currentFilters', expectedState);
    });
  });

  it('handles FETCH_START action', () => {
    const action = {
      type: t.FETCH_START
    };
    const newState = reducer(undefined, action);
    expect(newState).toHaveProperty('loaded', false);
  });

  it('handles FETCH_SUCCESS action', () => {
    const action = {
      type: t.FETCH_SUCCESS,
      payload: [
        {
          name: 'Messi'
        }
      ]
    };
    const newState = reducer(undefined, action);
    expect(newState).toHaveProperty('data', [{ name: 'Messi' }]);
    expect(newState).toHaveProperty('loaded', true);
  });

  it('handles FETCH_FAIL action', () => {
    const action = {
      type: t.FETCH_FAIL,
      payload: 'Error description'
    };
    const newState = reducer(undefined, action);
    expect(newState).toHaveProperty('loaded', true);
    expect(newState).toHaveProperty('error', 'Error description');
  });

  it('handles FETCH_FILTER action', () => {
    //case t.FILTER:
    //return { ...state, currentFilters: { values: action.payload } };
    const action = {
      type: t.FETCH_FILTER
    };
    const newState = reducer(undefined, action);
    expect(newState).toHaveProperty('loaded', false);
  });
});
