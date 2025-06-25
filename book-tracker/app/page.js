// app/page.js

'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: '', author: '', status: 'Unread' });

  const fetchBooks = async () => {
    const res = await fetch('/api/books');
    const data = await res.json();
    setBooks(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return;
    
    await fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    setForm({ title: '', author: '', status: 'Unread' });
    fetchBooks();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/books/${id}`, { method: 'DELETE' });
    fetchBooks();
  };

  const toggleStatus = async (book) => {
    const updatedStatus = book.status === 'Read' ? 'Unread' : 'Read';
    await fetch(`/api/books/${book._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: updatedStatus }),
    });
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-800 mb-8 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Book Tracker
        </h1>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Book</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Book title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <input
                  type="text"
                  placeholder="Author name"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                >
                  <option value="Unread">Unread</option>
                  <option value="Read">Read</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Add Book
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold text-gray-800 p-6 border-b">Your Books ({books.length})</h2>
          {books.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No books added yet. Start by adding your first book!
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {books.map((book) => (
                <li key={book._id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{book.title}</h3>
                      <p className="text-gray-600">by {book.author}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleStatus(book)}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          book.status === 'Read'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {book.status}
                      </button>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}