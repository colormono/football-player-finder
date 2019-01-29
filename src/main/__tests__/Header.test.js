import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header/Header';

describe('<Header />', () => {
  it('render one header tag with one h1 title', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
