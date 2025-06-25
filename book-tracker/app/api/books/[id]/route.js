// app/api/books/[id]/route.js

import connectDB from '@/lib/mongodb';
import Book from '@/models/Book';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
  await connectDB();
  try {
    const body = await req.json();
    const updated = await Book.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    );
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update book' },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  await connectDB();
  try {
    await Book.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete book' },
      { status: 500 }
    );
  }
}