import {Heading} from "./Heading.jsx";
import profile from "../assets/profile.gif"
import logo from "../assets/logo.png";

export  function NavBar({name}){
    return <div id="navbar" className="flex p-4 justify-between h-26 drop-shadow-lg bg-blue-500 bg-g text-white" >
        <div className="flex items-center">
            <div className="font-medium text-4xl">
                Transaction App
            </div>
        </div>
        <div className="flex m-2 items-center text-2xl">
            <div className="mx-2">Hello,</div>
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full">
                <span className="font-medium text-gray-600"><img
                    alt="Transaction App Logo"
                    src={profile}
                    className="h-10 w-auto lg:h-10 lg:w-auto"
                /></span>
            </div>
        </div>
    </div>
}