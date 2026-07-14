export default function NotificationModal({
    onClick,
    data = { header: "Please try again.", body: "Something when Wrong!" },
}) {
    return (
        <div className="fixed h-full w-full flex justify-center items-center bg-overlay backdrop-blur-md">
            <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
                <div className="error-alert cursor-default flex items-center justify-between w-full rounded-lg bg-surface-alt px-[10px]">
                    <div className="flex gap-3 p-2 items-center">
                        <div className="text-danger bg-white/5 p-1 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                                />
                            </svg>
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                            onClick={onClick}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
