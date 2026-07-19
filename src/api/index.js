import apiClient from "../utils/apiClient.js"

export const ping = (data) => {
    return () => apiClient.post("/", data, { timeout: 10000 })
}
