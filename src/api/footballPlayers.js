import axios from 'axios';

export default axios.create({
  baseURL: 'https://football-players-b31f2.firebaseio.com',
  timeout: 3000
  //headers: {'X-Custom-Header': 'foobar'}
});
