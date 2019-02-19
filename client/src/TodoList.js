import React from 'react';
import TodoItem from './TodoItem';

export default props => {
  const { todos, deleteTodo } = props;
  const todoList = todos.length ? 
    todos.map(todo => {
      const { id, todoText, completed } = todo;
      console.log(todo);
      return (
        <TodoItem 
          todoText={todoText} 
          completed={completed}
          key={id}
          index={id}
          deleteTodo={deleteTodo}
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
