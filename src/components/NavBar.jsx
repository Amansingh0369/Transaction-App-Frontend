import profile from "../assets/profile.gif";
import logo from "../assets/logo.png";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import walletIcon from "../assets/wallet.png"

export function NavBar({ name }) {
    const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'));

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className="flex items-center justify-between p-4 drop-shadow-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="flex items-center space-x-2">
                <img src={darkMode ? walletIcon : logo} alt="Transaction App Logo" className="h-10 w-auto" />
                <div className="text-3xl font-semibold">Transaction App</div>
            </div>
            <div className="flex items-center space-x-6">
                <button onClick={() => setDarkMode(!darkMode)} className="text-gray-900 dark:text-gray-300 p-2">
                    {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                </button>
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full">
                    <img src={profile} alt="User Profile" className="h-10 w-10 object-cover rounded-full" />
                </div>
            </div>
        </div>
    );
}
