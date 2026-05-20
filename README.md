Medi-Queue
A comprehensive session booking management system for tutors and students, built with React, Next.js, Node.js, Express, and MongoDB.

🚀 Overview
Medi-Queue is designed to bridge the gap between tutors and students. It allows tutors to manage their teaching schedules and slots, while students can view availability and book sessions seamlessly.

🛠 Tech Stack
Frontend: Next.js (App Router), Tailwind CSS, HeroUI

Backend: Node.js, Express

Database: MongoDB

Utilities: Axios, SweetAlert2, React Hot Toast

📋 Features
Tutor Management: Admins/Tutors can add, view, update, and delete tutor profiles.

Booking System: Real-time slot management (slots decrease upon successful booking).

Interactive UI: Modern, responsive design with intuitive forms and feedback notifications.

⚙️ Installation & Setup
Prerequisites
Node.js (v18 or higher)

MongoDB Atlas URI

Backend Setup
Navigate to your server folder: cd server

Create a .env file and add your connection string:

Code snippet
PORT=5000
MONGODB_URL=your_mongodb_connection_string_here
Install dependencies: npm install

Start the server: node server.js

Frontend Setup
Navigate to your client folder: cd medi-queue-client

Create a .env.local file:

Code snippet
NEXT_PUBLIC_API_URL=http://localhost:5000
Install dependencies: npm install

Run the development server: npm run dev