import { FileQuestion } from "lucide-react"
import { useLocation, useNavigate } from "react-router"
import Button from "../component/ui/Button"
import Card from "../component/ui/Card"

export default function NotFoundPage() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div className="flex justify-center min-h-screen">
            <Card>
                <div className="flex justify-around pb-14">
                    <div className="border border-secondary bg-surface-alt rounded-full p-4 relative">
                        <FileQuestion className="text-primary" size={38} />
                        <div className="bg-surface-alt rounded-full p-1 h-5 w-6 right-0 bottom-0 absolute">
                            <p className="text-primary text-[4px]">404</p>
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl font-semibold text-neutral mb-3">
                    Page not found
                </h1>
                <p className="text-subtitle text-sm mb-2">
                    We couldn&apos;t find the page you&apos;re looking for
                </p>

                <p className="text-primary font-medium text-sm mb-4 bg-primary-alt/20 border border-primary/30 px-4 py-2 rounded-full">
                    {location.pathname}
                </p>

                <p className="text-neutral text-sm leading-relaxed mb-8">
                    This page doesn&apos;t exist.
                    <br />
                    Double-check the URL and try again. Or
                </p>

                <Button
                    text={"Go Home"}
                    className="my-2"
                    onClick={() => navigate("/home")}
                />
            </Card>
        </div>
    )
}
