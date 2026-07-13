export default function Card({ children, className = "" }) {
    return (
        <div className={`flex justify-center items-center m-2 ${className}`}>
            <div className="text-neutral-100 w-full p-8 rounded-lg border border-neutral-800 bg-neutral-950">
                <div className="text-center">{children}</div>
            </div>
        </div>
    )
}
