import * as t from './actionTypes';
import jsonFootballPlayers from '../api/footballPlayers';

const fetchPlayersStart = () => ({
  type: t.FETCH_START
});

const fetchPlayersSuccess = players => ({
  type: t.FETCH_SUCCESS,
  payload: players
});

const fetchPlayersFail = error => ({
  type: t.FETCH_FAIL,
  payload: error
});

export const fetchPlayers = () => dispatch => {
  dispatch(fetchPlayersStart());

  return jsonFootballPlayers
    .get('/players.json')
    .then(res => {
      // Add age field
      const players = res.data.map(player => {
        return { ...player, age: calculateAge(player.dateOfBirth) };
      });

      // Add Team to each player
      // Needs to get and update data from this external API
      // https://www.football-data.org/docs/v1/index.html#_player

      // Dispatch action
      dispatch(fetchPlayersSuccess(players));

      return players;
    })
    .catch(error => {
      console.log("action fetchPlayers: Can't get data from the API");
      dispatch(fetchPlayersFail(error));
      return error;
    });
};

/**
 * Filter players list
 * @param {Object} filters
 */
export const filterPlayers = filters => {
  return {
    type: t.FILTER,
    payload: filters
  };
};

/**
 * Calcultate age
 * @param {String} birthday
 * @return {Number}
 * @link https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
 */
export function calculateAge(birthday) {
  var today = new Date();
  var birthDate = new Date(birthday);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
