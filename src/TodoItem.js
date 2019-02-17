import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
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
    const { editing, text } = this.state;
    const viewStyle = editing ? { display: 'none' } : { display: 'block' };
    const editStyle = editing ? { display: 'block' } : { display: 'none' };

    return (
      <div className="collection-item">
        <div style={viewStyle}>
          <span
            style={{ display: 'inline-block'}}
          >
          {text}
          </span>
        </div>
        <input 
          type="text"
          style={editStyle}  
        />
      </div>
    );
  };
}

export default TodoItem;
