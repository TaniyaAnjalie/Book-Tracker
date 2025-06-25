# 📚 Book Tracker App

A simple full-stack CRUD application built with **Next.js App Router**, **MongoDB (local)**, and **Mongoose**.  
Easily track your books, mark them as read or unread, and manage your collection.

---

## 🚀 Features

- ✅ Add new books (title, author, status)
- ✏️ Update book status (Read / Unread)
- 🗑️ Delete books
- 🧾 Built with `Next.js App Router` and `Mongoose`
- 💅 Styled with Tailwind CSS

---

## 📦 Tech Stack

- **Frontend:** Next.js 14+ (App Router)
- **Backend:** Next.js API Routes
- **Database:** MongoDB (local)
- **ORM:** Mongoose
- **Styling:** Tailwind CSS

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/book-tracker.git
cd book-tracker
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment

Create a `.env.local` file in the root:

```env
MONGODB_URI=mongodb://localhost:27017/booktracker
```

Make sure MongoDB is running locally (`mongod`).

### 4. Run the development server

```bash
npm run dev
```

Open your browser and go to:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure (Simplified)

```
book-tracker/
├── app/
│   ├── page.js              # Main UI
│   └── api/
│       └── books/
│           ├── route.js     # GET, POST
│           └── [id]/route.js # PUT, DELETE
├── lib/
│   └── mongodb.js           # DB connection
├── models/
│   └── Book.js              # Mongoose model
├── .env.local               # Local environment variables
└── tailwind.config.js       # Tailwind setup
```

---

## 🙌 Acknowledgements

* [Next.js Documentation](https://nextjs.org/docs)
* [MongoDB Documentation](https://www.mongodb.com/docs/)
* [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## ✍️ Author

**Taniya Anjalie Jeewandara**  
*🎓 BSc (Hons) Computer Science (Top-up) student*  
💡 Passionate about software development, full-stack apps, and real-world problem solving.

---

## 📜 License
*Copyright (c) 2025 Taniya Jeewandara*  

This project is open-source and intended for learning and academic purposes.
For contributions or collaborations, feel free to connect via GitHub.

---

⭐ If you found this project useful or inspiring, give it a star!

---

## 🤝 Contributing

Feel free to fork this project, make improvements, and submit pull requests.

```

---

Let me know if you'd like:
- A GitHub-ready version with emojis and badges
- A downloadable version
- Or I can generate a GitHub repository for you!
```

