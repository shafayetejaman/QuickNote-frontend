import apiClient from "../utils/apiClient.js"

export const loginUser = (data) => {
    return () => apiClient.post("/users/login", data)
}

export const registerUser = (data) => {
    return () => apiClient.post("/users/register", data, { timeout: 10000 })
}

export const getRefreshToken = (token) => {
    return apiClient.post("/users/get-refresh-token", token)
}
