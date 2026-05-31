import { Routes, Route } from "react-router"

import Home from "./component/home/Home.jsx"
import Login from "./component/auth/Login.jsx"
import Register from "./component/auth/Register.jsx"

export default function App() {
    return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}
