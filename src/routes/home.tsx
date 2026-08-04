import { Home } from "lucide-react"
import { Route } from "react-router"

export default function HomeRouter() {
    return <Route path="/" element={<Home />}></Route>
}
