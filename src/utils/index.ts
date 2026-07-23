// singleton class
export class LocalStorage {
    static set(key: string, value: unknown) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    static get<T = unknown>(key: string): T | null {
        try {
            const value: T = JSON.parse(localStorage.getItem(key) as string)
            return value
        } catch (error) {
            console.log(error)
            return null
        }
    }
    static clear() {
        localStorage.clear()
    }
    static pop<T = unknown>(key: string): T | null {
        const item = LocalStorage.get<T>(key)
        localStorage.removeItem(key)
        return item
    }
}

export function classNameJoin(
    ...classes: (string | undefined | null | false)[]
): string {
    return classes.filter((s): s is string => !!s && !!s.trim()).join(" ")
}
