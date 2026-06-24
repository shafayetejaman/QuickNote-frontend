import { useEffect, useState } from "react"
import api from "./api"

export default function queryData(url) {
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState({
        show: false,
        data: null,
    })
    let response = null

    useEffect(async () => {
        try {
            response = await api.get(url)

            setLoading(true)
            setNotification({
                show: true,
                data: {
                    header: "Account Created Successfully",
                    body: "We will send you an email shortly",
                },
            })
        } catch (error) {
            setNotification({
                show: true,
                data: {
                    header: "Unable to create your account",
                    body: error.message,
                },
            })
        } finally {
            setLoading(false)
        }
    }, [])

    return [loading, notification, response]
}
