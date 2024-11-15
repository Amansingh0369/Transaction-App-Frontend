import { Heading } from "../components/Heading.jsx";
import { SubHeading } from "../components/SubHeading.jsx";
import { InputBox } from "../components/InputBox.jsx";
import { Button } from "../components/Button.jsx";
import { useState } from "react";
import { ButtomWarning } from "../components/ButtomWarning.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signupGif from "../assets/signup.gif";

const Signup = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alerts, setAlerts] = useState([]);
    const navigate = useNavigate();

    const addAlert = (message, type) => {
        const id = Date.now();
        setAlerts((prevAlerts) => [...prevAlerts, { id, message, type }]);
        setTimeout(() => {
            setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
        }, 3000);
    };

    async function onclick() {
        try {
            if (!fullName || !email || !password) {
                return addAlert("Fill all the required fields", "warning");
            }
            if (password.length < 7) {
                return addAlert("Password should be at least 7 characters", "warning");
            }

            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                name: fullName,
                email,
                password,
            });

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                addAlert(response.data.msg, "success");
                navigate("/dashboard");
            }
        } catch (e) {
            if (e.response && e.response.data && e.response.data.msg) {
                addAlert(e.response.data.msg, "error");
            } else {
                addAlert("An error occurred during signup.", "error");
            }
            console.log(e);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen px-4 relative">
            <div className="fixed top-4 right-4 space-y-2 z-50">
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className={`flex items-center p-3 text-sm text-white rounded-md ${
                            alert.type === "success"
                                ? "bg-green-600"
                                : alert.type === "error"
                                    ? "bg-red-600"
                                    : "bg-orange-600"
                        }`}
                    >
                        {alert.message}
                        <button
                            onClick={() =>
                                setAlerts((prevAlerts) => prevAlerts.filter((a) => a.id !== alert.id))
                            }
                            className="ml-2 w-6 h-6 flex items-center justify-center text-white rounded-full hover:bg-white/10"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

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

            <div className="w-full sm:w-3/4 md:w-4/5 lg:w-11/12 bg-white rounded-3xl sm:shadow-lg p-4 md:p-12 lg:p-16 transform transition-all duration-500 ease-in-out flex flex-col md:flex-row">
                <div className="hidden md:block md:w-1/2 lg:w-1/3 flex justify-center items-center pb-8 mx-44">
                    <img
                        src={signupGif}
                        alt="Decorative"
                        className="object-cover w-full h-full rounded-3xl"
                    />
                </div>
                <div className="p-0 flex-1 md:w-1/2 lg:w-1/3">
                    <div className="text-center w-full mb-6">
                        <Heading label={"Sign Up"} />
                        <SubHeading label={"Enter your information to create an account"} />
                    </div>

                    <InputBox
                        onChange={(e) => setFullName(e.target.value)}
                        label={"Full Name"}
                        placeholder={"Aman Singh"}
                        type={"text"}
                        className="mb-4"
                    />
                    <InputBox
                        onChange={(e) => setEmail(e.target.value)}
                        label={"Email"}
                        placeholder={"example@gmail.com"}
                        type={"email"}
                        className="mb-4"
                    />
                    <InputBox
                        onChange={(e) => setPassword(e.target.value)}
                        label={"Password"}
                        placeholder={"Password"}
                        type={"password"}
                        className="mb-6"
                    />

                    <div className="pt-4">
                        <Button
                            label={"Sign Up"}
                            onClick={onclick}
                            className="w-full mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                        />
                    </div>

                    <ButtomWarning
                        label={"Already have an account?"}
                        buttonText={"Sign in"}
                        to={"/login"}
                        className="text-gray-500"
                    />
                </div>
            </div>

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

export default Signup;
