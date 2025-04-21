import { ButtonHTMLAttributes, ReactNode } from "react"
import { cva } from "class-variance-authority"

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'submit';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonStyles = cva('rounded-2xl cursor-pointer font-bold', {
    variants: {
        variant: {
            primary: 'bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 border-5 border-stone-100',
            submit: 'bg-[#50E3C2] hover:bg-[#50E3C2]/90 h-[7vh]',
        },
    }
})

const buttonSizes = {
    primary: 'clamp(5rem, 5vh + 1rem, 10rem)',
    submit: 'clamp(3.5rem, 5vh + 1rem, 10rem)',
}

export default function Button({ children, variant = 'primary', ...props }: Readonly<ButtonProps>) {
    return (
        <button
            {...props}
            className={(buttonStyles({ variant }))}
            style={{
                width: 'clamp(8rem, 15vw + 1rem, 20rem)',
                height: buttonSizes[variant],
                fontSize: 'clamp(1rem, 2vw, 2rem)',
            }}
        >
            {children}
        </button>
    )
}