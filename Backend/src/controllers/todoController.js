
const Todo = require('../models/Todo');

// @desc    Get all todos for a user
// @route   GET /api/todos
// @access  Private
const getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user._id });
  res.json(todos);
};

// @desc    Get single todo
// @route   GET /api/todos/:id
// @access  Private
const getTodoById = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo && todo.user.toString() === req.user._id.toString()) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

// @desc    Create a todo
// @route   POST /api/todos
// @access  Private
const createTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const todo = new Todo({
    user: req.user._id,
    title,
    description,
  });

  const createdTodo = await todo.save();
  res.status(201).json(createdTodo);
};

// @desc    Update a todo
// @route   PUT /api/todos/:id
// @access  Private
const updateTodo = async (req, res) => {
  const { title, description, completed } = req.body;

  const todo = await Todo.findById(req.params.id);

  if (todo && todo.user.toString() === req.user._id.toString()) {
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.completed = completed !== undefined ? completed : todo.completed;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
// @access  Private
const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo && todo.user.toString() === req.user._id.toString()) {
    await todo.deleteOne();
    res.json({ message: 'Todo removed' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
