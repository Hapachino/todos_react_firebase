import React from 'react';
import TodoItem from './TodoItem';

export default props => {
  const todoList = props.todos.length ? 
    props.todos.map((text, index) => {
    return (
      <TodoItem 
        text={text} 
        key={index}
      />
    );
  }) : (
    <p>No Todos.</p>
  );

  return (
    <div className="collection">
      {todoList}
    </div>
  );
};
