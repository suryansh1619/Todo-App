
const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth');
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');

router.route('/').get(protect, getTodos).post(protect, createTodo);
router
  .route('/:id')
  .get(protect, getTodoById)
  .put(protect, updateTodo)
  .delete(protect, deleteTodo);

module.exports = router;
