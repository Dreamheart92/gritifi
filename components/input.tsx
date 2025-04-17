type InputProps = {
    name: string;
    label: string;
    className?: string;
    type?: 'text' | 'textarea';
}

export default function Input({ name, label, className, type = 'text' }: Readonly<InputProps>) {
    const style = `border-4 rounded-2xl outline-0 ${className} font-body text-[1.2em]`;

    return (
        <div className="flex flex-col text-stone-900 w-full">
            <label htmlFor={name} className="text-[1.2rem] font-bold">{label}</label>
            {type === 'textarea' ? (
                <textarea className={`${style} p-2`} name={name} rows={10} cols={35} />
            ) : (
                <input
                    className={`${style} h-[6vh] px-2 py-4`}
                    type={type}
                    name={name}
                />
            )}
        </div>
    )
}