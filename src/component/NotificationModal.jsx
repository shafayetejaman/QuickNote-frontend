import { Info, X } from "lucide-react"

export default function NotificationModal({
    onClick,
    data = { header: "Please try again.", body: "Something when Wrong!" },
}) {
    return (
        <div className="fixed h-full w-full flex justify-center items-center bg-black/20 backdrop-blur-md">
            <div className="w-60 sm:w-80 z-50 flex items-center justify-between rounded-lg bg-surface-alt px-[10px]">
                <div className="flex gap-3 p-2 items-center">
                    <div className="text-danger bg-border p-1 rounded-lg">
                        <Info size={30} />
                    </div>
                    <div className="text-wrap text-sm">
                        <p className="text-white text-bolder">
                            {data.header.slice(0, 30)}
                            {data.header.length > 30 ? "..." : ""}
                        </p>
                        <p className="text-subtitle">
                            {data.body.slice(0, 80)}
                            {data.header.length > 80 ? "..." : ""}
                        </p>
                    </div>
                </div>
                <button className="text-subtitle hover:bg-white/10 p-1 rounded-md transition-colors ease-linear">
                    <X size={30} onClick={onClick} />
                </button>
            </div>
        </div>
    )
}
