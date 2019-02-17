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
    const { index } = this.props;
    const viewStyle = editing ? 'none' : 'block';
    const editStyle = editing ? 'block' : 'none';
    console.log(viewStyle, editStyle);
    return (
      <div className="collection-item">
        <div style={{ display: viewStyle }}>
          <span
            style={{ display: 'inline-block'}}
          >
            {todoText}
          </span>
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
