import { createSelector } from 'reselect';

const getPlayersSelector = state => state.players.data;
const searchFormSelector = state => state.players.currentFilters;
// can use redux-form reducer instead to get real time filters
//const searchFormSelector = state => state.form.searchFilters;

const getFilteredList = (players, filters) => {
  if (!filters || !filters.values) {
    return players;
  }

  // prepare filters
  const name = filters.values.name || '';
  const age = filters.values.age || 40;
  const position = filters.values.position || '';

  // filter list
  const filteredList = players.filter(player => {
    const inName = player.name.toLowerCase().includes(name.toLowerCase());
    const inAgeRange = player.age <= age;
    const inPosition = player.position === position || position === '';
    return inName && inAgeRange && inPosition;
  });

  return filteredList;
};

export default createSelector(
  getPlayersSelector, // pick off a piece o state
  searchFormSelector, // pick off a piece o state
  getFilteredList // last argument is the function that has our select logic
);
