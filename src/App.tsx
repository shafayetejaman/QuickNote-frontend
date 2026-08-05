import { Route, Routes } from "react-router"
import { ping } from "./api/index"
import ActivationPending from "./pages/ActivationPending"
import Login from "./pages/Login"
import NotFoundPage from "./pages/NotFoundPage"
import Register from "./pages/Register"
import HomeRoute from "./routes/HomeRoute"
import PrivateRoute from "./routes/PrivateRoute"
import PublicRoute from "./routes/PublicRoute"
import requestHandler from "./utils/requestHandler"

export default function App() {
    // ping for cold starup
    requestHandler(ping())

    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route
                path="/*"
                element={
                    <PrivateRoute>
                        <HomeRoute />
                    </PrivateRoute>
                }
            />
            {/* public routes */}
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
