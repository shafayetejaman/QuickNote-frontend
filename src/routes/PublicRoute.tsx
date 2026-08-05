import { Navigate } from "react-router"
import { useAuth } from "../context"
import type { IRouteProps } from "../interface"

export default function PublicRoute({ children }: IRouteProps) {
    const { user, token } = useAuth()

    if (!user || !token) return children

    return <Navigate to="/home" replace></Navigate>
}
