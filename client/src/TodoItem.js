import React, { Component } from 'react';
import axios from 'axios';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  componentDidUpdate() {
    if (this.state.editing) {
      this.input.focus();
    }
  }

  completeTodo = async () => {
    const { id, getTodos } = this.props;
    
    await axios.post('/api/completeTodo.php', { id });

    await getTodos();
  }

  handleEditingOnBlur = () => {
    this.setState({
      editing: false,
    });
  }

  handleEditingOnEnter = e => {
    if (e.key === 'Enter') {
      this.setState({
        editing: false,
      });
    }
  }

  handleEditingStart = () => {
    this.setState({
      editing: true,
    });
  }

  handleEditing = e => {
    this.setState({
      todoText: e.target.value,
    });
  }

  render() {
    const { completeTodo, handleEditing, handleEditingOnBlur, handleEditingOnEnter, handleEditingStart } = this;
    const { editing } = this.state;
    const { todoText, id, deleteTodo, completed } = this.props;
    const viewStyle = editing ? 'none' : 'block';
    const editStyle = editing ? 'block' : 'none';
    const completedStyle = completed ? { textDecoration: 'line-through' } : '';
    const completeButtonText = completed ? 'undo' : 'check';
    const completeButtonColor = completed ? 'orange' : 'green';
   
   return (
      <div className="collection-item">
        <div style={{ display: viewStyle }}>
          <span
            style={{ display: 'inline-block', width: '70%', ...completedStyle }}
            onDoubleClick={() => handleEditingStart()}
          >
            {this.props.todoText}
          </span>
          <div 
            style={{ display: 'inline-block', width: '30%' }}
            className="right-align"
          >
            <button 
              className={`btn ${completeButtonColor}`}
              onClick={completeTodo}
            >
              <i className="material-icons">{completeButtonText}</i>
            </button>
            {' '}
            <button
              className="btn red darken-2"
              onClick={() => deleteTodo(id)}
            >
              <i className="material-icons">delete</i>
            </button>
          </div>
        </div>
        <input 
          type="text"
          style={{ display: editStyle }}
          ref={el => this.input = el}
          value={todoText}
          onChange={handleEditing}
          onBlur={handleEditingOnBlur}
          onKeyDown={handleEditingOnEnter}
        />
      </div>
    );
  };
}

export default TodoItem;
