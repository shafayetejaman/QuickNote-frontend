import { Mail, CheckCircle } from "lucide-react"

export default function ActivationPending() {
    return (
        <div className="flex justify-center items-center h-screen m-2">
            <div className="text-neutral-100 max-w-screen-sm w-full p-8 rounded-lg border border-neutral-800 bg-neutral-950">
                <div className="text-center">
                    <h1 className="text-3xl mb-3">
                        <Mail color="red" b />
                        <CheckCircle color="red" />
                    </h1>
                    <h1 className="text-neutral-400">Sign in to continue</h1>
                </div>
            </div>
        </div>
    )
}
