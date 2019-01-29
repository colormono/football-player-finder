import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import players from './players';

export default combineReducers({
  players: players.reducer,
  form: formReducer
});
