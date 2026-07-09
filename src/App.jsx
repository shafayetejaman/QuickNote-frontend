import { Routes, Route } from "react-router"

import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import AnonymusRoute from "./utils/AnonymusRoute.jsx"
import PrivateRoute from "./utils/PrivateRoute.jsx"

export default function App() {
    return (
        <Routes>
            <Route
                path="/home"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route
                path="/login"
                element={
                    <AnonymusRoute>
                        <Login />
                    </AnonymusRoute>
                }
            />
            <Route
                path="/register"
                element={
                    <AnonymusRoute>
                        <Register />
                    </AnonymusRoute>
                }
            />
        </Routes>
    )
}
