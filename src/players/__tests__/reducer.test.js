import reducer from '../reducer';
import * as t from '../actionTypes';

describe('Players reducer', () => {
  let action;

  beforeEach(() => {
    action = {
      type: t.FETCH_SUCCESS,
      payload: []
    };
  });

  it('handles action', () => {
    const newState = reducer([], action);
    expect(newState).toEqual({ data: [], loaded: true });
  });

  it('payload has a data property', () => {
    const newState = reducer([], action);
    expect(newState).toHaveProperty('data');
  });

  it('data property in payload is an array', () => {
    const newState = reducer([], action);
    expect(Array.isArray(newState.data)).toBeTruthy();
  });
});
