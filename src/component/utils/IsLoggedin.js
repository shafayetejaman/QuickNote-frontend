import { useLocation } from "react-router"

export default function IsLoggedin({ child }) {
    const locate = useLocation()
    if (localStorage.getItem("userId")) return { child }
    locate("/login")
}
