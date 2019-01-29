import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectedPlayers from '../selectors';
import { fetchPlayers } from '../actions';

import SearchBar from './SearchBar';
import PlayerList from './PlayerList';

class Players extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  renderLoading() {
    return (
      <div className="ui container">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.loaded) {
      return this.renderLoading();
    }

    return (
      <section className="Players ui container">
        <SearchBar />
        <PlayerList players={this.props.players} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    loaded: state.players.loaded,
    players: selectedPlayers(state)
  };
}

export default connect(
  mapStateToProps,
  { fetchPlayers }
)(Players);
