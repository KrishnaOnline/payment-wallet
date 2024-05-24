import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Transfer from "./components/Transfer";

function App() {
    
	return (
		<div>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/transfer" element={<Transfer/>}/>
                </Routes>
            </BrowserRouter>
        </div>
	);
}

export default App;
