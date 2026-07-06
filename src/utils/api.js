import axiosInstance from "./axiosInstance.js"

const loginUser = (data) => {
    return axiosInstance.post("/api/v1/users/login", data)
}

export { loginUser }
