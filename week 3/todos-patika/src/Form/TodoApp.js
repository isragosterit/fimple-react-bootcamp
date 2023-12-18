import React, { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

function TodoApp() {
  const initialTodos = [
    { text: 'Taste JavaScript', done: true },
    { text: 'Code furiously', done: true },
    { text: 'Promote Mavo', done: false },
    { text: 'Give talks', done: false },
    { text: 'Write tutorials', done: true },
    { text: 'Have a life!', done: false },
  ];
  
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const [todos, setTodos] = useState(initialTodos);
  const [activeFilter, setActiveFilter] = useState('all');

  const toggleTodo = (clickedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo === clickedTodo ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (deletedTodo) => {
    const filteredTodos = todos.filter(todo => todo !== deletedTodo);
    setTodos(filteredTodos);
  };

  const changeFilter = (filter) => {
    setActiveFilter(filter);
  };

  const clearCompleted = () => {
    const filteredTodos = todos.filter(todo => !todo.done);
    setTodos(filteredTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (activeFilter === 'all') {
      return true;
    } else if (activeFilter === 'active') {
      return !todo.done;
    } else {
      return todo.done;
    }
  });

  const todoLeft = todos.filter(todo => !todo.done).length;
  const todoDone = todos.length - todoLeft;

  return (
    <section className="todoapp">
      <Header addTodo={(newTodo) => setTodos([...todos, newTodo])} />
      <TodoList
  todos={filteredTodos}
  toggleTodo={toggleTodo}
  deleteTodo={deleteTodo}
  addTodo={addTodo}
/>

      <Footer
        todoLeft={todoLeft}
        todoDone={todoDone}
        activeFilter={activeFilter}
        changeFilter={changeFilter}
        clearCompleted={clearCompleted}
      />
    </section>
  );
}

export default TodoApp;
