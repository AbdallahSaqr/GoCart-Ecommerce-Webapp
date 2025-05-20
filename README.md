# 🛒 GoCart

GoCart is a modern, fully responsive eCommerce web application built with **React.js**, **Bootstrap**, and **React Router**. It allows users to browse products, view detailed information, add items to the cart, and manage their preferences for theme and language. GoCart is designed to be clean, fast, and scalable.

---

## 🚀 Features

- 🧾 **Product Listing with Pagination**
- 🔍 **Product Details View**
- 🛒 **Cart Management** (Add, Remove, View)
- 🎨 **Theme Toggle** (Light / Dark Mode)
- 🌐 **Language Toggle** (English / Arabic)
- 🔐 **User Authentication Pages** (Login & Register)
- ⚙️ **Settings Page** with live preferences
- 📱 **Responsive Design** for all devices
- 🌀 **Loading Spinner with Suspense**
- 🌍 **Routing** with React Router v6

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Bootstrap 5
- **Routing:** React Router
- **State Management:** React Context + useReducer
- **Styling:** CSS Modules / Bootstrap
- **Localization:** Manual Language Toggle (EN/AR)
- **Icons & UI:** Bootstrap Icons
- **Loader:** Custom CSS Loader integrated with Suspense

---

## 📂 Project Structure

GoCart/
│
├── public/
├── src/
│ ├── assets/ # Images & icons
│ ├── components/ # Reusable UI components
│ ├── context/ # Theme & Language contexts
│ ├── pages/ # Main views (Home, Details, Cart, Login, etc.)
│ ├── styles/ # Custom CSS files
│ ├── App.js # Root component with routing
│ └── index.js # Entry point
│
├── README.md
└── package.json



---

## ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/GoCart.git

# 2. Navigate into the project
cd GoCart

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```

🧪 Test Data Source
Products API: DummyJSON API

Fetched dynamically for product listing and details

🌙 Theme & 🌐 Language Persistence
Preferences (theme, language) are saved using localStorage

They persist between sessions and page reloads

🧑‍💻 Author
Mohamed [Your Name]
React Developer & Full-Stack Enthusiast
LinkedIn | GitHub

📄 License
This project is licensed under the MIT License — feel free to use and modify it.

🙌 Acknowledgements
Bootstrap

React Router

DummyJSON

OpenAI ChatGPT — for code guidance

⭐️ Show Your Support
If you like this project, please consider ⭐️ starring the repo — it helps others discover it too!
