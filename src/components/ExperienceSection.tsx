import { useEffect, useState } from "react";
import { imageUrl } from "../functions/imageUrl"
import Slider from "react-slick";

export default function ExperienceSection() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const images = [
        { src: imageUrl("image5.png"), alt: "Restaurants" },
        { src: imageUrl("image6.png"), alt: "Experiences" },
        { src: imageUrl("image7.png"), alt: "Events" },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // hide arrows
        autoplay: true,
        autoplaySpeed: 3000,
    };


    return (
        <div className="flex flex-col gap-10 py-2 px-4 md:px-32 mt-0 md:mt-24">
            <div className="flex flex-col md:flex-row items-start gap-8">

                <div className={`rounded-3xl flex flex-col items-center justify-center max-w-md gap-8`} >
                    <h1 className="text-4xl md:text-6xl md:max-w-3xl leading-10 md:leading-18">Curate Your Experience as you like</h1>
                    <button className="px-4 md:px-6 py-4 md:py-5 flex items-center gap-10 themeColor rounded-3xl self-start text-md md:text-xl text-start ">Book general Access Tickets <img className="w-6 h-6" src={imageUrl("arrow.svg")} alt="arrow-right" /></button>
                </div>

                {isMobile ? (
                    <Slider {...sliderSettings} className="w-full gap-4">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center rounded-3xl"
                            >
                                <img src={image.src} alt={image.alt} className="rounded-3xl w-full h-auto" />
                                <p className="text-white text-2xl font-light text-center p-4 max-w-xs">
                                    {image.alt}
                                </p>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="flex flex-row gap-8 flex-wrap">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center rounded-3xl"
                            >
                                <img src={image.src} alt={image.alt} className="rounded-3xl w-full h-auto" />
                                <p className="text-white text-2xl font-light text-center p-4 max-w-xs">
                                    {image.alt}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

            </div>

        </div>
    )
}
