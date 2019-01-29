import React from 'react';
import { mount } from 'enzyme';

import Root from '../../../root';
import Players from '../../components/Players';
import SearchBar from '../../components/SearchBar';
import PlayerList from '../../components/PlayerList';

describe('<Players />', () => {
  let wrapper;
  let initialState;

  afterEach(() => {
    wrapper.unmount();
  });

  describe('if data is not loaded', () => {
    beforeEach(() => {
      initialState = {
        players: {
          loaded: false,
          data: []
        }
      };

      wrapper = mount(
        <Root initialState={initialState}>
          <Players />
        </Root>
      );
    });

    it('show spinner', () => {
      expect(wrapper.contains('Loading')).toBeTruthy();
    });

    it('do not render SearchBar or PlayerList components', () => {
      expect(wrapper.find(SearchBar).length).toBeFalsy();
      expect(wrapper.find(PlayerList).length).toBeFalsy();
    });
  });

  /*
  describe('if data is loaded', () => {
    beforeEach(() => {
      initialState = {
        players: {
          loaded: true,
          data: []
        }
      };

      wrapper = mount(
        <Root initialState={initialState}>
          <Players />
        </Root>
      );
    });

    it('don not render a spinner', () => {
      expect(wrapper.contains('Loading')).toBeFalsy();
    });

    it('shows one SearchBar component', () => {
      expect(wrapper.find(SearchBar).length).toEqual(1);
    });

    it('shows one PlayerList component', () => {
      expect(wrapper.find(PlayerList).length).toEqual(1);
    });
  });
  */
});
