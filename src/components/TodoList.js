import React from 'react';
import TodoItem from './TodoItem';

export default props => {
  const { todos, filter, deleteTodo } = props;

  const todosArray = Object.keys(todos).map(key => {
    const item = todos[key];
    item.id = key;

    return item;
  });

  const filteredTodos = todosArray.filter(todo => {
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
        />
      );
    }) : (
      <div className="collection-item center-align">No todos.</div>
    );

  return (
    <div className="collection">
      {todoList}
    </div>
  );
};
