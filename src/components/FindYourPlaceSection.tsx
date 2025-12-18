import { imageUrl } from '../functions/imageUrl'

export default function FindYourPlaceSection() {
    return (
        <div className="md:min-h-screen mt-10 md:mt-0">
            <div className={`flex flex-col-reverse md:flex-row justify-center md:gap-14 items-center text-white `}>
                <img src={imageUrl("map.png")} alt="" />

                <div className="flex flex-col justify-center gap-5 md:gap-8 p-4 rounded-lg h-full">
                    <h6 className='text-xl tracking-widest'>Experience the Groves</h6>
                    <h1 className="text-4xl md:text-6xl leading-none">Find your place</h1>
                    <p className="md:text-lg tracking-wide max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi quas molestiae?</p>
                    <button className="px-6 py-4 md:py-5 flex items-center gap-10 themeColor rounded-3xl self-start text-xl">Open the Map <img className="w-6 h-6" src={imageUrl("arrow.svg")} alt="arrow-right" /></button>
                </div>
            </div>
        </div>
    )
}
