import { Route, Routes } from "react-router"
import PrivateRoute from "./component/PrivateRoute"
import PublicRoute from "./component/PublicRoute"
import ActivationPending from "./pages/ActivationPending"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFoundPage from "./pages/NotFoundPage"
import Tmp from "./pages/Tmp"
import Register from "./pages/Register"
import requestHandler from "./utils/requestHandler"
import { ping } from "./api/index"

export default function App() {
    // ping for cold starupt
    requestHandler(ping())

    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            {/* TODO: make sure to remove in production only for styleing pages */}
            <Route path="/tmp" element={<Tmp />} />
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
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
