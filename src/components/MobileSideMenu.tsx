import { imageUrl } from "../functions/imageUrl";

export default function MobileSidebar({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {

    const navList = ["Dine With Us", "Plan Your Visit", "Events", "View Groves Map", "Our Story", "Contact Us"];

    return (
        <>
            {open && (<div onClick={() => setOpen(false)} className="fixed inset-0 bg-white/15 z-40 " />)}

            <div className={`fixed top-0 left-0 w-96 max-w-screen h-full sideMenu text-white z-50  border border-gray-200 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between  border-b border-gray-200 p-7">
                    <img src={imageUrl("logo.png")} alt="Logo" />
                    <button
                        onClick={() => setOpen(false)}
                        className="text-xl focus:outline-none"
                    >
                        <img src={imageUrl("cross.png")} alt="Logo" />
                    </button>
                </div>

                <div className="mt-4">
                    {navList.map((item) => (
                        <a
                            key={item}
                            href="#"
                            onClick={() => setOpen(false)}
                            className="block px-7 py-3.5 text-gray-300 hover:bg-gray-800 hover:text-white border-b border-gray-200 text-lg tracking-wide font-semibold"
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex flex-col justify-start items-start gap-6 mt-10 px-8">
                        <div className="flex justify-center items-center gap-2"><span className="inline-block rotate-90 text-3xl">›</span> <img src={imageUrl("flag.png")} alt="Flag" />English</div>
                        <button className="px-16 py-3.5 themeColor rounded-2xl">Log in</button>
                    </div>
                </div>
                <div>
                    <ul className="flex gap-7 items-center px-8 absolute bottom-12 ">
                        <li><img src={imageUrl("tiktok.png")} alt="TikTok" /></li>
                        <li><img src={imageUrl("insta.png")} alt="Instagram" /></li>
                        <li><img src={imageUrl("x.png")} alt="X" /></li>
                        <li><img src={imageUrl("snap-chat.png")} alt="Snapchat" /></li>
                    </ul>
                </div>
            </div>
        </>
    );
}