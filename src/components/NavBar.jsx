import profile from "../assets/profile.gif";
import logo from "../assets/logo.png";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import walletIcon from "../assets/wallet.png";
import { useNavigate } from "react-router-dom";

export function NavBar({ name }) {
    const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
    const navigate = useNavigate()

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className="flex items-center justify-between p-4 sm:p-6 drop-shadow-lg bg-white dark:bg-indigo-600 text-gray-800 dark:text-white">

            <div className="flex items-center space-x-2 cursor-pointer">
                <img src={darkMode ? walletIcon : logo} alt="Transaction App Logo" className="h-6 w-auto sm:h-10" />
                <div className="text-xl sm:text-3xl font-semibold">Transaction App</div>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6">
                <button onClick={() => setDarkMode(!darkMode)} className="text-gray-900 dark:text-gray-300 p-2">
                    {darkMode ? <SunIcon className="h-5 w-5 sm:h-6 sm:w-6" /> : <MoonIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
                </button>
                <div className="flex">
                    <div className="hidden sm:block text-center align-middle pt-2 p-2">
                        {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
                    </div>

                    <div className="relative inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 overflow-hidden bg-gray-200 dark:bg-gray-700 rounded-full">
                        <img src={profile} alt="User Profile" className="w-full h-full object-cover rounded-full" />
                    </div>
                </div>
            </div>

        </div>
    );
}
