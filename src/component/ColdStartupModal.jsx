import { Info, X } from "lucide-react"

export default function ColdStartupModal() {
    return (
        <div className="fixed h-full w-full flex justify-center items-center bg-black/20 backdrop-blur-md">
            <div className="w-60 sm:w-80 z-50 flex items-center justify-between rounded-lg bg-surface-alt px-[10px]">
                <div className="flex gap-3 p-2 items-center">
                    <div className="text-danger bg-border p-1 rounded-lg">
                        <Info size={30} />
                    </div>
                    <div className="text-wrap text-sm">
                        <p className="text-white text-bolder"></p>
                        <p className="text-subtitle"></p>
                    </div>
                </div>
                <button className="text-subtitle hover:bg-white/10 p-1 rounded-md transition-colors ease-linear">
                    <X size={30} onClick={() => {}} />
                </button>
            </div>
        </div>
    )
}
