import React, { Component } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import InputBar from './InputBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
      todos: [],
    }
  }

  async componentDidMount() {
    this.getTodos();
  }

  addTodo = e => {
    const { todoText, todos } = this.state;

    if (e.key === 'Enter' && todoText) {
      this.setState({
        todos: [...todos, todoText],
        todoText: '',
      });
    }
  }

  deleteTodo = key => {
    const todos = this.state.todos.filter((_, index) => key !== index);
    
    this.setState({
      todos,
    });
  }

  getTodos = async () => {
    const { data: todos } = await axios.get('/api/getTodos.php');
    console.log('h');
    this.setState({
      todos,
    });
  }

  handleTextChange = e => {
    this.setState({
      todoText: e.target.value,
    });
  };

  render() {
    const { state: { todoText, todos }, handleTextChange, addTodo, deleteTodo, getTodos } = this;
    
    return (
      <div className="container">
        <h1 className="center red-text">todos</h1>
        <InputBar
          todoText={todoText} 
          handleTextChange={handleTextChange}
          addTodo={addTodo}
        />

        <TodoList todos={todos} deleteTodo={deleteTodo} getTodos={getTodos} />
      </div>
    );
  }
}

export default App;
