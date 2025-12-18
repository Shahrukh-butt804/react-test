import { useEffect, useState } from "react";
import { imageUrl } from "../functions/imageUrl";
import Slider from "react-slick";

export default function BookTicket() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const images = [
        { src: imageUrl("image1.png"), alt: "Little Krazy" },
        { src: imageUrl("image2.png"), alt: "Hawanim Groves City" },
        { src: imageUrl("image3.png"), alt: "Picnic Market" },
        { src: imageUrl("image4.png"), alt: "Lucaworks" },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3.2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        
    };


    return (
        <div className="flex flex-col gap-10 px-4 md:px-32 mt-4 md:mt-24 ">
            <h1 className="text-4xl md:text-5xl leading-10 md:leading-18 md:max-w-3xl">Book General Access ticket and enjoy the attractions for free</h1>

            <button className="px-6 py-5 flex items-center gap-10 themeColor rounded-2xl self-start text-md md:text-xl">Book General Access Ticket <img className="w-6 h-6" src={imageUrl("arrow.svg")} alt="arrow-right" /></button>

            {isMobile ? (

                <Slider {...sliderSettings} className="w-full gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center rounded-3xl"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="rounded-3xl w-full h-auto"
                            />
                            <p className="text-white text-2xl font-light text-center p-4 max-w-xs">
                                {image.alt}
                            </p>
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className="w-full flex justify-center md:h-150">
                <Slider {...sliderSettings} className="w-full">
                  {images.map((image, index) => (
                    <div key={index}>
                      <div className="flex flex-col items-center justify-center rounded-3xl mx-auto w-96">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="rounded-3xl"
                        />
                        <p className="text-white text-lg font-light text-center p-4">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
        </div>
    )
}
