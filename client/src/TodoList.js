import React from 'react';
import TodoItem from './TodoItem';

export default props => {
  const { todos, deleteTodo, getTodos } = props;
  console.log(todos);
  const todoList = todos.length ? 
    todos.map(todo => {
      const { id, todoText, completed } = todo;
      
      return (
        <TodoItem 
          todoText={todoText} 
          completed={completed}
          key={id}
          id={id}
          deleteTodo={deleteTodo}
          getTodos={getTodos}
        />
      );
    }) : (
      <p>No todos.</p>
    );

  return (
    <div className="collection">
      {todoList}
    </div>
  );
};
