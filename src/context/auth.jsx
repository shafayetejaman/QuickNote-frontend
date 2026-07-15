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

    const login = (data) => {
        LocalStorage.set("token", {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
        })
        LocalStorage.set("user", data.user)
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
    const register = (data) => {
        LocalStorage.set("user", data)
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
