import { imageUrl } from '../functions/imageUrl'
import Header from './Header'
import Navbar from './Navbar'

export default function HeroSection() {
    return (
        <div className="min-h-screen" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
            <Header />
            <Navbar />

            <div className={`h-137.5 flex justify-start items-center text-white px-32`}

            >
                <div className="flex flex-col justify-center gap-8 max-w-lg bg-black/50 p-4 rounded-lg h-full">
                    <h6 >KHAWAJA YANNI</h6>
                    <h1 className="text-[85px] leading-none">The new era of luxury</h1>
                    <p className="text-lg font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi quas molestiae?</p>
                    <button className="px-6 py-5 flex items-center gap-10 themeColor rounded-2xl self-start text-xl">Book resevation Now <img className="w-6 h-6" src={imageUrl("arrow.svg")} alt="arrow-right" /></button>
                </div>
            </div>
        </div>
    )
}
