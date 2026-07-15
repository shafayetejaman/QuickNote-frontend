// singleton class
export class LocalStorage {
    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    static get(key) {
        try {
            const value = JSON.parse(localStorage.getItem(key))
            return value
        } catch (error) {
            console.log(error)
            return null
        }
    }
    static clear() {
        localStorage.clear()
    }
    static pop(key) {
        const item = this.get(key)
        localStorage.removeItem(key)
        return item
    }
}

export function classNameJoin(...classes) {
    return classes.filter((s) => s.trim()).join(" ")
}
