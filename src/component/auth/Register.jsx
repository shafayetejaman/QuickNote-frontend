import axios from "axios"
import { Link } from "react-router"
import { useState } from "react"
import ProgressBar from "../utils/ProgressBar"
import NotificationSenter from "../utils/NotificationSenter"

async function handleRegister(formData) {
    const env = import.meta.env

    try {
        const response = await axios.post(
            `${env.VITE_LOCAL_BASE_BACKEND_URL}/api/v1/users/register`,
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        )
        console.log(response)
    } catch (error) {
        console.log(error)
        const message = error?.response?.data?.message || "Register failed"
        throw new Error(message)
    }
}

export default function Register() {
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState(false)
    const [notificationData, setNotificationData] = useState({})

    const toggleNotification = () => setNotification(!notification)

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        if (formData.get("profileImage").size === 0) {
            formData.delete("profileImage")
        }
        console.log(formData)

        setLoading(true)

        try {
            await handleRegister(formData)
            // TODO: success handling
        } catch (error) {
            setNotificationData({
                header: "Unable to create your account",
                body: error.message,
            })
            toggleNotification()
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
                        <h1 className="text-3xl mb-3">Create Account</h1>
                        <p className="text-neutral-400">
                            Sign up to get started
                        </p>
                    </div>

                    <form
                        onSubmit={onSubmit}
                        method="POST"
                        className="flex flex-col gap-3 mt-7"
                    >
                        <div>
                            <label className="block mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="ex: John Doe"
                                required
                                className="w-full bg-[#171717] rounded p-2 border border-neutral-800"
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="ex: johndoe"
                                required
                                className="w-full bg-[#171717] rounded p-2 border border-neutral-800"
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="ex: john@example.com"
                                required
                                className="w-full bg-[#171717] rounded p-2 border border-neutral-800"
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="At least 8 characters, 1 letter and 1 number"
                                required
                                className="w-full bg-[#171717] rounded p-2 border border-neutral-800"
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Profile Image</label>
                            <input
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

                        <p className="text-center text-neutral-400">
                            Already have account?{" "}
                            <Link
                                className="text-red-600 hover:underline"
                                to="/login"
                            >
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}
