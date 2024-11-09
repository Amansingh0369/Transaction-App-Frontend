import { Heading } from "../components/Heading.jsx";
import { SubHeading } from "../components/SubHeading.jsx";
import { InputBox } from "../components/InputBox.jsx";
import { Button } from "../components/Button.jsx";
import { useState } from "react";
import { ButtomWarning } from "../components/ButtomWarning.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function onclick() {
        try {
            if (!fullName || !email || !password) {
                return alert("Fill all the required fields");
            }
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                name: fullName,
                email,
                password
            });
            if (response.status === 200) {
                localStorage.setItem("token", await response.data.token);
                alert(response.data.msg);
                navigate("/dashboard");
            }
        } catch (e) {
            if (e.response && e.response.status === 401) {
                alert(e.response.data.msg);
            } else {
                alert("An error occurred during signup.");
            }
            console.log(e);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-purple-700 px-4">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white rounded-3xl md:h-4/5  shadow-lg p-4 md:p-8 flex flex-col items-center">
                <div className="text-center mb-0 w-full">
                    <Heading label={"Sign Up"} />
                    <SubHeading label={"Enter your information to create an account"} />
                </div>

                <div className="w-full">
                    <InputBox
                        onChange={(e) => setFullName(e.target.value)}
                        label={"Full Name"}
                        placeholder={"Aman Singh"}
                        type={"text"}
                    />
                    <InputBox
                        onChange={(e) => setEmail(e.target.value)}
                        label={"Email"}
                        placeholder={"example@gmail.com"}
                        type={"email"}
                    />
                    <InputBox
                        onChange={(e) => setPassword(e.target.value)}
                        label={"Password"}
                        placeholder={"Password"}
                        type={"password"}
                    />

                    <Button label={"Sign Up"} onClick={onclick} className="w-full mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 ease-in-out" />

                </div>
                <ButtomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/login"} className="text-gray-500" />
            </div>
        </div>
    );
};

export default Signup;
