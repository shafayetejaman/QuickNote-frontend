import axiosInstance from "./axiosInstance.js"

const loginUser = (data) => {
    return axiosInstance.post("/users/login", data)
}

const registerUser = (formData) => {
    return axiosInstance.post("/users/register", formData)
}

const getRefreshToken = (token) => {
    return axiosInstance.post("/users/get-refresh-token", token)
}

export { loginUser, registerUser, getRefreshToken }
