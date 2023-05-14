"use client";
import Image from "next/image";
const Slider = require("react-slick").default;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "/image1.jpg",
    alt: "Image 1",
  },
  {
    src: "/image2.jpg",
    alt: "Image 2",
  },
  {
    src: "/image3.jpg",
    alt: "Image 3",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slick = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.src} className="relative h-80">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
