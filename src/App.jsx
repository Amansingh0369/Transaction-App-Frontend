// import './index.css';
// import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Send from "./pages/Send.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Landing/>}/>
            <Route path={"/signup"} element={<Signup/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
            <Route path={"/send"} element={<Send/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
