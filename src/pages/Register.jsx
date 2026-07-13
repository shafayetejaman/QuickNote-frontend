import { Link, useNavigate } from "react-router"
import { useState } from "react"
import Card from "../component/Card"
import ProgressBar from "../component/ProgressBar"
import NotificationSenter from "../component/NotificationSenter"
import requestHander from "../utils/requestHandler"
import { registerUser } from "../api/auth"

export default function Register() {
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState({})
    const navigate = useNavigate()

    const toggleNotification = () => {
        setNotification({ show: false })
    }

    const onError = (message) => {
        setNotification({
            show: true,
            header: "Unable to register account",
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
        <>
            {loading && <ProgressBar></ProgressBar>}
            {notification.show && (
                <NotificationSenter
                    onClick={toggleNotification}
                    data={notification}
                ></NotificationSenter>
            )}

            <Card>
                <h1 className="text-3xl mb-3">Create Account</h1>
                <p className="text-neutral-400">Sign up to get started</p>

                <form
                    onSubmit={onSubmit}
                    method="POST"
                    className="flex flex-col gap-3 mt-7"
                >
                    <div className="text-left">
                        <label htmlFor="fullName" className="block mb-1">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            placeholder="ex: John Doe"
                            required
                            className="w-full bg-[#171717] rounded p-2 border border-neutral-800"
                        />
                    </div>

                    <div className="text-left">
                        <label htmlFor="reg-username" className="block mb-1">
                            Username
                        </label>
                        <input
                            id="reg-username"
                            type="text"
                            name="username"
                            placeholder="ex: johndoe"
                            required
                            className="w-full bg-[#171717] rounded p-2 border border-neutral-800"
                        />
                    </div>

                    <div className="text-left">
                        <label htmlFor="email" className="block mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="ex: john@example.com"
                            required
                            className="w-full bg-[#171717] rounded p-2 border border-neutral-800"
                        />
                    </div>

                    <div className="text-left">
                        <label htmlFor="reg-password" className="block mb-1">
                            Password
                        </label>
                        <input
                            id="reg-password"
                            type="password"
                            name="password"
                            placeholder="At least 8 characters, 1 letter and 1 number"
                            required
                            className="w-full bg-[#171717] rounded p-2 border border-neutral-800"
                        />
                    </div>

                    <div className="text-left">
                        <label htmlFor="profileImage" className="block mb-1">
                            Profile Image
                        </label>
                        <input
                            id="profileImage"
                            type="file"
                            name="profileImage"
                            accept="image/*"
                            className="w-full bg-[#171717] rounded p-2 border border-neutral-800 accent-gray-900"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-600 rounded p-2 mt-2 hover:bg-red-700 transition disabled:opacity-50"
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
        </>
    )
}
