import { createContext, useState } from "react"
import { useNavigate } from "react-router"
import { LocalStorage } from "../utils"

const AuthContex = createContext({
    user: null,
    logout: () => {},
    login: () => {},
    register: () => {},
    token: null,
})

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(LocalStorage.get("user"))
    const [token, setToken] = useState(LocalStorage.get("token"))
    const navigate = useNavigate()

    const login = (res) => {
        LocalStorage.set("token", {
            accessToken: res.data.accessToken,
            refreshToken: res.data.refreshToken,
        })
        LocalStorage.set("user", res.data.user)
        setToken(LocalStorage.get("token"))
        setUser(LocalStorage.get("user"))

        navigate("/home", { replace: true })
    }
    const logout = () => {
        LocalStorage.clear()
        setUser(null)
        setToken(null)

        navigate("/login", { replace: true })
    }
    const register = (res) => {
        LocalStorage.set("user", res.data)
        setUser(LocalStorage.get("user"))

        navigate("/activation-pending", { replace: true })
    }

    return (
        <AuthContex.Provider value={{ user, logout, register, login, token }}>
            {children}
        </AuthContex.Provider>
    )
}

export { AuthContex }
