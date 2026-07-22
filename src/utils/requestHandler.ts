export default async function requestHandler<T>(
    api: () => Promise<{ data: T }>,
    setLoading?: (loading: boolean) => void,
    onSuccess?: (data: T) => void,
    onError?: (message: string) => void
): Promise<[T | null]> {
    let response: { data: T } | null = null

    try {
        if (setLoading) setLoading(true)
        response = await api()

        if (onSuccess) onSuccess(response.data)
    } catch (error: unknown) {
        if (onError) {
            const err = error as { response?: { data?: { message?: string } } }
            onError(err?.response?.data?.message || "Something went wrong")
        }
        console.error(error)
    } finally {
        if (setLoading) setLoading(false)
    }

    return [response?.data || null]
}
