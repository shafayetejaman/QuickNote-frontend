import axios from "axios"

function initAxios() {
    const env = import.meta.env
    const baseURL = env.VITE_LOCAL_BASE_BACKEND_URL | ""
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
            return error
        }
    )

    return axiosInstance
}

export default initAxios()
