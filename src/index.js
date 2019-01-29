import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';
import { Header, Footer } from './main';
import { Players } from './players';
import './styles/main.css';

ReactDOM.render(
  <Root>
    <Header />
    <Players />
    <Footer />
  </Root>,
  document.getElementById('root')
);