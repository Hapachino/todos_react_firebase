import React, { Component } from 'react';
import axios from 'axios';
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

    if (e.key === 'Enter' && todoText) {
      await axios.post('/api/addTodo.php', { todoText });

      getTodos();

      this.setState({
        todoText: '',
      });
    }
  }

  deleteTodo = async id => {
    await axios.post('/api/deleteTodo.php', { id });
    
    this.getTodos();
  }

  getTodos = async () => {
    const { data: todos } = await axios.get('/api/getTodos.php');
    
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
