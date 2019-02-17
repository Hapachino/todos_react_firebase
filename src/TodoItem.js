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

  handleEditingStart() {

  }

  handleEditing() {

  }

  render() {
    const { editing, todoText } = this.state;
    const { index, deleteTodo } = this.props;
    const viewStyle = editing ? 'none' : 'block';
    const editStyle = editing ? 'block' : 'none';
    
    return (
      <div className="collection-item">
        <div style={{ display: viewStyle }}>
          <span
            style={{ display: 'inline-block', width: '70%' }}
          >
            {todoText}
          </span>
          <div 
            style={{ display: 'inline-block', width: '30%' }}
            className="right-align"
          >
            <button 
              className="btn green"
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
