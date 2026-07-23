import { LoaderCircle } from "lucide-react"
import type { IButtonProps } from "../../interface"
import { classNameJoin } from "../../utils"

export default function Button({
    className = "",
    loading,
    text,
    onClick,
    disabled = false,
}: IButtonProps) {
    className = classNameJoin(
        className,
        "flex justify-center w-full bg-primary rounded p-2 mt-3",
        "transition duration-200",
        "disabled:opacity-70 disabled:cursor-not-allowed",
        "enabled:hover:bg-primary-alt"
    )
    return (
        <button
            type="submit"
            disabled={loading || disabled}
            className={className}
            onClick={onClick === undefined ? () => {} : onClick}
        >
            {loading ? (
                <LoaderCircle className="text-natural animate-spin" size={38} />
            ) : (
                text
            )}
        </button>
    )
}
