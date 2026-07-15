import { Navigate } from "react-router"
import { useAuth } from "../context"

export default function AnonymusRoute({ children }) {
    const { user, token } = useAuth()

    if (!user || !token) return children

    return <Navigate to="/home" replace></Navigate>
}
