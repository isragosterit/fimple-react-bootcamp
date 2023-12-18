import React from 'react';

const Footer = ({
  todoLeft,
  todoDone,
  activeFilter,
  changeFilter,
  clearCompleted,
}) => {
  return (
    <footer className="footer" style={{ display: todoLeft === 0 ? 'none' : 'block' }}>
      <span className="todo-count">{`${todoLeft} ${todoLeft === 1 ? 'item' : 'items'} left`}</span>
      <ul className="filters">
        <li>
          <a className={activeFilter === 'all' ? 'selected' : ''} onClick={() => changeFilter('all')}>
            All
          </a>
        </li>
        <li>
          <a
            className={activeFilter === 'active' ? 'selected' : ''}
            onClick={() => changeFilter('active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={activeFilter === 'completed' ? 'selected' : ''}
            onClick={() => changeFilter('completed')}
          >
            Completed
          </a>
        </li>
      </ul>
      {todoDone > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
