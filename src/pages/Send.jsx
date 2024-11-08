import { Heading } from "../components/Heading.jsx";
import { InputBox } from "../components/InputBox.jsx";
import axios from "axios";
import {useNavigate, useSearchParams} from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import {Button} from "../components/Button.jsx";
import {ButtomWarning} from "../components/ButtomWarning.jsx";

const Send = () => {
    const [searchParam] = useSearchParams();
    const name = searchParam.get("name");
    const id = searchParam.get("id");
    const [amount, setAmount] = useState();
    const [success, setSuccess] = useState(false); // Track success state
    const navigate = useNavigate()
    let email = useState();

    const handleTransfer = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: id,
                amount,
            }, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            email = response.data.email;
            if (response.data.msg === 'Transfer successful') {
                setSuccess(true); // Set success to true on successful transfer
            }
        } catch (error) {
            console.error("Error initiating transfer:", error.response?.data || error.message);
            alert(error.response?.data?.msg || "Transfer failed");
        }
    };

    return (
        <div
            className="bg-gradient-to-br from-blue-500 to-indigo-700 w-screen h-screen flex justify-center items-center px-6 sm:px-12">
            <div
                className="border shadow-2xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-2/3 bg-white rounded-3xl p-10 flex flex-col justify-between items-center transform transition-transform duration-300 hover:scale-105">
                {success ? (
                    <div
                        className="flex flex-col items-center text-green-500 h-full justify-center space-y-4 animate-fade-in">
                        <FaCheckCircle className="text-7xl mb-2 animate-bounce"/>
                        <div className="text-3xl font-bold">Payment Successful</div>
                        <p className="text-gray-600 text-center mt-2 px-6">
                            Your payment has been processed successfully. Thank you for your transaction!
                        </p>
                        <ButtomWarning to={"/dashboard"} buttonText={"send again ?"}/>
                    </div>
                ) : (
                    <>
                        <div className="w-full text-center">
                            <Heading label={"Send Money"}/>
                        </div>

                        <div className="w-full">
                            <div className="flex items-center mb-0 space-x-4">
                                <div
                                    className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-green-400 to-blue-300 rounded-full shadow-lg animate-pulse">
                                    <span className="font-semibold text-3xl text-white">{name[0].toUpperCase()}</span>
                                </div>
                                <div className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide">
                                    {name.toUpperCase()}
                                </div>
                            </div>

                            <InputBox
                                onChange={(e) => setAmount(Number(e.target.value) || 0)}
                                label={"Amount (in Rs)"}
                                placeholder={"Enter Amount"}
                                className="mb-2 w-full"
                            />
                        </div>

                        <div className=" w-full">
                            <button
                                onClick={handleTransfer}
                                className="bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold rounded-2xl w-full h-12 shadow-lg transition-all duration-300 hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-400 hover:shadow-2xl"
                            >
                                Initiate Transfer
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
export default Send