const express = require('express');
const { getTodos, addTodo, updateTodo, deleteTodo } = require('../controllers/todo.controller');
const { authUser } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', authUser, getTodos);
router.post('/', authUser, addTodo);
router.put('/:id', authUser, updateTodo);
router.delete('/:id', authUser, deleteTodo);

module.exports = router;
