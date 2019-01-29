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
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('shows one footer component', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('shows one players component', () => {
    expect(wrapper.find(Players)).toHaveLength(1);
  });
});
