import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer/Footer';

describe('<Footer />', () => {
  it('render one footer tag with a link to me', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer')).toHaveLength(1);
    expect(wrapper.contains('Colormono')).toBeTruthy();
  });
});
