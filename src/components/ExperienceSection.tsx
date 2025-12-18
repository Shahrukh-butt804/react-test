import { imageUrl } from "../functions/imageUrl"

export default function ExperienceSection() {
    const images = [
        {
            src: imageUrl("image5.png"), alt: "Restaurants"
        },
        {
            src: imageUrl("image6.png"), alt: "Experiences"
        },
        {
            src: imageUrl("image7.png"), alt: "Events"
        },
    ]


    return (
        <div className="flex flex-col gap-10 px-32 mt-24">
            <div className="flex gap-8">

                <div className={`rounded-3xl flex flex-col items-center justify-center max-w-md gap-8`} >
                    <h1 className="text-6xl max-w-3xl font-semibold leading-18">Curate Your Experience as you like</h1>
                    <button className="px-6 py-5 flex items-center gap-10 themeColor rounded-2xl self-start text-xl">Book Tickets <img className="w-6 h-6" src={imageUrl("arrow.svg")} alt="arrow-right" /></button>
                </div>

                {images.map((image, index) => (
                    <div key={index} className={`rounded-3xl flex flex-col items-center justify-center`} >
                        <img src={image.src} alt={image.alt} />
                        <p className="text-white text-2xl font-light text-center p-4 max-w-xs">{image.alt}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
