import React from 'react';
import TodoItem from './TodoItem';

export default props => {
  const { todos, deleteTodo, getTodos } = props;
  const todoList = todos.length ? 
    todos.map(todo => {
      const { id, todoText, completed } = todo;
      console.log(todo);
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
