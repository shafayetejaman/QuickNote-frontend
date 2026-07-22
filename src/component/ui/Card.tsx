import type { ICardProps } from "../../interface"

export default function Card({ children, className = "" }: ICardProps) {
    return (
        <div className={`flex justify-center items-center m-2 ${className}`}>
            <div className="text-natural w-full p-8 rounded-lg border border-secondary bg-surface">
                <div className="text-center">{children}</div>
            </div>
        </div>
    )
}
