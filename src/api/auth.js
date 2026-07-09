import apiClient from "../utils/apiClient.js"

const loginUser = (data) => {
    return () => apiClient.post("/users/login", data)
}

const registerUser = (data) => {
    return () => apiClient.post("/users/register", data)
}

const getRefreshToken = (token) => {
    return () => apiClient.post("/users/get-refresh-token", token)
}

export { loginUser, registerUser, getRefreshToken }
