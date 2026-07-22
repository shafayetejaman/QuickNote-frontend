import { classNameJoin } from "../../utils"
import type { IInputFieldProps } from "../../interface"

export default function InputField({
    id,
    label,
    type = "text",
    ref,
    value,
    onChange,
    name,
    placeholder,
    required = false,
    accept,
    className = "",
}: IInputFieldProps) {
    if (type === "file") {
        className += classNameJoin(
            "file:mr-4 file:py-2 file:px-3 file:rounded file:border-0",
            "file:text-sm file:bg-primary file:text-natural file:hover:bg-primary-alt",
            "text-lg text-[22px] transition duration-200"
        )
    }
    return (
        <div className="text-left">
            <label htmlFor={id} className="block mb-1">
                {label}
            </label>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                accept={accept}
                ref={ref}
                value={value}
                onChange={
                    onChange === undefined
                        ? () => {}
                        : (e) => onChange(e.target.value)
                }
                className={`w-full bg-surface-alt rounded p-2 border border-secondary mt-1 ${className} text-sm`}
            />
        </div>
    )
}
