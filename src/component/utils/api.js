import axios from "axios"

function initAxios() {
    const env = import.meta.env
    const baseURL = env.VITE_LOCAL_BASE_BACKEND_URL | ""
    const axiosInstance = axios.create({
        baseURL,
        timeout: 5000,
    })

    if (baseURL === "") {
        throw Error("env not found")
    }

    axiosInstance.interceptors.request.use((config) => {
        // Do something before request is sent
        const token = localStorage.getItem("token")
            ? localStorage.getItem("token")
            : null
        if (!token) {
            axios.get(`${baseURL}/api/v1/users/get-refresh-token`, {})
        }

        config.headers.Authorization = token
        return config
    })

    return axiosInstance
}

export const api = initAxios()
