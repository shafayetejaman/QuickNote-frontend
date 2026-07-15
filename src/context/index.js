import { useContext } from "react"
import { AuthContex } from "./auth"

// hook for auth related operation
export const useAuth = () => useContext(AuthContex)
