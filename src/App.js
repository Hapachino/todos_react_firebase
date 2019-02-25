import React, { Component } from 'react';
import axios from 'axios';
import db from './firebase';
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
    this.getTodos();
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
    const { data: { success } } = await axios.post('/api/delete', { id });
    
    if (success) {
      this.getTodos();
    }
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
    const { state: { todoText, todos, filter }, handleFilterChange, handleTextChange, addTodo, deleteTodo, getTodos } = this;
    
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
          todos={todos}
          filter={filter} 
          deleteTodo={deleteTodo} 
          getTodos={getTodos} 
        />
      </div>
    );
  }
}

export default App;
