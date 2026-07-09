import { Navigate } from "react-router"

export default function PrivateRoute({ children }) {
    const userId = localStorage.getItem("userId")
    if (userId) return children

    return <Navigate to="/login" replace></Navigate>
}
