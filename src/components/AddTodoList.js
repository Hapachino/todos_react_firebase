import React, { Component } from 'react';

export class AddTodoList extends Component {
  handleTextChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    const { handleTextChange, handleSubmit } = this;
    
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h5 className="grey-text text-darken-3">New Todo List</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={handleTextChange} />
          </div>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" onChange={handleTextChange} />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1">
              Create
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddTodoList
