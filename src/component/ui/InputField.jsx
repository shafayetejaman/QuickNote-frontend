import { classNameJoin } from "../../utils"

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
}) {
    if (type === "file") {
        className += classNameJoin(
            "file:mr-4 file:py-2 file:px-3 file:rounded file:border-0",
            "file:text-sm file:bg-red-600 file:text-white file:hover:bg-red-700",
            "text-lg text-[22px] transition duration-150"
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
                className={`w-full bg-[#171717] rounded p-2 border border-neutral-800 mt-1 ${className} text-xs`}
            />
        </div>
    )
}
