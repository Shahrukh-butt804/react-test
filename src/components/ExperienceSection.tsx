import { useEffect, useState } from "react";
import { imageUrl } from "../functions/imageUrl";
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
    { src: imageUrl("image3.png"), alt: "Restaurants" },
    { src: imageUrl("image6.png"), alt: "Experiences" },
    { src: imageUrl("image1.png"), alt: "Events" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2.5,
    slidesToScroll: 1,
    arrows: false, // hide arrows
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col gap-10 py-2 px-4 md:px-32 mt-0 md:mt-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div
          className="flex flex-col items-center justify-center gap-8 mr-24"
        >
          <h1 className="text-4xl md:text-5xl whitespace-nowrap  md:max-w-3xl leading-10 md:leading-18">
            Curate Your <br /> Experience <br /> as you like
          </h1>
          <button className="px-4 md:px-6 py-3 md:py-4 flex items-center gap-10 themeColor rounded-3xl self-start text-md md:text-xl text-start ">
            Book Tickets{" "}
            <img
              className="w-6 h-6"
              src={imageUrl("arrow.svg")}
              alt="arrow-right"
            />
          </button>
        </div>

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
                  <div className="flex flex-col items-center justify-center rounded-3xl w-150">
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
    </div>
  );
}
