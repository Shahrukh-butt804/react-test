import { imageUrl } from '../functions/imageUrl'
import Header from './Header'
import Navbar from './Navbar'

export default function HeroSection() {
    return (
        <div className="min-h-screen" style={{ backgroundImage: "url('/images/hero-banner.png')" }}>
            <Header />
            <Navbar />

            <div className={`md:h-137.5 flex justify-start items-center text-white `}
            >
                <div className="flex flex-1/2 flex-col justify-start md:justify-center md:px-14 lg:px-32 pt-24 gap-9 w-screen h-screen md:h-full md:max-w-1/2 bg-black/50 p-4 rounded-lg px-6">
                    <h6 >KHAWAJA YANNI</h6>
                    <h1 className="text-5xl md:text-7xl leading-14 md:leading-18">The new <br /> era of luxury</h1>
                    <p className=" font-extralight md:text-lg ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi quas molestiae?</p>
                    <button className="px-4 md:px-6 py-4 md:py-5 flex items-center gap-10 themeColor rounded-3xl self-start text-md md:text-xl text-start ">Book resevation Now <img className="w-6 h-6" src={imageUrl("arrow.svg")} alt="arrow-right" /></button>
                </div>
            </div>
        </div>
    )
}   
