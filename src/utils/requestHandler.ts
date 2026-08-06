export default async function requestHandler(
    api: () => Promise<{ data: { data: unknown } }>,
    setLoading?: (loading: boolean) => void,
    onSuccess?: (data: unknown) => void,
    onError?: (message: string) => void
): Promise<[unknown | null]> {
    let response: { data: { data: unknown } } | null = null

    try {
        if (setLoading) setLoading(true)
        response = await api()

        if (onSuccess) onSuccess(response?.data?.data)
    } catch (error: unknown) {
        if (onError) {
            const err = error as { response?: { data?: { message?: string } } }
            onError(err?.response?.data?.message || "Something went wrong")
        }
        console.error(error)
    } finally {
        if (setLoading) setLoading(false)
    }

    return [response?.data?.data || null]
}
