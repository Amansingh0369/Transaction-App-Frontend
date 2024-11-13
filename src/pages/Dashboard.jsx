import { Heading } from "../components/Heading.jsx";
import { SubHeading } from "../components/SubHeading.jsx";
import { NavBar } from "../components/NavBar.jsx";
import { InputBox } from "../components/InputBox.jsx";
import { Button } from "../components/Button.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import walletIcon from "../assets/wallet.png";

const Dashboard = () => {
    const [users, setUser] = useState([]);
    const [filter, setFilter] = useState("");
    const [searchParam] = useSearchParams();
    const name = searchParam.get("email");
    const [balance, setBalance] = useState();
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`);
                setUser(response.data.users);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        fetchUsers();
    }, [filter]);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    async function handelBalance() {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                headers: {
                    authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setBalance(response.data.balance);
        } catch (error) {
            console.error("Error fetching balance:", error);
        }
    }
    handelBalance();

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <NavBar name={name} />
            <div className="p-4 sm:p-6 w-full sm:max-w-8xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <div className="text-xl sm:text-4xl font-bold mb-4 sm:mb-0">
                        <span>Balance: </span>
                        <span className="text-green-500 dark:text-green-400">${Math.floor(balance)}</span>
                    </div>
                    <button
                        onClick={handelBalance}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 sm:px-6 rounded-lg sm:rounded-3xl w-full sm:w-auto text-center"
                    >
                        Check Balance
                    </button>
                </div>

                <div className="mb-2 mt-10">
                    <input
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full px-4 py-2 border rounded-2xl dark:border-gray-600 dark:bg-gray-800"
                        type="text"
                        placeholder="search users . . ."
                    />
                </div>
                <div>
                    {users.map((user) => (
                        <User key={user._id} user={user} />
                    ))}
                </div>
            </div>
        </div>

    );
};

function User({ user }) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center py-2 sm:py-4 px-0 sm:px-6 border-b dark:border-gray-700">
            {/* User Details */}
            <div className="flex items-center space-x-3">
                {/* User Icon */}
                <div className="flex items-center justify-center rounded-full h-9 w-9 sm:h-12 sm:w-12 bg-indigo-100 dark:bg-indigo-500 text-indigo-700 dark:text-white font-bold text-base sm:text-xl">
                    {user.name[0].toUpperCase()}
                </div>

                {/* User Name and Email */}
                <div className="text-left">
                    <div className="text-md sm:text-lg font-semibold">
                        {user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase()}
                    </div>
                    <div className="text-xs md:text-base text-gray-600 dark:text-gray-400 break-all">{user.email.toLowerCase()}</div>
                </div>
            </div>

            {/* Send Money Button */}
            <div className=" py-2 sm:pt-4 ">
                <button
                    onClick={() => navigate(`/send?id=${user._id}&name=${user.name}`)}
                    type="button"
                    className="bg-slate-700 hover:bg-indigo-500 dark:bg-gray-700 dark:hover:bg-indigo-600 focus:outline-none font-medium text-white rounded-md text-xs sm:text-sm w-auto px-3 sm:px-4 py-1.5 sm:py-2 mb-2 mt-4"
                >
                    Send <span className="hidden sm:inline">Money</span>
                </button>
            </div>


        </div>
    );
}


export default Dashboard;
