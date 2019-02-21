import React from 'react';
import TodoItem from './TodoItem';

export default props => {
  const { todos, filter, deleteTodo, getTodos } = props;
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    }

    return [];
  });
  const todoList = filteredTodos.length ? 
    filteredTodos.map(todo => {
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
