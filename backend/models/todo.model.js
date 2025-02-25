const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, enum: ['daily', 'monthly', 'semester'], required: true },
  status: { type: String, enum: ['not started', 'in progress', 'completed'], default: 'not started' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);
