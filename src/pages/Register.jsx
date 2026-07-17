import { Link } from "react-router"
import { useEffect, useState } from "react"
import Card from "../component/ui/Card"
import InputField from "../component/ui/InputField"
import ProgressBar from "../component/ProgressBar"
import requestHander from "../utils/requestHandler"
import { registerUser } from "../api/auth"
import NotificationModal from "../component/NotificationModal"
import passwordValitor from "../validator/passwordValidator"
import { CircleX } from "lucide-react"
import Button from "../component/ui/Button"
import { useAuth } from "../context/index.js"

export default function Register() {
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState({})
    const [passwordValidationError, setPasswordValidationError] = useState({})
    const [password, setPassword] = useState("")
    const { register } = useAuth()

    useEffect(() => {
        passwordValitor(password, setPasswordValidationError)
    }, [password])

    const toggleNotification = () => {
        setNotification((prev) => ({
            ...prev,
            error: !prev.error,
        }))
    }

    const onError = (message) => {
        setNotification({
            error: true,
            header: "Unable to register user",
            body: message,
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        if (formData.get("profileImage").size === 0) {
            formData.delete("profileImage")
        }

        if (passwordValidationError.error) {
            return setNotification({
                error: true,
                header: "Invalid Password",
                body: "Please use a Valid password",
            })
        }

        await requestHander(
            registerUser(formData),
            setLoading,
            register,
            onError
        )
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

            <Card className="min-w-96">
                <h1 className="text-3xl mb-3">Create Account</h1>
                <p className="text-subtitle">Sign up to get started</p>

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
                        onChange={setPassword}
                    />
                    {passwordValidationError.error && (
                        <div className="flex flex-col gap-2 my-2 text-sm text-danger text-left">
                            {passwordValidationError.message.map(
                                (message, idx) => (
                                    <p
                                        key={idx}
                                        className="flex items-center gap-1"
                                    >
                                        <CircleX size={16} strokeWidth={3} />
                                        <span>{message}</span>
                                    </p>
                                )
                            )}
                        </div>
                    )}
                    <InputField
                        id="profileImage"
                        label="Profile Image"
                        type="file"
                        name="profileImage"
                        accept="image/*"
                    />

                    <Button
                        text={"Sign Up"}
                        loading={loading}
                        disabled={passwordValidationError.error}
                    />

                    <p className="text-subtitle">
                        Already have account?{" "}
                        <Link
                            className="text-primary hover:underline"
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
