import { Routes, Route } from "react-router"
import PrivateRoute from "./component/PrivateRoute.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import ActivationPending from "./pages/ActivationPending.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import PublicRoute from "./component/PublicRoute.jsx"

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
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path="/register"
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                }
            />
            <Route
                path="/activation-pending"
                element={
                    <PublicRoute>
                        <ActivationPending />
                    </PublicRoute>
                }
            />
        </Routes>
    )
}
