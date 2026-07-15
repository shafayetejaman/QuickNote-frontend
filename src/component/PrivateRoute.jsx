import { Navigate } from "react-router"
import { useAuth } from "../context"

export default function PrivateRoute({ children }) {
    const { user, token } = useAuth()

    if (user && token) return children

    return <Navigate to="/login" replace></Navigate>
}
