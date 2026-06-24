import axios from "axios"

function initAxios() {
    const axiosInstance = null
    const baseUrl = env.VITE_LOCAL_BASE_BACKEND_URL | ""

    if (bseeUrl === "") {
        throw Error("env not found")
    }

    return axiosInstance
}

export default api = initAxios()
