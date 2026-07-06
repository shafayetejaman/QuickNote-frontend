import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import ProgressBar from "../component/ProgressBar"
import NotificationSenter from "../component/NotificationSenter"

async function handleLogin(username, password) {
    console.log(username, password)
    const env = import.meta.env

    try {
        const response = await axios.post(
            `${env.VITE_LOCAL_BASE_BACKEND_URL}/api/v1/users/login`,
            {
                username,
                password,
            }
        )
        console.log(response)
        return response.data
    } catch (error) {
        console.error(error)
        const message = error?.response?.data?.message || "Login failed"
        throw new Error(message, { cause: error })
    }
}

export default function Login() {
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState(false)
    const [notificationData, setNotificationData] = useState({})

    const toggleNotification = () => setNotification(!notification)

    const navigate = useNavigate()
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        try {
            setLoading(true)
            const response = await handleLogin(
                formData.get("username"),
                formData.get("password")
            )

            localStorage.setItem("userId", response.data.userId)
            navigate("/home", { replace: true })
        } catch (error) {
            setNotificationData({
                header: "Unable to login",
                body: error.message,
            })

            setNotification(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading && <ProgressBar></ProgressBar>}
            {notification && (
                <NotificationSenter
                    onClick={toggleNotification}
                    data={notificationData}
                ></NotificationSenter>
            )}

            <div className="flex justify-center items-center h-screen m-2">
                <div className="text-neutral-100 max-w-screen-sm w-full p-8 rounded-lg border border-neutral-800 bg-neutral-950">
                    <div className="text-center">
                        <h1 className="text-3xl mb-3">Welcome Back</h1>
                        <h1 className="text-neutral-400">
                            Sign in to continue
                        </h1>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        method="POST"
                        className="flex flex-col gap-3 mt-7"
                    >
                        <div>
                            <lable>Username</lable>
                            <input
                                type="username"
                                name="username"
                                placeholder="Enter Your Username"
                                required
                                className="w-full bg-[#171717] rounded p-2 border border-neutral-800 mt-1"
                            />
                        </div>
                        <div>
                            <lable>Password</lable>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                required
                                className="w-full bg-[#171717] rounded p-2 border border-neutral-800 mt-1"
                            />
                        </div>
                        <button className="w-full bg-red-600 rounded p-2 mt-2">
                            Sign In
                        </button>
                        <p className="text-center text-neutral-400">
                            Don't have an account?{" "}
                            <Link className="text-red-600" to="/register">
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}
