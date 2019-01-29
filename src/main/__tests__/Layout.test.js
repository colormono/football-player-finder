import React from 'react';
import { mount } from 'enzyme';

import Root from '../../root';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Players } from '../../players';

describe('<Layout />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Layout />
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('shows one header component', () => {
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('shows one footer component', () => {
    expect(wrapper.find(Footer).length).toEqual(1);
  });

  it('shows one players component', () => {
    expect(wrapper.find(Players).length).toEqual(1);
  });
});
