import React, { useState } from 'react';

function TodoList({ todos, toggleTodo, deleteTodo, activeFilter, addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo({ text: newTodo, done: false });
      setNewTodo('');
    }
  };

  return (
    <section className="main">
      <header className="header">
        <form onSubmit={handleSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            autoFocus
          />
        </form>
      </header>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.done ? 'completed' : ''}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo)}
              />
              <label>{todo.text}</label>
              <button className="destroy" onClick={() => deleteTodo(todo)}></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
