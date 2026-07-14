import { useEffect, useState } from "react"

export default function ProgressBar({ iniProgress = 10 }) {
    const [progress, setProgress] = useState(iniProgress)

    useEffect(() => {
        if (progress >= 90) return
        const intervel = setTimeout(() => {
            setProgress(Math.min(progress + 20, 90))
        }, 800)
        return () => clearTimeout(intervel)
    }, [progress])

    return (
        <div className="w-full bg-background fixed top-0">
            <div
                className="bg-primary-hover h-1 transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    )
}
