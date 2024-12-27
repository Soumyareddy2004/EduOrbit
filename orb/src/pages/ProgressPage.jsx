import React, { useState } from 'react';
import Header from '../components/Header';
import './ProgressPage.css';

const ProgressPage = ({ user }) => {
  const userData = user || {
    name: 'John Doe',
    email: 'johndoe@example.com',
    completedTasks: 7,
    totalTasks: 10,
    testScores: [85, 92, 78],
    milestones: [
      { title: 'Joined Platform', date: '2024-01-01' },
      { title: 'First Task Completed', date: '2024-01-10' },
      { title: 'Scored 90%+ on Test', date: '2024-02-01' },
    ],
  };

  const [todos, setTodos] = useState({
    daily: [],
    monthly: [],
    semester: [],
  });

  const [newTodo, setNewTodo] = useState({ type: 'daily', text: '' });

  const handleAddTodo = () => {
    if (newTodo.text.trim()) {
      setTodos((prev) => ({
        ...prev,
        [newTodo.type]: [...prev[newTodo.type], { text: newTodo.text, completed: false }],
      }));
      setNewTodo({ ...newTodo, text: '' });
    }
  };

  const handleDeleteTodo = (type, index) => {
    setTodos((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
  };

  const handleToggleTodo = (type, index) => {
    setTodos((prev) => ({
      ...prev,
      [type]: prev[type].map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  const progressPercentage = ((userData.completedTasks / userData.totalTasks) * 100).toFixed(0);
  const averageScore = (
    userData.testScores.reduce((total, score) => total + score, 0) / userData.testScores.length
  ).toFixed(2);

  return (
    <div className="progress-page">
      <Header />

      <div className="profile-section">
        <h2>User Profile</h2>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </div>

      <div className="todo-section">
        <h2>Set Your Goals</h2>
        <p>Organize your tasks and keep track of your daily, monthly, and semester goals. Stay motivated and achieve success!</p>

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
          <button onClick={handleAddTodo}>Add Goal</button>
        </div>

        {['daily', 'monthly', 'semester'].map((type) => (
          <div key={type} className="todo-list">
            <h3>{type.charAt(0).toUpperCase() + type.slice(1)} Goals</h3>
            <ul>
              {todos[type].map((todo, index) => (
                <li key={index} className={todo.completed ? 'completed' : ''}>
                  <span onClick={() => handleToggleTodo(type, index)}>{todo.text}</span>
                  <button onClick={() => handleDeleteTodo(type, index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="progress-header">
        <h2>Progress Overview</h2>
        <p class="p">Your journey at a glance.</p>
      </div>

      <div className="progress-metrics">
        <div className="progress-bar-wrapper">
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p class="p">
          Completed {userData.completedTasks} out of {userData.totalTasks} tasks.
          <br />
          <strong>Progress:</strong> {progressPercentage}%
        </p>
      </div>

      <div className="test-scores-section">
        <h3>Recent Test Scores</h3>
        <p class="p"><strong>Average Score:</strong> {averageScore}%</p>
        <ul className="test-scores-list">
          {userData.testScores.map((score, index) => (
            <li key={index} className="test-score">
              Test {index + 1}: {score}%
            </li>
          ))}
        </ul>
      </div>

      <div className="milestones-section">
        <h3>Milestones Achieved</h3>
        <ul className="milestones-list">
          {userData.milestones.map((milestone, index) => (
            <li key={index} className="milestone">
              <span className="milestone-title">{milestone.title}</span>
              <span className="milestone-date">{milestone.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressPage;
