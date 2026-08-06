import axios from "axios"

export const ping = () => {
    return () => axios.get(import.meta.env.VITE_BACKEND_URL, { timeout: 10000 })
}
