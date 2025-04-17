import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full h-full py-4 flex justify-center items-center bg-[#FF6B6B] pointer-events-none select-none">
                <Image src='/logo-white.svg' alt='Gritifi logo' className="object-cover pointer-events-none" width={200} height={100} />
        </div>
    )
}