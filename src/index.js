import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';
import { Layout } from './main';
import './styles/main.css';

ReactDOM.render(
  <Root>
    <Layout />
  </Root>,
  document.getElementById('root')
);
