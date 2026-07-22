import PasswordValidator from "password-validator"
import type { IPasswordValidationError } from "../interface"

const schema = new PasswordValidator()

// prettier-ignore
schema.is().max(100, "Maxium length should be 100")
    .is().min(8,"Minium length should be 8")
    .has().digits(1,"Need at least 1 digit")
    .has().letters(1, "Need at least 1 letter")
    .has().not().spaces(undefined,'Spaces not allowed')

export default function passwordValidator(password: string, setError: (error: IPasswordValidationError) => void) {
    const result = schema.validate(password, { details: true }) as Array<{ message: string }>
    const message = result.map((v) => v.message)

    if (password !== "" && result.length > 0) {
        setError({
            error: true,
            message: message,
        })
    } else {
        setError({ error: false })
    }
}
