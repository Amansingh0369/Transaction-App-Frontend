import { Heading } from "../components/Heading.jsx";
import { SubHeading } from "../components/SubHeading.jsx";
import { NavBar } from "../components/NavBar.jsx";
import { InputBox } from "../components/InputBox.jsx";
import { Button } from "../components/Button.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import walletIcon from "../assets/wallet.png"

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
    handelBalance()

    return (
        <div className="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <NavBar name={name} />
            <div className="p-8  mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <div className="text-4xl font-bold">
                        <span>Balance: </span>
                        <span className="text-green-500 dark:text-green-500">$ {Math.floor(balance)}</span>
                    </div>
                    <button onClick={handelBalance} className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-6 rounded-3xl">
                        Check Balance
                    </button>
                </div>
                <div className="font-bold text-lg mb-2">Users</div>
                <div className="mb-4">
                    <input
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full px-4 py-2 border rounded dark:border-gray-600 dark:bg-gray-800"
                        type="text"
                        placeholder="Search users..."
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
}

function User({ user }) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center py-4 px-6 border-b dark:border-gray-700">
            <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center rounded-full h-12 w-12 bg-indigo-100 dark:bg-indigo-500 text-indigo-700 dark:text-white font-bold text-xl">
                    {user.name[0].toUpperCase()}
                </div>
                <div>
                    <div className="text-lg font-semibold">
                        {user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase()}
                    </div>
                    <div className="text-sm">
                        {user.email}
                    </div>
                </div>
            </div>
            <Button onClick={() => navigate(`/send?id=${user._id}&name=${user.name}`)} label="Send Money" />
        </div>
    );
}

export default Dashboard;
