import { Heading } from "../components/Heading.jsx";
import { SubHeading } from "../components/SubHeading.jsx";
import { InputBox } from "../components/InputBox.jsx";
import { Button } from "../components/Button.jsx";
import { ButtomWarning } from "../components/ButtomWarning.jsx";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit() {
        try {
            if (!email || !password) {
                return alert("Fill all required fields");
            }

            const response = await axios.post("http://localhost:3000/api/v1/user/login", {
                email,
                password,
            });

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                alert(response.data.msg);
                navigate("/dashboard");
            }
        } catch (e) {
            if (e.response && e.response.status === 401) {
                alert(e.response.data.msg);
            } else {
                alert("An error occurred during login.");
            }
            console.log(e);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-br from-purple-500 to-blue-700 px-4">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white rounded-3xl shadow-lg p-8 md:p-10 transform transition-all duration-500 ease-in-out hover:scale-105">
                <div className="text-center w-full mb-6 animate-fadeInUp">
                    <Heading label={"Login"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                </div>

                <InputBox
                    onChange={(e) => setEmail(e.target.value)}
                    label={"Email"}
                    placeholder={"example@gmail.com"}
                    type={"text"}
                    className="mb-4 animate-fadeIn delay-100"
                />
                <InputBox
                    onChange={(e) => setPassword(e.target.value)}
                    label={"Password"}
                    placeholder={"password"}
                    type={"password"}
                    className="mb-6 animate-fadeIn delay-200"
                />

                <Button
                    label={"Login"}
                    onClick={handleSubmit}
                    className="w-full mb-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn delay-300"
                />

                <ButtomWarning
                    label={"Don't have an account?"}
                    buttonText={"Sign up"}
                    to={"/signup"}
                    className="text-gray-500 animate-fadeIn delay-400"
                />
            </div>
        </div>
    );
};

export default Login;
