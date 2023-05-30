"use client";
import * as NextImage from "next/image";
import Slider from "react-slick";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@/types/commons/store";
import { ReactElement } from "react";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};
const Slick = (props: { images: Image[] }): ReactElement => {
  const images = props.images;
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.src} className="relative h-80">
            <NextImage.default
              src={image.src}
              alt={image.alt}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
