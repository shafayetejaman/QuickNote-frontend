import { Mail, CheckCircle } from "lucide-react"
import Card from "../component/Card"

export default function ActivationPending() {
    return (
        <Card>
            <div className="flex justify-around pb-14">
                <div className="border border-neutral-800 bg-neutral-900 rounded-full p-4 absolute">
                    <Mail color="red" size={38} />
                </div>
                <div className="bg-neutral-900 rounded-full p-1 relative right-0 bottom-0">
                    <CheckCircle color="red" size={18} />
                </div>
            </div>
            <h1 className="text-neutral-400">Sign in to continue</h1>
        </Card>
    )
}
