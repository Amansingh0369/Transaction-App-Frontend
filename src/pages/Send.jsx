import { Heading } from "../components/Heading.jsx";
import { InputBox } from "../components/InputBox.jsx";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ButtomWarning } from "../components/ButtomWarning.jsx";
import moneyGif from "../assets/savings.gif";
import {Button} from "../components/Button.jsx"

const Send = () => {
    const [searchParam] = useSearchParams();
    const name = searchParam.get("name");
    const id = searchParam.get("id");
    const [amount, setAmount] = useState();
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

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
            if (response.data.msg === 'Transfer successful') {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 3 * 1000);
            }
        } catch (error) {
            console.error("Error initiating transfer:", error.response?.data || error.message);
            alert(error.response?.data?.msg || "Transfer failed");
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center px-6 sm:px-12">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white rounded-3xl p-4 sm:px-10 sm:py-4 flex flex-col justify-between items-center sm:shadow-2xl">
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

                {success ? (
                    <div className="flex flex-col items-center h-full justify-center space-y-12 my-20 sm:mt-0 animate-bounceInOnce">
                        {/* Check Icon with Slow Bounce */}
                        <FaCheckCircle className="text-green-500 text-7xl mt-20 mb-10 animate-bounceSloww" />

                        {/* Success Message */}
                        <div className="text-4xl font-bold text-center text-green-600">
                            Payment Successful
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-center px-2.5 text-xs sm:text-sm">
                            Your payment has been processed successfully. Thank you for your transaction!
                        </p>
                    </div>

                ) : (
                    <>
                        <div className="w-full text-center">
                            <Heading label={"Send Money"} />
                            <div className="text-sm">Powered by transaction app</div>
                        </div>

                        {/* Image section with responsive design */}
                        <div className="w-full flex justify-center">
                            <img
                                src={moneyGif}
                                alt="Decorative"
                                className="object-cover w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl"
                            />
                        </div>

                        <div className="w-full mt-16 sm:mt-20">
                            <div className="flex items-center mb-4 space-x-4">
                                <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-indigo-400 to-pink-300 rounded-full shadow-lg ">
                                    <span className="font-semibold text-3xl text-white">{name[0].toUpperCase()}</span>
                                </div>
                                <div className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide">
                                    {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
                                </div>
                            </div>

                            <InputBox
                                onChange={(e) => setAmount(Number(e.target.value) || 0)}
                                label={"Amount (in Rs)"}
                                placeholder={"Enter Amount"}
                                className="mb-2 w-full"
                            />

                            <div className="w-full items-center">
                                <Button label={"Initiate Transfer"} onClick={handleTransfer} />
                            </div>

                        </div>
                    </>
                )}
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
        </div>
    );
};

export default Send;
