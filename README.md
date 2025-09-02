📦 StuffSus – Full Stack E-Commerce Web Application

StuffSus is a full-stack web-based e-commerce application built using modern technologies like the MERN stack (MongoDB, Express.js, React.js, Node.js) along with HTML, CSS, JavaScript, and Socket.io for real-time communication.
This project was created as a post-course completion project after finishing my Full Stack Development training at Coding Blocks to further solidify my skills in building scalable, secure, and production-like applications.

🚀 Features

User Authentication & Authorization

1. User signup & login system with secure password hashing using bcrypt.
2. Encrypted credentials stored in MongoDB Atlas (cloud database).
3. Session-based authentication & unique user IDs for data management.

E-Commerce Core Functionality

1. Product listing and management (Add, Update, Delete via backend).
2. Dynamic data rendering on frontend using React.js.
3. Cart system for adding and managing products.
4. Strict separation of user side vs. admin side (restricted access).

Real-Time Chat System

1. Integrated chat feature using Socket.io.
2. Users can communicate directly with the shop owner for queries and support.

Tech Highlights

1. Frontend built with React.js (component-based UI).
2. Backend built with Node.js + Express.js.
3. Database handled by MongoDB Atlas with Mongoose ODM.
4. API-based data flow with full CRUD operations.

🛠️ Tech Stack

1. Frontend: React.js, HTML5, CSS3, JavaScript
2. Backend: Node.js, Express.js
3. Database: MongoDB Atlas (Cloud)
4. Authentication: bcrypt.js, JWT (JSON Web Token)
5. Real-Time Communication: Socket.io
6. Version Control & Deployment: Git, GitHub

📂 Project Workflow

1. User signs up, details stored securely in MongoDB Atlas with encrypted password.
2. User signs in and gets authenticated via hashed credentials.
3. On successful login, the user lands on the Home Screen where products and user-specific data are fetched via unique user ID.
4. Users can add products to cart and see real-time updates on frontend.
5. Any changes in backend (add/update/delete products) instantly reflect on frontend.
6. Users can connect with shop owners via built-in chat feature powered by Socket.io.

📚 Learning Outcome

1. Gained hands-on experience with end-to-end MERN application development.
2. Implemented secure authentication systems with bcrypt & JWT.
3. Understood how to integrate real-time features (chat) inside a production-like project.
4. Strengthened skills in modular project structuring (separate frontend & backend).
5. Deployed cloud database solutions with MongoDB Atlas.

📌 Future Enhancements

1. Payment gateway integration (e.g., Razorpay/Stripe).
2. Admin dashboard with advanced analytics.
3. Order tracking system.
4. Enhanced UI with Material UI / Tailwind CSS.
