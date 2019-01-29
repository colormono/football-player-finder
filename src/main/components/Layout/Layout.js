import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Players } from '../../../players';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Players />
      <Footer />
    </div>
  );
};

export default Layout;
