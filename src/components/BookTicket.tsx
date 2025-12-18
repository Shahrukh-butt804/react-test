import { imageUrl } from "../functions/imageUrl";

export default function BookTicket() {

    const images = [
        {
            src: imageUrl("image1.png"), alt: "Little Krazy"
        },
        {
            src: imageUrl("image2.png"), alt: "Hawanim Groves City"
        },
        {
            src: imageUrl("image3.png"), alt: "Picnic Market"
        },
        {
            src: imageUrl("image4.png"), alt: "Lucaworks"
        }
    ]


    return (
        <div className="flex flex-col gap-10 px-32 mt-24">
            <h1 className="text-5xl  max-w-3xl">Book General Access ticket and enjoy the attractions for free</h1>

            <button className="px-6 py-5 flex items-center gap-10 themeColor rounded-2xl self-start text-xl">Book General Access Ticket <img className="w-6 h-6" src={imageUrl("arrow.svg")} alt="arrow-right" /></button>

            <div className="flex gap-8">
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
