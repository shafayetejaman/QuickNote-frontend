import { LoaderCircle } from "lucide-react"
import { classNameJoin } from "../../utils"

export default function Button({ className = "", loading, text }) {
    className = classNameJoin(
        className,
        "flex justify-center w-full bg-red-600 rounded p-2 mt-3",
        "hover:bg-red-700 transition duration-150"
    )
    return (
        <button type="submit" disabled={loading} className={className}>
            {loading ? (
                <LoaderCircle
                    className="animate-spin "
                    color="white"
                    size={38}
                />
            ) : (
                text
            )}
        </button>
    )
}
