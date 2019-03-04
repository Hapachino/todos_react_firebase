import React, { Component } from 'react';

class Collection extends Component {
  render() {
    return (
      <ul className="collection">
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>
          <span className="title">Title</span>
          <p>
            Description 
          </p>
          <p>
            Date
          </p>
        </li>
      </ul>
    )
  }
}

export default Collection;
