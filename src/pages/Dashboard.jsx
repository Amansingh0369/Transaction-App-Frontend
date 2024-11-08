import {Heading} from "../components/Heading.jsx";
import {SubHeading} from "../components/SubHeading.jsx";
import {NavBar} from "../components/NavBar.jsx";
import {InputBox} from "../components/InputBox.jsx";
import {Button} from "../components/Button.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useSearchParams} from "react-router-dom";

const Dashboard = () =>{
    const [users, setUser] = useState([]);
    const [filter, setFilter] = useState("");
    const [searchParam] = useSearchParams();
    const name = searchParam.get("email");
    const [balance,setBalance] = useState();

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


    return <div className="w-screen h-screen">
        <div>
            <NavBar name = {name}/>
            <div className="flex m-8 justify-between">
                <div className="flex font-bold text-4xl">
                    <div>
                        Balance
                    </div>
                    <div className="px-4">
                        ₹ {Math.floor(balance)}
                    </div>
                </div>
                <div>
                    <button onClick={handelBalance} className="bg-green-600 text-white w-36 h-10 rounded-2xl">
                        Check balance
                    </button>
                </div>
            </div>
            <div className="mx-10">
                <div className="font-bold mt-6 text-lg">Users</div>
                <div className="my-2">
                    <input
                        onChange={(e) => {
                            setFilter(e.target.value);
                        }}
                        className="outline-1 w-full px-2 py-1 border rounded border-slate-200"
                        type="text"
                        placeholder="Search users.."
                    />
                </div>
                <div>
                    {users.map((user) => (
                        <User key={user._id} user={user} />
                    ))}
                </div>
            </div>
        </div>
    </div>
}

function User({ user }) {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">{user.name[0]}</div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>{user.name}</div>
                </div>
            </div>
            <div>
                <Button onClick={(e)=>{
                    navigate("/send?id="+user._id + "&name=" + user.name)
                }} label={"Send Money"} />
            </div>
        </div>
    );
}
export default Dashboard