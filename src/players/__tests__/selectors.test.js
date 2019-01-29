import { createSelector } from 'reselect';
import { getFilteredList } from '../selectors';
import footballPlayersMock from '../../api/__mocks__/footballPlayers';

const playerList = () => footballPlayersMock;

describe('Selectors filters', () => {
  it('recive all players with default values', () => {
    const searchValues = () => ({
      values: {
        name: '',
        age: 40,
        position: ''
      }
    });

    const selector = createSelector(
      playerList,
      searchValues,
      getFilteredList
    );

    expect(selector()).toHaveLength(footballPlayersMock.length);
  });

  it('filter by name', () => {
    const searchValues = () => ({
      values: {
        name: 'lUk'
      }
    });

    const selector = createSelector(
      playerList,
      searchValues,
      getFilteredList
    );

    expect(selector()).toHaveLength(1);
    expect(selector()[0]['name']).toEqual('Romelu Lukaku');
  });

  it('filter by age', () => {
    const searchValues = () => ({
      values: {
        age: 26
      }
    });

    const selector = createSelector(
      playerList,
      searchValues,
      getFilteredList
    );

    expect(selector()).toHaveLength(2);
    expect(selector()[0]['name']).toEqual('Romelu Lukaku');
    expect(selector()[1]['name']).toEqual('David de Gea');
  });

  it('filter by position', () => {
    const searchValues = () => ({
      values: {
        position: 'Centre-Back'
      }
    });

    const selector = createSelector(
      playerList,
      searchValues,
      getFilteredList
    );

    expect(selector()).toHaveLength(1);
    expect(selector()[0]['name']).toEqual('David de Gea');
  });

  it('combined search with one result', () => {
    const searchValues = () => ({
      values: {
        name: 'g',
        age: 30,
        position: 'Centre-Back'
      }
    });

    const selector = createSelector(
      playerList,
      searchValues,
      getFilteredList
    );

    expect(selector()).toHaveLength(1);
    expect(selector()[0]['name']).toEqual('David de Gea');
  });

  it('combined search with no results', () => {
    const searchValues = () => ({
      values: {
        name: 'maradona',
        age: 40,
        position: 'Attacking Midfield'
      }
    });

    const selector = createSelector(
      playerList,
      searchValues,
      getFilteredList
    );

    expect(selector()).toHaveLength(0);
  });
});
