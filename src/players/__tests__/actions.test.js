import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import sinon from 'sinon';

import * as t from '../actionTypes';
import { fetchPlayers, filterPlayers, calculateAge } from '../actions';
import footballPlayersMock from '../../api/__mocks__/footballPlayers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('players actions', () => {
  describe('fetchPlayers', () => {
    beforeEach(function() {
      moxios.install();
      moxios.stubRequest('/players', {
        status: 200,
        response: footballPlayersMock
      });
    });

    afterEach(function() {
      moxios.uninstall();
    });

    it('stub response for /players request URL', function(done) {
      let onResponse = sinon.spy();
      axios.get('/players').then(onResponse);

      moxios.wait(function() {
        const player = onResponse.getCall(0).args[0].data[0];
        expect(player).toHaveProperty('name');
        expect(player).toHaveProperty('dateOfBirth');
        expect(player).toHaveProperty('position');
        expect(player).toHaveProperty('nationality');
        done();
      });
    });

    it('creates FETCH_SUCCESS after successfuly FETCH_START', () => {
      const store = mockStore({ players: {} });
      return store.dispatch(fetchPlayers()).then(() => {
        // return of async actions
        expect(store.getActions()[0]).toHaveProperty('type', t.FETCH_START);
        expect(store.getActions()[1]).toHaveProperty('type', t.FETCH_SUCCESS);
      });
    });
  });

  describe('filterPlayers', () => {
    it('has the correct type', () => {
      const action = filterPlayers();
      expect(action.type).toEqual(t.FILTER);
    });

    it('has the correct payload', () => {
      const action = filterPlayers({});
      expect(action.payload).toEqual({});
    });

    it('filter the players list', () => {
      const payload = {};
      const expectedAction = {
        type: t.FILTER,
        payload
      };
      expect(filterPlayers(payload)).toEqual(expectedAction);
    });
  });

  describe('calculateAge', () => {
    test('calculateAge function exists', () => {
      expect(typeof calculateAge).toEqual('function');
    });

    it('returns a number', () => {
      expect(typeof calculateAge('1990-11-07') === 'number').toBe(true);
    });

    // Testing since 2019
    it('if born in 1990-11-07 has 28', () => {
      expect(calculateAge('1990-11-07')).toBeGreaterThanOrEqual(28);
    });

    it('if born in 1993-05-13 has 25', () => {
      expect(calculateAge('1993-05-13')).toBeGreaterThanOrEqual(25);
    });
  });
});
