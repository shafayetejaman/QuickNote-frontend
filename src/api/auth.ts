import type { ILoginPayload } from "../interface"
import apiClient from "../utils/apiClient"

export const loginUser = (data: ILoginPayload) => {
    return () => apiClient.post("/users/login", data)
}

export const registerUser = (data: FormData) => {
    return () => apiClient.post("/users/register", data, { timeout: 10000 })
}

export const getRefreshToken = (token: string) => {
    return apiClient.post("/users/get-refresh-token", token)
}
