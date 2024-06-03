import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Transfer from "./components/Transfer";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/OpenRoute";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Navbar />
                <div className="max-w-[1280px] mx-auto">
                    <Routes>
                        <Route path="/signup" element={
                            <PublicRoute>
                                <Signup />
                            </PublicRoute>
                        } />
                        <Route path="/" element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        } />
                        <Route path="/login" element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        } />
                        <Route path="/dashboard" element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        } />
                        <Route path="/transfer/:receiverID" element={
                            <PrivateRoute>
                                <Transfer />
                            </PrivateRoute>
                        } />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
            </BrowserRouter>
            <Toaster />
        </div>
    );
}

export default App;