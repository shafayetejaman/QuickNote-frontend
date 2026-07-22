import { Navigate } from "react-router"
import { useAuth } from "../context"
import type { IRouteProps } from "../interface"

export default function PrivateRoute({ children }: IRouteProps) {
    const { user, token } = useAuth()

    if (user && token) return children

    return <Navigate to="/login" replace></Navigate>
}
