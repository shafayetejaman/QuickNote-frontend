import apiClient from "../utils/apiClient"

export const ping = (data?: unknown) => {
    return () => apiClient.post("/", data, { timeout: 10000 })
}
