import { useLocation } from "react-router"

export default function AnonymusRoute({ child }) {
    const locate = useLocation()
    const userId = localStorage.getItem("userId")

    if (!userId) return { child }

    locate("/home")
}
