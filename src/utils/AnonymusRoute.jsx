import { redirect } from "react-router"

export default function AnonymusRoute({ child }) {
    const userId = localStorage.getItem("userId")
    if (!userId) return { child }

    redirect("/home")
}
