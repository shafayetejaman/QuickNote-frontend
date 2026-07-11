import { Navigate } from "react-router"

export default function AnonymusRoute({ children }) {
    const userId = localStorage.getItem("userId")
    if (!userId) return children

    return <Navigate to="/home" replace></Navigate>
}
