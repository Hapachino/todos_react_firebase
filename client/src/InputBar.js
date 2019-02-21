import React from 'react';

export default props => {
  const { todoText, handleTextChange, addTodo } = props;

  return (
    <input
      type="text"
      autoFocus
      value={todoText}
      onChange={handleTextChange}
      onKeyDown={addTodo}
      className="mb-2"
    />
  );
};
