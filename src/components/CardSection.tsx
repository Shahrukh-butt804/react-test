import { imageUrl } from "../functions/imageUrl";

export default function CardSection() {

    const cards = [
        {
            src: imageUrl("card1.png"), alt: "Vida Vera"
        },
        {
            src: imageUrl("card2.png"), alt: "Zama Zulu"
        },
        {
            src: imageUrl("card3.png"), alt: "Khuwaja Yanni"
        },
        {
            src: imageUrl("card4.png"), alt: "Yamagata"
        }
    ]

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col gap-5 py-10 justify-center items-center ">
                <div className="max-w-5xl flex flex-col gap-5 py-10 justify-center items-center ">
                    <h1 className="text-6xl font-semibold">Experience the Finest Cuisine</h1>
                    <p className="text-center px-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque eveniet recusandae ea. Vel repellendus iusto eaque porro nemo neque illum voluptate maiores voluptatibus esse dolorum praesentium facere?  Eaque eveniet recusandae ea. Vel repellendus iusto eaque porro nemo neque illum voluptate maiores </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-24 max-w-7xl my-10">
                    {cards.map((image, index) => (
                        <div key={index} className={`rounded-3xl flex flex-col items-center justify-center bg-white/5 p-3 pb-10`} >
                            <img src={image.src} alt={image.alt} />
                            <div className="flex justify-between items-center w-full px-2">
                                <div className="flex flex-col px-2 gap-3 pt-4">
                                    <p className="text-white text-3xl  max-w-xs">{image.alt}</p>
                                    <p className="text-white font-light  p-1 px-8 tracking-widest rounded-2xl max-w-xs bg-[#AD8749]">100 SR PER GUEST</p>
                                </div>
                                <img src={imageUrl("arrow.svg")} alt="arrow" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}