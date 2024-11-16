// import './App.css';
// import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, Suspense } from 'react';
import Loading  from "../src/components/Loading.jsx"

// Lazy load pages for better performance
const Landing = React.lazy(() => import('./pages/Landing.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.jsx'));
const Send = React.lazy(() => import('./pages/Send.jsx'));
const Signup = React.lazy(() => import('./pages/Signup.jsx'));

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (e.g., fetch data or setup tasks)
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/send" element={<Send />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
