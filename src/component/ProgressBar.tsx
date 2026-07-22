import { useEffect, useState } from "react"
import type { IProgressBarProps } from "../interface"

export default function ProgressBar({ iniProgress = 10 }: IProgressBarProps) {
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
                className="bg-primary-alt h-1 transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    )
}
