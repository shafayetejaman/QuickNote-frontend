import { Route, Routes } from "react-router"
import PrivateRoute from "./component/PrivateRoute.jsx"
import PublicRoute from "./component/PublicRoute.jsx"
import ActivationPending from "./pages/ActivationPending.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import Tmp from "./pages/Tmp.jsx"
import Register from "./pages/Register.jsx"
import requestHander from "./utils/requestHandler.js"
import { ping } from "./api/index.js"

export default function App() {
    // ping for cold starupt
    requestHander(ping)

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
