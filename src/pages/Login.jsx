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
        <div className="flex justify-center items-center h-screen w-screen px-4">
            {/* Background Blur */}
            <div
                aria-hidden="true"
                className="hidden sm:block absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            {/* Main Container with Image and Login Box */}
            <div className="w-full sm:w-3/4 md:w-4/5 lg:w-11/12 bg-white rounded-3xl sm:shadow-lg p-8 md:p-12 lg:p-16 transform transition-all duration-500 ease-in-out flex flex-col md:flex-row">

                {/* Login Box */}
                <div className="flex-1 md:w-1/2 lg:w-1/3">
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
                        label={"Don't have an account ?"}
                        buttonText={"Sign up"}
                        to={"/signup"}
                        className="text-gray-500 animate-fadeIn delay-400"
                    />
                </div>

                {/* Image Section (hidden on small screens) */}
                <div className="hidden md:block md:w-1/2 lg:w-2/3 flex justify-center items-center p-4">
                    <img
                        src="your-image-url.jpg"
                        alt="Decorative"
                        className="object-cover w-full h-full rounded-3xl"
                    />
                </div>
            </div>

            {/* Bottom Background Blur */}
            <div
                aria-hidden="true"
                className="hidden sm:block absolute inset-x-0 top-[calc(100%-25rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    );
};

export default Login;
