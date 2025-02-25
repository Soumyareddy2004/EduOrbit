import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import './Dashboard.css';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ type: 'daily', text: '', status: 'not started' });

  useEffect(() => {
    // Fetch Todos on Load
    axios
      .get('/todo', { withCredentials: true })
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = () => {
    if (newTodo.text.trim()) {
      axios
        .post('/todo', newTodo, { withCredentials: true })
        .then((response) => {
          setTodos([...todos, response.data]);
          setNewTodo({ ...newTodo, text: '' });
        })
        .catch((error) => console.error('Error adding todo:', error));
    }
  };

  const updateTodoStatus = (id, status) => {
    axios
      .put(`/todo/${id}`, { status }, { withCredentials: true })
      .then((response) => {
        setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
      })
      .catch((error) => console.error('Error updating todo:', error));
  };

  const deleteTodo = (id) => {
    axios
      .delete(`/todo/${id}`, { withCredentials: true })
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((error) => console.error('Error deleting todo:', error));
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="todo-section">
        <h2>Set Your Goals</h2>
        <div className="add-todo">
          <select
            value={newTodo.type}
            onChange={(e) => setNewTodo({ ...newTodo, type: e.target.value })}
          >
            <option value="daily">Daily Goal</option>
            <option value="monthly">Monthly Goal</option>
            <option value="semester">Semester Goal</option>
          </select>
          <input
            type="text"
            placeholder="Enter your goal"
            value={newTodo.text}
            onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
          />
          <button onClick={addTodo}>Add Goal</button>
        </div>

        {['not started', 'in progress', 'completed'].map((status) => (
          <div key={status} className="todo-list">
            <h3>{status.toUpperCase()} Goals</h3>
            <ul>
              {todos.filter((todo) => todo.status === status).map((todo) => (
                <li key={todo._id}>
                  <span>{todo.text}</span>
                  <button
                    style={{ backgroundColor: '#28a745' }}
                    onClick={() => updateTodoStatus(todo._id, 'completed')}
                  >
                    Completed
                  </button>
                  <button
                    style={{ backgroundColor: '#ffc107' }}
                    onClick={() => updateTodoStatus(todo._id, 'in progress')}
                  >
                    In Progress
                  </button>
                  <button
                    style={{ backgroundColor: '#dc3545' }}
                    onClick={() => updateTodoStatus(todo._id, 'not started')}
                  >
                    Not Started
                  </button>
                  <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
