// models/Book.js

import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    trim: true,
  },
  status: {
    type: String,
    enum: ['Read', 'Unread'],
    default: 'Unread',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Book || mongoose.model('Book', BookSchema);