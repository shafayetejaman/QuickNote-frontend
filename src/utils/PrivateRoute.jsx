import { useLocation } from "react-router"

export default function PrivateRoute({ child }) {
    const locate = useLocation()
    const userId = localStorage.getItem("userId")

    if (userId) return { child }

    locate("/login")
}
