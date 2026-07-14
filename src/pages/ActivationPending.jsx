import { Mail, CheckCircle } from "lucide-react"
import Card from "../component/ui/Card"

export default function ActivationPending() {
    return (
        <Card>
            <div className="flex justify-around pb-14">
                <div className="border border-neutral-800 bg-neutral-900 rounded-full p-4 relative">
                    <Mail color="red" size={38} />
                    <div className="bg-neutral-900 rounded-full p-1 right-0 bottom-0 absolute">
                        <CheckCircle color="red" size={18} />
                    </div>
                </div>
            </div>
            <h1 className="text-neutral-400">Sign in to continue</h1>
        </Card>
    )
}
