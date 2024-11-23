import { Heading } from "../components/Heading.jsx";
import { SubHeading } from "../components/SubHeading.jsx";
import { InputBox } from "../components/InputBox.jsx";
import { Button } from "../components/Button.jsx";
import { ButtomWarning } from "../components/ButtomWarning.jsx";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logingif from "../assets/login.gif";
import Loading from "../components/Loading.jsx"; // Import your loading component

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const addAlert = (message, type) => {
        const id = Date.now();
        setAlerts((prevAlerts) => [...prevAlerts, { id, message, type }]);
        setTimeout(() => {
            setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
        }, 5000);
    };

    async function handleSubmit() {
        if (!email || !password) {
            return addAlert("Fill all required fields", "warning");
        }

        setLoading(true); // Start loading

        try {
            const response = await axios.post("https://transaction-app-backend-eny5.onrender.com/api/v1/user/login", { email, password });

            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                addAlert(response.data.msg, "success");
                navigate("/dashboard");
            }
        } catch (e) {
            if (e.response?.data?.msg) {
                addAlert(e.response.data.msg, "error");
            } else {
                addAlert("An error occurred during login.", "error");
            }
            console.log(e);
        } finally {
            setLoading(false); // Stop loading
        }
    }

    return (
        <div className="flex justify-center items-center h-screen w-screen px-4 relative">
            {/* Alerts */}

            <div className="fixed top-4 right-4 space-y-2 z-50 animate-fadeInScale transition ease-in-out duration-300">
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className={`flex items-center p-3 text-sm text-white rounded-md ${
                            alert.type === "success" ? "bg-green-600" : alert.type === "error" ? "bg-red-600" : "bg-orange-600"
                        }`}
                    >
                        {alert.message}
                        <button
                            onClick={() => setAlerts((prevAlerts) => prevAlerts.filter((a) => a.id !== alert.id))}
                            className="ml-2 w-6 h-6 flex items-center justify-center text-white rounded-full hover:bg-white/10"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            {/* Full-Page Loading Spinner */}
            {loading ? (
                <div className="fixed inset-0 z-60 w-screen h-screen flex items-center justify-center bg-white">
                    <Loading />
                </div>
            ) : (
                <>
                    <div className="hidden sm:block absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div
                            style={{
                                clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>

                    <div className="w-full sm:w-3/4 md:w-4/5 lg:w-11/12 bg-white rounded-3xl sm:shadow-lg p-4 md:p-12 lg:p-16 flex flex-col md:flex-row">
                        <div className="hidden md:block md:w-1/2 lg:w-/3 flex justify-center items-center pb-10 px-20 mx-20">
                            <img src={logingif} alt="Decorative" className="object-cover w-full h-full rounded-3xl" loading="lazy" rel="preload" />
                        </div>
                        <div className="p-0 flex-1 md:w-1/2 lg:w-1/3">
                            <div className="text-center w-full mb-6">
                                <Heading label={"Login"} />
                                <SubHeading label={"Enter your credentials to access your account"} />
                            </div>

                            <InputBox onChange={(e) => setEmail(e.target.value)} label={"Email"} placeholder={"example@gmail.com"} type={"text"} />
                            <InputBox onChange={(e) => setPassword(e.target.value)} label={"Password"} placeholder={"password"} type={"password"} />

                            <div className="pt-4">
                                <Button label={"Login"} onClick={handleSubmit} className="w-full mb-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-md" />
                            </div>

                            <ButtomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Login;
