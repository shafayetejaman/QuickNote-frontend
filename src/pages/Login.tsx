import { useState } from "react"
import { Link } from "react-router"
import Card from "../component/ui/Card"
import InputField from "../component/ui/InputField"
import ProgressBar from "../component/ProgressBar"
import { loginUser } from "../api/auth"
import requestHandler from "../utils/requestHandler"
import NotificationModal from "../component/NotificationModal"
import Button from "../component/ui/Button"
import { useAuth } from "../context/index"
import type { INotificationData } from "../interface"

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState<INotificationData>({})
    const { login } = useAuth()

    const toggleNotification = () => {
        setNotification((prev) => ({
            ...prev,
            error: !prev.error,
        }))
    }

    const onError = (message: string) => {
        setNotification({
            error: true,
            header: "Unable to login",
            body: message,
        })
    }

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            username: formData.get("username") as string,
            password: formData.get("password") as string,
        }
        await requestHandler(loginUser(data), setLoading, login, onError)
    }

    return (
        <div className="flex justify-center min-h-screen">
            {loading && <ProgressBar></ProgressBar>}
            {notification.error && (
                <NotificationModal
                    onClick={toggleNotification}
                    data={notification}
                ></NotificationModal>
            )}

            <Card className="min-w-80">
                <p className="text-3xl mb-3">Welcome Back</p>
                <h1 className="text-subtitle">Sign in to continue</h1>
                <form
                    onSubmit={onSubmit}
                    method="POST"
                    className="flex flex-col gap-3 mt-7"
                >
                    <InputField
                        id="username"
                        label="Username"
                        type="username"
                        name="username"
                        placeholder="Enter Your Username"
                        required
                    />
                    <InputField
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        required
                    />
                    <Button loading={loading} text={"Sign In"} />
                    <p className="text-subtitle">
                        Don't have an account?{" "}
                        <Link className="text-primary" to="/register">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    )
}
