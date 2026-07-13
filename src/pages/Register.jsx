import { Link, useNavigate } from "react-router"
import { useRef, useState } from "react"
import Card from "../component/Card"
import InputField from "../component/InputField"
import ProgressBar from "../component/ProgressBar"
import NotificationCenter from "../component/NotificationCenter"
import requestHander from "../utils/requestHandler"
import { registerUser } from "../api/auth"

export default function Register() {
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState({})
    const [validationError, setValidationError] = useState({})
    const [password, setPassword] = useState({})
    const passRef = useRef()
    const navigate = useNavigate()

    const toggleNotification = () => {
        setNotification({ show: false })
    }

    const onError = (message) => {
        setNotification({
            show: true,
            header: "",
            body: message,
        })
    }

    const onSuccess = () => {
        navigate("/activation-pending", { replace: true })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        if (formData.get("profileImage").size === 0) {
            formData.delete("profileImage")
        }

        await requestHander(
            registerUser(formData),
            setLoading,
            onSuccess,
            onError
        )
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
                <h1 className="text-3xl mb-3">Create Account</h1>
                <p className="text-neutral-400">Sign up to get started</p>

                <form
                    onSubmit={onSubmit}
                    method="POST"
                    className="flex flex-col gap-3 mt-7"
                >
                    <InputField
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        placeholder="ex: John Doe"
                        required
                    />
                    <InputField
                        id="reg-username"
                        label="Username"
                        name="username"
                        placeholder="ex: johndoe"
                        required
                    />
                    <InputField
                        id="email"
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="ex: john@example.com"
                        required
                    />
                    <InputField
                        id="reg-password"
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Use strong password"
                        required
                    />
                    {validationError.error && (
                        <h1>{validationError.message}</h1>
                    )}
                    <InputField
                        id="profileImage"
                        label="Profile Image"
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        className="accent-gray-900"
                        ref={passRef}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-600 rounded p-2 mt-3 hover:bg-red-700 transition disabled:opacity-50"
                    >
                        {loading ? "Signing..." : "Sign Up"}
                    </button>

                    <p className="text-neutral-400">
                        Already have account?{" "}
                        <Link
                            className="text-red-600 hover:underline"
                            to="/login"
                        >
                            Sign In
                        </Link>
                    </p>
                </form>
            </Card>
        </div>
    )
}
