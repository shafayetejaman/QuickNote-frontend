import { createContext, useState } from "react"
import { useNavigate } from "react-router"
import type {
    IAuthContextValue,
    ILoginResponseData,
    IRegisterResponseData,
    IToken,
    IUser,
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
    const [user, setUser] = useState(LocalStorage.get("user") as IUser | null)
    const [token, setToken] = useState(
        LocalStorage.get("token") as IToken | null
    )
    const navigate = useNavigate()

    const login = (data: ILoginResponseData) => {
        LocalStorage.set("token", {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
        })
        LocalStorage.set("user", data.user)
        setToken(LocalStorage.get("token") as IToken | null)
        setUser(LocalStorage.get("user") as IUser | null)

        navigate("/", { replace: true })
    }
    const logout = () => {
        LocalStorage.clear()
        setUser(null)
        setToken(null)

        navigate("/login", { replace: true })
    }
    const register = (data: IRegisterResponseData) => {
        LocalStorage.set("user", data.user)
        setUser(LocalStorage.get("user") as IUser | null)

        navigate("/activation-pending", { replace: true })
    }

    return (
        <AuthContext.Provider value={{ user, logout, register, login, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }
