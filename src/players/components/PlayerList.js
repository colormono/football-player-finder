import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerList extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired
  };

  static defaultProps = {
    players: []
  };

  renderTable() {
    return (
      <table className="ui celled selectable table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Jersey</th>
            <th>Age</th>
            <th>Nationality</th>
            <th>Contract Until</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.props.players.map(player => {
      return (
        <tr key={player.name} className="item">
          <td data-label="Name">{player.name}</td>
          <td data-label="Position">{player.position}</td>
          <td data-label="Jersey">{player.jerseyNumber}</td>
          <td data-label="Age">{player.age}</td>
          <td data-label="Nationality">{player.nationality}</td>
          <td data-label="ContractUntil">{player.contractUntil}</td>
        </tr>
      );
    });
  }

  renderNoResults() {
    return <p>No results found.</p>;
  }

  render() {
    const { players } = this.props;

    return (
      <section
        className="PlayerList ui container"
        style={{ marginTop: '1em', marginBottom: '1em', flexGrow: 1 }}
      >
        {players.length > 0 ? this.renderTable() : this.renderNoResults()}
      </section>
    );
  }
}

export default PlayerList;
