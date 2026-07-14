import { Routes, Route } from "react-router"

import AnonymusRoute from "./component/AnonymusRoute.jsx"
import PrivateRoute from "./component/PrivateRoute.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import ActivationPending from "./pages/ActivationPending.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"

export default function App() {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
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
            <Route
                path="/activation-pending"
                element={
                    <AnonymusRoute>
                        <ActivationPending />
                    </AnonymusRoute>
                }
            />
        </Routes>
    )
}
