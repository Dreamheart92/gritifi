import Button from "./button";
import Input from "./input";

export default function Footer() {
    return (
        <div className="h-[100vh] relative w-full overflow-hidden"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div
                className="w-full h-[120vh] fixed top-0 left-0"
            >
                <div className="w-full h-full max-w-[70%] mx-auto mt-12">
                    <p className="!text-[2rem] text-stone-900">I launched Gritifi as a studio where cultural soul meets strategic creativity. My background in graphic design and my roots in a small Bulgarian town shape everything I create — from bold brand identities to thoughtful visual systems. Whether I’m working with a local artisan or an international startup, I bring empathy, clarity, and intention to every project.</p>

                    <form className="max-w-[40%] mx-auto pt-12 flex flex-col gap-4 justify-center items-center">
                        <div className="flex w-full gap-2">
                            <Input name="name" label="Name" className="border-[#FF6B6B]" />
                            <Input name="surname" label="Surname" className="border-[#FF6B6B] w-full flex-1" />
                        </div>
                        <Input name="email" label="Email" className="border-[#007AFF]" />
                        <Input name="message" label="Message" type={'textarea'} className="border-[#FFD166]" />

                        <Button variant={'submit'}>Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}