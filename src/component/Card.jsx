export default function Card({ children }) {
    return (
        <div className="flex justify-center items-center h-screen m-2">
            <div className="text-neutral-100 max-w-screen-sm w-full p-8 rounded-lg border border-neutral-800 bg-neutral-950">
                <div className="text-center">{children}</div>
            </div>
        </div>
    )
}
