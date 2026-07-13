import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    server: {
        forwardConsole: {
            logLevels: ["log", "info", "warn", "error", "debug"],
            unhandledErrors: true,
        },
        host: "localhost",
        port: 3000,
    },
})
