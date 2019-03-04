import React, { Component } from 'react';
import { connect } from 'react-redux';

export class AddTodoList extends Component {
  state = {
    title: '',
    description: '',
    error: '',
  }

  handleTextChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = e => {
    const { title, description } = this.state;

    e.preventDefault();

    if (!title || !description) {
      this.setState({
        error: 'Please enter title and description',
      });
    }
  }

  render() {
    const { handleTextChange, handleSubmit } = this;
    console.log(this.props.uid);
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

const mapStateToProps = state => ({
  uid: state.users.uid,
});

export default connect(mapStateToProps)(AddTodoList);
