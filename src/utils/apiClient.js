import axios from "axios"
import { getRefreshToken } from "../api/auth"
import { redirect } from "react-router"

function initAxios() {
    const env = import.meta.env
    const baseURL = env.VITE_LOCAL_BASE_BACKEND_URL + "/api/v1" || ""
    const axiosInstance = axios.create({
        baseURL,
        timeout: 5000,
        withCredentials: true,
    })

    if (baseURL === "") {
        throw Error("env not found")
    }

    // add bearer token before every request
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("accessToken")
            config.headers.Authorization = `Bearer ${token}`

            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    // On unothorized response
    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config

            // haven not retried and unothorized response
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true

                const refreshToken = localStorage.getItem("refreshToken")
                if (!refreshToken) throw redirect("/login")

                try {
                    const newResponse = await getRefreshToken(refreshToken)
                    const { newAccessToken, newRefreshToken } = newResponse.body

                    localStorage.setItem("accessToken", newAccessToken)
                    localStorage.setItem("refreshToken", newRefreshToken)
                } catch (newError) {
                    console.log(newError)
                    throw redirect("/login")
                }
                // resending old request
                axiosInstance(originalRequest)
            }
            return Promise.reject(error)
        }
    )

    return axiosInstance
}

export default initAxios()
