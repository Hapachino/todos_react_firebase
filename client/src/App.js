import React, { Component } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import InputBar from './InputBar';
import './App.css';

// const todos = [
//   'Buy milk',
//   'Wash car',
// ];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
      todos: [],
    }
  }

  async componentDidMount() {
    const { data: todoRows } = await axios.get('http://localhost:8080/todos_react_php/api/getTodos.php');

    const todos = todoRows.map(todo => todo.todoText);

    this.setState({
      todos,
    });
    
    console.log(todos);
  }

  handleTextChange = e => {
    this.setState({
      todoText: e.target.value,
    });
  };

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

  render() {
    const { state: { todoText, todos }, handleTextChange, addTodo, deleteTodo } = this;
    
    return (
      <div className="container">
        <h1 className="center red-text">todos</h1>
        <InputBar
          todoText={todoText} 
          handleTextChange={handleTextChange}
          addTodo={addTodo}
        />

        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    );
  }
}

export default App;
