import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: this.props.todoText,
      completed: false,
      editing: false,
    };
  }

  componentDidUpdate() {

  }

  completeTodo = () => {
    this.setState({
      completed: !this.state.completed,
    });
  }

  handleEditingStart = () => {

  }

  handleEditing = () => {

  }

  render() {
    const { completeTodo } = this;
    const { todoText, completed, editing } = this.state;
    const { index, deleteTodo } = this.props;
    const viewStyle = editing ? 'none' : 'block';
    const editStyle = editing ? 'block' : 'none';
    const completedStyle = completed ? { textDecoration: 'line-through' } : '';
    
    return (
      <div className="collection-item">
        <div style={{ display: viewStyle }}>
          <span
            style={{ display: 'inline-block', width: '70%', ...completedStyle }}
          >
            {todoText}
          </span>
          <div 
            style={{ display: 'inline-block', width: '30%' }}
            className="right-align"
          >
            <button 
              className="btn green"
              onClick={() => completeTodo()}
            >
              <i className="material-icons">check</i>
            </button>
            {' '}
            <button
              className="btn red darken-2"
              onClick={() => deleteTodo(index)}
            >
              <i className="material-icons">delete</i>
            </button>
          </div>
        </div>
        <input 
          type="text"
          style={{ display: editStyle }}  
        />
      </div>
    );
  };
}

export default TodoItem;
