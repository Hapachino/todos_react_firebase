import React, { Component } from 'react';
import './FilterBar.css'

class FilterBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
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
    const { state: { filter }, handleOnChange } = this;

    const radioButtons = options.map((option, index) => {
      const { label, value } = option;

      return (
        <label>
          <input
            key={index}
            className="with-gap"
            name="filter"
            value={value}
            type="radio"
            checked={filter === value}
            onChange={handleOnChange}
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

  handleOnChange = e => {
    this.setState({
      filter: e.target.value,
    });
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
