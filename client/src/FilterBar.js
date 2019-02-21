import React, { Component } from 'react';
import './FilterBar.css'

class FilterBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
    }
  }

  render() {
    return (
      <div className="row">
        <form className="col m6 offset-m3 space-evenly">
          <label>
            <input className="with-gap" name="filter" value="all" type="radio" checked />
            <span>All</span>
          </label>
          <label>
            <input className="with-gap" name="filter" value="active" type="radio" />
            <span>Active</span>
          </label>
          <label>
            <input className="with-gap" name="filter" value="completed" type="radio" />
            <span>Completed</span>
          </label>
        </form>
      </div>
    );
  }
}

export default FilterBar;
