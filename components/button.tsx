import { ReactNode } from "react"
import { cva } from "class-variance-authority"

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'submit';
}

const buttonStyles = cva('w-[14vw] rounded-2xl cursor-pointer font-bold text-[2em]', {
    variants: {
        variant: {
            primary: 'bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 border-5 border-stone-100 h-[10vh]',
            submit: 'bg-[#50E3C2] hover:bg-[#50E3C2]/90 h-[7vh]',
        },
    }
})

export default function Button({ children, variant = 'primary' }: Readonly<ButtonProps>) {
    return (
        <button className={(buttonStyles({ variant }))}>
            {children}
        </button>
    )
}