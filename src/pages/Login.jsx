import { useState } from "react"
import { Link, useNavigate } from "react-router"
import Card from "../component/Card"
import InputField from "../component/InputField"
import ProgressBar from "../component/ProgressBar"
import NotificationCenter from "../component/NotificationCenter"
import { loginUser } from "../api/auth"
import requestHander from "../utils/requestHandler"

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState({})
    const navigate = useNavigate()

    const toggleNotification = () => {
        setNotification({ show: false })
    }

    const onError = (message) => {
        setNotification({
            show: true,
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
            {notification.show && (
                <NotificationCenter
                    onClick={toggleNotification}
                    data={notification}
                ></NotificationCenter>
            )}

            <Card>
                <h1 className="text-3xl mb-3">Welcome Back</h1>
                <h1 className="text-neutral-400">Sign in to continue</h1>
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
                    <button className="w-full bg-red-600 rounded p-2 mt-3">
                        Sign In
                    </button>
                    <p className="text-neutral-400">
                        Don't have an account?{" "}
                        <Link className="text-red-600" to="/register">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    )
}
