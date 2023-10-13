"use client"
import Header from "@/app/header";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login";
import Signup from "../pages/register";
import HomePage from "../pages/homePage";


const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;