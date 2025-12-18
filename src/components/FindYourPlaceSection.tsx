import { imageUrl } from '../functions/imageUrl'

export default function FindYourPlaceSection() {
    return (
        <div className="min-h-screen">
            <div className={`flex justify-center gap-14 items-center text-white `}>
                <img src={imageUrl("map.png")} alt="" />

                <div className="flex flex-col justify-center gap-8   p-4 rounded-lg h-full">
                    <h6 className='text-xl'>Experience the Groves</h6>
                    <h1 className="text-6xl leading-none">Find your place</h1>
                    <p className="text-lg font-semibold max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi quas molestiae?</p>
                    <button className="px-6 py-5 flex items-center gap-10 themeColor rounded-2xl self-start text-xl">Open the Map <img className="w-6 h-6" src={imageUrl("arrow.svg")} alt="arrow-right" /></button>
                </div>
            </div>
        </div>
    )
}
