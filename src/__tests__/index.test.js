import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../root';
import { mount } from 'enzyme';
import { Layout } from '../main';

describe('<index />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Root>
        <Layout />
      </Root>,
      div
    );
  });

  it('has one layout component', () => {
    const wrapper = mount(
      <Root>
        <Layout />
      </Root>
    );
    expect(wrapper.find(Layout)).toHaveLength(1);
    wrapper.unmount();
  });
});
