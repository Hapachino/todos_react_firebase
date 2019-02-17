import React from 'react';
import TodoItem from './TodoItem';

export default props => {
  const { todos, deleteTodo } = props;
  const todoList = todos.length ? 
    todos.map((todoText, index) => {
      return (
        <TodoItem 
          todoText={todoText} 
          key={index}
          index={index}
          deleteTodo={deleteTodo}
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
