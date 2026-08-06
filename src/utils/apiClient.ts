import type { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios"
import axios from "axios"
import { redirect } from "react-router"
import { getRefreshToken } from "../api/auth"
import type { IToken } from "../interface"
import { LocalStorage } from "../utils"

function initAxios() {
    const env = import.meta.env
    const baseURL = `${env.VITE_BACKEND_URL}/api/v1` || ""
    const axiosInstance = axios.create({
        baseURL,
        timeout: 8000,
        withCredentials: true,
    })

    if (baseURL === "") {
        throw Error("env not found")
    }

    // add bearer token before every request
    axiosInstance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token = LocalStorage.get("token") as IToken | null
            config.headers.Authorization = `Bearer ${token?.accessToken}`

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
            const originalRequest =
                error.config as InternalAxiosRequestConfig & {
                    _retry?: boolean
                }

            // haven not retried and unothorized response
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true

                const token = LocalStorage.get("token") as IToken | null
                if (!token?.refreshToken) throw redirect("/login")

                try {
                    const newResponse = await getRefreshToken(
                        token.refreshToken
                    )
                    const { newAccessToken, newRefreshToken } = newResponse.data

                    LocalStorage.set("token", {
                        accessToken: newAccessToken,
                        refreshToken: newRefreshToken,
                    })
                } catch (newError) {
                    console.log(newError)
                    throw redirect("/login")
                }
                // resending old request
                axiosInstance(originalRequest as AxiosRequestConfig)
            }
            return Promise.reject(error)
        }
    )

    return axiosInstance
}

export default initAxios()
