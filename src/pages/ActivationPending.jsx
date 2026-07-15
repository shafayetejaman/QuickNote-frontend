import { Mail, CheckCircle } from "lucide-react"
import Card from "../component/ui/Card"
import { Link } from "react-router"
import Button from "../component/ui/Button"

export default function ActivationPending() {
    const email = "shafayet@gmail.com"
    return (
        <div className="flex justify-center min-h-screen">
            <Card>
                <div className="flex justify-around pb-14">
                    <div className="border border-secondary bg-surface-alt rounded-full p-4 relative">
                        <Mail className="text-primary" size={38} />
                        <div className="bg-surface-alt rounded-full p-1 right-0 bottom-0 absolute">
                            <CheckCircle className="text-primary" size={18} />
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl font-semibold text-neutral mb-3">
                    Thank you for registering!
                </h1>
                <p className="text-subtitle text-sm mb-2">
                    We&apos;ve sent an activation link to
                </p>

                <p className="text-primary font-medium text-sm mb-4 bg-primary-alt/20 border border-primary/30 px-4 py-2 rounded-full">
                    {email}
                </p>

                <p className="text-neutral text-sm leading-relaxed mb-8">
                    Please check your inbox and click
                    <br />
                    to activate your account.
                    <br /> The link will expire in 24 hours.
                </p>

                <div className="w-full border-t-2 border-secondary pt-6 space-y-3">
                    <p className="text-neutral text-xs">
                        Didn&apos;t receive the email? Check your spam folder or
                    </p>
                </div>

                <Button text={"Resend link"} className="my-2" />

                <p className="text-subtitle">
                    Don't have an account?{" "}
                    <Link className="text-primary" to="/register">
                        Sign Up
                    </Link>
                </p>
            </Card>
        </div>
    )
}
