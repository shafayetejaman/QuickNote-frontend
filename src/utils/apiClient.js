import axios from "axios"
import { getRefreshToken } from "../api/auth"

function initAxios() {
    const env = import.meta.env
    const baseURL = (env.VITE_LOCAL_BASE_BACKEND_URL + "/api/v1") | ""
    const axiosInstance = axios.create({
        baseURL,
        timeout: 5000,
        withCredentials: true,
    })

    if (baseURL === "") {
        throw Error("env not found")
    }

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            const originalRequest = error.config
            if (error.response?.status === 401 && !originalRequest._retry) {
                // TODO: add refreshtoken request
                originalRequest._retry = true
                const refreshtoken = localStorage.getItem("token")
                try {
                    const newResponse = getRefreshToken(refreshtoken)
                } catch (newError) {}
            }
            return Promise.reject(error)
        }
    )

    return axiosInstance
}

export default initAxios()
