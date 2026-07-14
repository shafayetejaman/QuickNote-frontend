import { useState } from "react"
import { Link, useNavigate } from "react-router"
import Card from "../component/ui/Card"
import InputField from "../component/ui/InputField"
import ProgressBar from "../component/ProgressBar"
import { loginUser } from "../api/auth"
import requestHander from "../utils/requestHandler"
import NotificationModal from "../component/NotificationModal"
import Button from "../component/ui/Button"

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState({})
    const navigate = useNavigate()

    const toggleNotification = () => {
        setNotification((prev) => ({
            ...prev,
            error: !prev.error,
        }))
    }

    const onError = (message) => {
        setNotification({
            error: true,
            header: "Unable to login",
            body: message,
        })
    }

    const onSuccess = (data) => {
        localStorage.setItem("userId", data.userId)
        localStorage.setItem("accessToken", data.accessToken)
        localStorage.setItem("refreshToken", data.refreshToken)

        navigate("/home", { replace: true })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
        }
        await requestHander(loginUser(data), setLoading, onSuccess, onError)
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

            <Card>
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
