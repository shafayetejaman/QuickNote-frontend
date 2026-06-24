import axios from "axios"

function initAxios() {
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
        return config
    })

    return axiosInstance
}

export default api = initAxios()
