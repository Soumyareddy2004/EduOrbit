const Todo = require('../models/todo.model');

const getTodos = async (userId) => {
  return Todo.find({ userId });
};

const addTodo = async (todoData) => {
  const todo = new Todo(todoData);
  return todo.save();
};

const updateTodo = async (id, updates) => {
  return Todo.findByIdAndUpdate(id, updates, { new: true });
};

const deleteTodo = async (id) => {
  return Todo.findByIdAndDelete(id);
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
