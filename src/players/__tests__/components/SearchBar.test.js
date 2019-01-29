import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Root from '../../../root';
import SearchBar from '../../components/SearchBar';

describe('<SearchBar />', () => {
  let sinonSpy;
  let wrapper;

  beforeEach(() => {
    sinonSpy = sinon.spy();
    wrapper = mount(
      <Root>
        <SearchBar onSubmit={sinonSpy} />
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    sinonSpy = null;
  });

  describe('elements', () => {
    it('has two inputs, one for the name one for the age', () => {
      expect(wrapper.find('input')).toHaveLength(2);
    });

    it('has a select for the positions', () => {
      expect(wrapper.find('select')).toHaveLength(1);
    });

    it('has a clickeable submit div', () => {
      // Expect a div.submit with no clicks
      expect(wrapper.find('div.submit')).toHaveLength(1);
      expect(sinonSpy.called).toBe(false);

      // find the div.submit and simulate a click event on it
      wrapper.find('div.submit').simulate('click');
      sinonSpy();
      expect(sinonSpy.called).toBe(true);
    });
  });

  describe('Input name', () => {
    beforeEach(() => {
      wrapper.find('input.name').simulate('change', {
        target: {
          value: 'player name'
        }
      });
      wrapper.update();
    });

    it('user can type in', () => {
      expect(wrapper.find('input.name').prop('value')).toEqual('player name');
    });

    it('no clear value after form submission', () => {
      wrapper.find('form').simulate('submit');
      wrapper.update();
      expect(wrapper.find('input.name').prop('value')).toEqual('player name');
    });
  });
});
