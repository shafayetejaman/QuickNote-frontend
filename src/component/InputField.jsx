export default function InputField({
    id,
    label,
    type = "text",
    name,
    placeholder,
    required = false,
    accept,
    className = "",
}) {
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
                className={`w-full bg-[#171717] rounded p-2 border border-neutral-800 mt-1 ${className} text-xs`}
            />
        </div>
    )
}
