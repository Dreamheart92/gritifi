import Button from "./button";

export default function Cta() {
    return (
        <div className="bg-[#FFD166] w-full flex flex-col justify-center items-center py-12">
            <h1 className="!text-[6.25rem] text-stone-900">Let&apos;s work together</h1>

            <div className="flex gap-4 pt-4">
                <Button>Contact me</Button>
                <Button>About me</Button>
            </div>
        </div>
    )
}