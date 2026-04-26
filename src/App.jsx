import { Routes, Route } from "react-router"

import Home from "./component/Home.jsx"
import Login from "./component/Login.jsx"
import Register from "./component/Register.jsx"

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}
