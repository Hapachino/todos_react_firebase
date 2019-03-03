import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTodos } from '../action';
import db from '../firebase';
import InputBar from './InputBar';
import FilterBar from './FilterBar';
import TodoList from './TodoList';
import './App.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
      filter: 'all',
    }
  }

  componentDidMount() {
    const { getTodos, uid } = this.props;
    this.dbRef = db.ref('/todos/' + uid);

    getTodos(uid);
  }

  componentDidUpdate(prevProps) {
    const { getTodos, uid } = this.props;

    if (prevProps.uid !== uid) {
      getTodos(uid);

      this.dbRef = db.ref('/todos/' + uid);
    }
  }

  componentWillUnmount() {
    const { dbRef } = this;

    dbRef && dbRef.off();
  }

  addTodo = async e => {
    const { state: { todoText }, props: { uid } } = this;
    
    if (e.key === 'Enter' && todoText.trim()) {
      db.ref('/todos/' + uid).push({
        todoText,
        completed: false,
      });

      this.setState({
        todoText: '',
      });
    }
  }

  deleteTodo = async id => {
    const { dbRef } = this;

    await dbRef.child(id).remove();
  }

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  }

  handleTextChange = e => {
    this.setState({
      todoText: e.target.value,
    });
  };

  render() {
    const { state: { todoText, filter }, handleFilterChange, handleTextChange, addTodo, deleteTodo } = this;
    
    return (
      <div className="container maxWidth800">
        <h1 className="center red-text">todos</h1>
        <InputBar
          todoText={todoText}
          handleTextChange={handleTextChange}
          addTodo={addTodo}
        />
        <FilterBar
          filter={filter}
          handleFilterChange={handleFilterChange}
        />
        <TodoList
          todos={this.props.todos || {}}
          filter={filter}
          deleteTodo={deleteTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  uid: state.users.uid,
});

export default connect(mapStateToProps, {
  getTodos,
})(Dashboard);
