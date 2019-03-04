import React, { Component } from 'react';
import { connect } from 'react-redux';
import db from '../firebase';

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
    const { uid } = this.props;

    e.preventDefault();

    if (!title || !description) {
      this.setState({
        error: 'Please enter title and description',
      });
    }

    const dbRef = db.ref('/collection/' + uid);

    dbRef.push({
      title,
      description,
    });

    this.setState({
      title: '',
      description: '',
      error: '',
    });
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

const mapStateToProps = state => ({
  uid: state.users.uid,
});

export default connect(mapStateToProps)(AddTodoList);
