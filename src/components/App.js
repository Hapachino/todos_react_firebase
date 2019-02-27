import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTodos } from '../action';
import db from '../firebase';
import InputBar from './InputBar';
import FilterBar from './FilterBar';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
      todos: [],
      filter: 'all',
    }
  }

  async componentDidMount() {
    // this.getTodos();
    this.dbRef = this.props.getTodos();
  }

  addTodo = async e => {
    const { state: { todoText }, getTodos } = this;
    const userId = 1;

    if (e.key === 'Enter' && todoText.trim()) {
      db.ref('/todos/' + userId).push({
        todoText,
        completed: false,
      });

      getTodos();

      this.setState({
        todoText: '',
      });
    }
  }

  deleteTodo = async id => {
    const userId = 1;
    
    await db.ref(`/todos/${userId}/${id}`).remove();
    
    this.getTodos();
  }

  getTodos = async () => {
    const userId = 1;
    const snapshot = await db.ref('/todos/' + userId).once('value');
    const todos = snapshot.val();
    
    this.setState({
      todos,
    });
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
    const { state: { todoText, filter }, handleFilterChange, handleTextChange, addTodo, deleteTodo, getTodos } = this;
    
    return (
      <div className="container">
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
          todos={this.props.todos}
          filter={filter} 
          deleteTodo={deleteTodo} 
          getTodos={getTodos} 
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, {
  getTodos,
})(App);
