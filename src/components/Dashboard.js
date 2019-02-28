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
    const { getTodos } = this.props;
    const uid = localStorage.getItem('uid');
    this.dbRef = getTodos(uid);
  }

  componentWillUnmount() {
    if (this.dbRef) {
      this.dbRef.off();
    }
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
    const userId = 1;

    await db.ref(`/todos/${userId}/${id}`).remove();
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
    console.log(this.props.uid);
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
