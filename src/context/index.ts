import { useContext } from "react"
import { AuthContext } from "./auth"

// hook for auth related operation
export const useAuth = () => useContext(AuthContext)
