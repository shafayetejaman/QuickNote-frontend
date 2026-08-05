import { Route } from "react-router"
import Home from "../pages/Home"

export default function HomeRoute() {
    return (
        <Route path="/" element={<Home />}>
            {/* TODO: add the show all document compnent */}
            <Route index></Route>
        </Route>
    )
}
