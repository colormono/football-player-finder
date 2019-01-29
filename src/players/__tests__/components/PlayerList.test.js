import React from 'react';
import { shallow } from 'enzyme';

import PlayerList from '../../components/PlayerList';

describe('<PlayerList />', () => {
  let wrapper;
  let players;

  beforeEach(() => {
    players = [
      { name: 'Lukaku' },
      { name: 'Messi' },
      { name: 'Maradona' },
      { name: 'Bochini' }
    ];

    wrapper = shallow(<PlayerList players={players} />);
  });

  it('show one TR element per item', () => {
    expect(wrapper.find('.item').length).toEqual(players.length);
  });

  it('shows the name for each player', () => {
    expect.assertions(players.length);
    return players.forEach(player => {
      expect(wrapper.render().text()).toContain(player.name);
    });
  });
});
