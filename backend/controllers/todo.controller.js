const todoModel = require('../models/todo.model');

module.exports.getTodos = async (req, res) => {
  try {
    const todos = await todoModel.find({ userId: req.user._id });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error });
  }
};

module.exports.addTodo = async (req, res) => {
  try {
    const { text, type, status } = req.body;
    const newTodo = new todoModel({ text, type, status, userId: req.user._id });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error adding todo', error });
  }
};

module.exports.updateTodo = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedTodo = await todoModel.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo', error });
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    await todoModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo', error });
  }
};
