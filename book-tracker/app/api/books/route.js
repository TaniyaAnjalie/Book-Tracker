// app/api/books/route.js

import connectDB from '@/lib/mongodb';
import Book from '@/models/Book';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const books = await Book.find().sort({ createdAt: -1 });
  return NextResponse.json(books);
}

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const book = await Book.create(body);
    return NextResponse.json(book, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create book' },
      { status: 500 }
    );
  }
}