import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import sinon from 'sinon';

import * as t from '../actionTypes';
import * as actions from '../actions';
import footballPlayersMock from '../../api/__mocks__/footballPlayers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ players: {} });

describe('players actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('fetchPlayers', () => {
    beforeEach(function() {
      moxios.install();
      moxios.stubRequest('/players.json', {
        status: 200,
        response: footballPlayersMock
      });
    });

    afterEach(function() {
      moxios.uninstall();
    });

    it('stub response for /players request URL', function(done) {
      let onResponse = sinon.spy();
      axios.get('/players.json').then(onResponse);

      moxios.wait(function() {
        const player = onResponse.getCall(0).args[0].data[0];
        expect(player).toHaveProperty('name');
        expect(player).toHaveProperty('dateOfBirth');
        expect(player).toHaveProperty('position');
        expect(player).toHaveProperty('nationality');
        done();
      });
    });

    it('dispatches the correct action on start', () => {
      const expectedActions = [{ type: t.FETCH_START }];
      store.dispatch(actions.fetchPlayers());
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('dispatches FETCH_SUCCESS after successfuly FETCH_START', () => {
      return store.dispatch(actions.fetchPlayers()).then(() => {
        expect(store.getActions()[0]).toHaveProperty('type', t.FETCH_START);
        expect(store.getActions()[1]).toHaveProperty('type', t.FETCH_SUCCESS);
      });
    });
  });

  describe('filterPlayers', () => {
    it('has the correct type', () => {
      const action = actions.filterPlayers();
      expect(action.type).toEqual(t.FILTER);
    });

    it('has the correct payload', () => {
      const action = actions.filterPlayers({});
      expect(action.payload).toEqual({});
    });

    it('filter the players list', () => {
      const payload = {};
      const expectedAction = {
        type: t.FILTER,
        payload
      };
      expect(actions.filterPlayers(payload)).toEqual(expectedAction);
    });
  });

  describe('calculateAge', () => {
    it('calculateAge function exists', () => {
      expect(typeof actions.calculateAge).toEqual('function');
    });

    it('returns a number', () => {
      expect(typeof actions.calculateAge('1990-11-07') === 'number').toBe(true);
    });

    it('if born in 1990-11-07 has 28 (Testing since 2019)', () => {
      expect(actions.calculateAge('1990-11-07')).toBeGreaterThanOrEqual(28);
    });

    it('if born in 1993-05-13 has 25 (Testing since 2019)', () => {
      expect(actions.calculateAge('1993-05-13')).toBeGreaterThanOrEqual(25);
    });

    it('if born in 1983-10-22 has 35 (Testing since 2019)', () => {
      expect(actions.calculateAge('1983-10-22')).toBeGreaterThanOrEqual(35);
    });
  });

  // Using snapshots
  //describe('filterPlayers', () => {
  //  test('Dispatches the correct action and payload', () => {
  //    store.dispatch(fetchPlayers());
  //    expect(store.getActions()).toMatchSnapshot();
  //  });
  //});
});
