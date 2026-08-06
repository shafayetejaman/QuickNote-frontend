// singleton class
export class LocalStorage {
    static set(key: string, value: unknown) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    static get(key: string): unknown | null {
        const item = localStorage.getItem(key)
        if (item === null) return null
        try {
            return JSON.parse(item)
        } catch (error) {
            console.log(error)
            return null
        }
    }
    static clear() {
        localStorage.clear()
    }
    static pop(key: string): unknown | null {
        const item = LocalStorage.get(key)
        localStorage.removeItem(key)
        return item
    }
}

export function classNameJoin(
    ...classes: (string | undefined | null | false)[]
): string {
    return classes.filter((s): s is string => !!s && !!s.trim()).join(" ")
}
