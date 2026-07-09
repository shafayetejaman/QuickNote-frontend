import { redirect } from "react-router"

export default function PrivateRoute({ child }) {
    const userId = localStorage.getItem("userId")

    if (userId) return { child }

    redirect("/login")
}
