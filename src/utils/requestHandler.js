export default async function requestHander(
    api,
    setLoading,
    onSuccess,
    onError
) {
    let response = null

    try {
        if (setLoading) setLoading(true)
        response = await api()

        if (onSuccess) onSuccess(response?.data)
    } catch (error) {
        if (onError) {
            onError(error?.response?.data?.message || "Something went wrong")
        }
        console.error(error)
    } finally {
        if (setLoading) setLoading(false)
    }

    return [response?.data || null]
}
