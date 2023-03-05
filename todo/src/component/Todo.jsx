import React, { useState } from 'react';
import './TodoList.css';
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
//rendary akatawa
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!inputValue) return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  }

  function handleTodoClick(todoId) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function handleRemoveTodoClick(todoId) {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">Todo List</h1>
      <form onSubmit={handleFormSubmit} className="todo-form">
        <input type="text" value={inputValue} onChange={handleInputChange} className="todo-input" placeholder="Add a task" />
        <button type="submit" className="todo-button">Add Todo</button>
      </form>
      <ul className="todo-items">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span
              onClick={() => handleTodoClick(todo.id)}
              className="todo-text"
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodoClick(todo.id)} className="remove-button">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;