# Transaction App (Frontend)

### Transaction Dashboard

![Transaction Dashboard](./images/transaction_page.png)

This is the **frontend** part of the **Transaction App**, a financial management tool that allows users to manage their transactions. The app provides functionalities for users to create, view, and send transactions, with features like dark/light mode and responsive design for an optimized experience across devices.

## Live Demo

Check out the live version of the app: [Transaction App](https://transaction-app-frontend-sigma.vercel.app)

## Features

- **User Authentication**: Login and signup functionality for secure access.
- **Transaction CRUD**: Create, read, update, and delete transactions.
- **Dark/Light Mode Toggle**: Switch between dark and light modes for a personalized user experience.
- **Responsive Design**: Fully responsive design for mobile and desktop views.
- **Search Filtering**: Filter users based on name.
- **Loading Spinners**: Visual feedback for loading states during transaction fetching, login, and signup processes.

## Tech Stack

- **Frontend**: ReactJS, JavaScript, Tailwind CSS, Material UI (for components like buttons, forms)
- **Backend**: [Transaction App Backend](https://github.com/Amansingh0369/Transaction-App-Backend.git) (built with Node.js, Express, and MongoDB)
- **Authentication**: JWT (JSON Web Tokens) for secure login and signup.

## Installation

To run the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Amansingh0369/Transaction-App-Frontend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Transaction-App-Frontend
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
   The app will run on `http://localhost:3000`.

## Project Structure

```bash
├── public
│   └── index.html           # Main HTML file
├── src
│   ├── assets               # Directory for storing images and other static files
│   ├── components           # Reusable React components
│   ├── pages                # Directory for page-specific components
│   │   ├── Login.jsx        # Login page component
│   │   ├── Signup.jsx       # Signup page component
│   │   ├── Dashboard.jsx    # Dashboard page component for transaction management
│   │   ├── Send.jsx         # Send transaction page component
│   │   └── Landing.jsx      # Landing page component
│   ├── App.jsx              # Main App component
│   ├── App.css              # Main CSS file
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation

