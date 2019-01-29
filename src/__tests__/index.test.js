import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../root';
import { Header, Footer } from '../main';
import { Players } from '../players';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Root>
      <Header />
      <Players />
      <Footer />
    </Root>,
    div
  );
});
