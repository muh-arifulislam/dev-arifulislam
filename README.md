# Dev Ariful Islam - Fullstack Portfolio Website

A modern, responsive portfolio website built with a React.js (TypeScript) frontend and Express.js (TypeScript) backend, showcasing my skills, projects, and blog posts.

## Live Demo

- Frontend: [https://dev-arifulislam.netlify.app/](https://dev-arifulislam.netlify.app/)
- Backend API: [https://dev-arifulislam.vercel.app/](https://dev-arifulislam.vercel.app/)

<!-- Navigation Tags -->

- [🔗 Live Demo](#live-demo)
- [✨ Features](#features)
- [🛠 Tech Stack](#tech-stack)
- [📁 Project Structure](#project-structure)
- [📡 API Endpoints](#api-endpoints)
- [📦 Installation](#installation)
- [⚙️ Environment Variables](#environment-variables)
- [📝 License](#license)

## Features

### Frontend

- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- State management with React Query
- SEO optimization with React Helmet
- Modern routing with React Router v7
- Built with Vite for fast development

### Backend

- RESTful API with Express.js
- MongoDB database with Mongoose ODM
- Authentication with JWT
- Data validation with Zod
- File upload with Multer and Cloudinary
- Payment integration with Stripe
- TypeScript for type safety

## Tech Stack

### Frontend

- **Framework**: React 19 (TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Query
- **Animation**: Framer Motion
- **Routing**: React Router v7
- **HTTP Client**: Axios

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js (TypeScript)
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT
- **Validation**: Zod
- **File Storage**: Cloudinary
- **Payments**: Stripe
- **Linting**: ESLint + Prettier

## Project Structure

### Frontend

```
src/
├── api/            # API calls and services
├── assets/         # Static assets like images
├── components/     # Reusable UI components
├── context/        # React context providers
├── data/           # Static or mock data
├── hooks/          # Custom React hooks
├── layout/         # Layout components (e.g., Header, Footer)
├── scenes/         # Page-level components or views
├── types/          # TypeScript type definitions
├── utils/          # Utility/helper functions
└── App.tsx         # Main application component
└── main.tsx        # Entry point of application
```

### Backend

```
src/
├── app/
│ ├── DB/           # Database connection and related logic
│ ├── config/       # App configuration (e.g., environment, constants)
│ ├── errors/       # Custom error handlers and exceptions
│ ├── interface/    # TypeScript interfaces and types
│ ├── middlewares/  # Express middlewares (e.g., auth, error handling)
│ ├── modules/      # Core business logic (services, controllers, models)
│ ├── routes/       # API route definitions
│ └── utils/        # Reusable utility functions
├── app.ts          # Express app setup and middleware registration
└── server.ts       # Server entry point
```

## API Endpoints

## Installation

### Frontend

```bash
git clone https://github.com/yourusername/dev-arifulislam.git
cd dev-arifulislam/client
npm install
npm run dev
```

### Backend

```bash
cd dev-arifulislam/server
npm install
# Create .env file with required variables
npm run start:dev
```

## Environment Variables

### Frontend

```env
VITE_API_BASE_URL=your_api_base_url
```

### Backend

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=30d
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
STRIPE_SECRET_KEY=your_stripe_key
```

## 📝 License

This project is licensed under the MIT License.  
See the [LICENSE](./LICENSE) file for details.
