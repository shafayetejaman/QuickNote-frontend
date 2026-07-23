import { createContext, useState } from "react"
import { useNavigate } from "react-router"
import type {
    IAuthContextValue,
    ILoginResponseData,
    IRegisterResponseData,
} from "../interface"
import { LocalStorage } from "../utils"

const AuthContext = createContext<IAuthContextValue>({
    user: null,
    logout: () => {},
    login: () => {},
    register: () => {},
    token: null,
})

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [user, setUser] = useState(LocalStorage.get("user"))
    const [token, setToken] = useState(LocalStorage.get("token"))
    const navigate = useNavigate()

    const login = (data: ILoginResponseData) => {
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
    const register = (data: IRegisterResponseData) => {
        LocalStorage.set("user", data.user)
        setUser(LocalStorage.get("user"))

        navigate("/activation-pending", { replace: true })
    }

    return (
        <AuthContext.Provider value={{ user, logout, register, login, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }
