import React, { Component } from 'react';
import './FilterBar.css'

class FilterBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: props.filter,
    }

    this.options = [
      {
        label: 'All',
        value: 'all',
      },
      {
        label: 'Active',
        value: 'active',
      },
      {
        label: 'Completed',
        value: 'completed',
      }
    ]
  }

  renderRadioButtons = options => {
    const { filter, handleFilterChange } = this.props;

    const radioButtons = options.map((option, index) => {
      const { label, value } = option;

      return (
        <label key={index}>
          <input
            className="with-gap"
            name="filter"
            value={value}
            type="radio"
            checked={filter === value}
            onChange={handleFilterChange}
          />
          <span>{label}</span>
        </label>
      );
    });

    return (
      <form className="col m6 offset-m3 space-evenly">
        {radioButtons}
      </form>
    );
  }

  render() {
    const { options, renderRadioButtons } = this;

    return (
      <div className="row">
        {renderRadioButtons(options)}
      </div>
    );
  }
}

export default FilterBar;
