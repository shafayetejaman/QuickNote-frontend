import { LoaderCircle } from "lucide-react"
import { classNameJoin } from "../../utils"

export default function Button({ className = "", loading, text }) {
    className = classNameJoin(
        className,
        "flex justify-center w-full bg-primary rounded p-2 mt-3",
        "hover:bg-primary-alt transition duration-200"
    )
    return (
        <button type="submit" disabled={loading} className={className}>
            {loading ? (
                <LoaderCircle className="text-natural animate-spin" size={38} />
            ) : (
                text
            )}
        </button>
    )
}
