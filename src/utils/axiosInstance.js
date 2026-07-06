import axios from "axios"

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
            if (error.response?.status === 401 && !originalRequest._retry) {
                // TODO: add refreshtoken request
            }
            return Promise.reject(error)
        }
    )

    return axiosInstance
}

export default initAxios()
