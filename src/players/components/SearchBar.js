import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { filterPlayers } from '../actions';

const data = {
  initialValues: {
    name: '',
    position: '',
    age: 40
  },
  fields: {
    ageMin: 18,
    ageMax: 40,
    positionOptions: [
      'Attacking Midfield',
      'Central Midfield',
      'Centre-Back',
      'Centre-Forward',
      'Defensive Midfield',
      'Keeper',
      'Left Midfield',
      'Left Wing',
      'Left-Back',
      'Right-Back'
    ]
  }
};

class SearchBar extends Component {
  renderInput = formProps => {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" className="name" />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  renderSelect = formProps => {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <select {...formProps.input} className="ui dropdown">
          <option value="">Show all</option>
          {formProps.options.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  renderRange = formProps => {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <span className="ui label">{formProps.input.value}</span>
        <input
          {...formProps.input}
          type="range"
          min={formProps.min}
          max={formProps.max}
          step={formProps.step}
        />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return <small>{error}</small>;
    }
  }

  onSubmit = formValues => {
    this.props.filterPlayers(formValues);
  };

  render() {
    const { positionOptions, ageMin, ageMax } = data.fields;

    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="inline fields">
          <Field
            label="Name"
            name="name"
            component={this.renderInput}
            normalize={normalizeName}
          />

          <Field
            label="Position"
            name="position"
            component={this.renderSelect}
            options={positionOptions}
          />

          <Field
            label="Max. Age"
            name="age"
            component={this.renderRange}
            step="1"
            min={ageMin}
            max={ageMax}
          />

          <div
            className="ui vertical animated secondary button submit"
            onClick={this.props.handleSubmit(this.onSubmit)}
          >
            <div className="hidden content">Search</div>
            <div className="visible content">
              <i className="search icon" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const normalizeName = (value, previousValue) => {
  if (!value) {
    return value;
  }
  return value.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/g)
    ? value
    : previousValue;
};

SearchBar = connect(
  null,
  { filterPlayers }
)(SearchBar);

export default reduxForm({
  form: 'searchFilters',
  initialValues: data.initialValues
})(SearchBar);
