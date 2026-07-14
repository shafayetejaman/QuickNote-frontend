import { Mail, CheckCircle } from "lucide-react"
import Card from "../component/ui/Card"

export default function ActivationPending() {
    return (
        <Card>
            <div className="flex justify-around pb-14">
                <div className="border border-border bg-surface-alt rounded-full p-4 relative">
                    <Mail className="text-primary" size={38} />
                    <div className="bg-surface-alt rounded-full p-1 right-0 bottom-0 absolute">
                        <CheckCircle className="text-primary" size={18} />
                    </div>
                </div>
            </div>
            <h1 className="text-subtitle">Sign in to continue</h1>
        </Card>
    )
}
