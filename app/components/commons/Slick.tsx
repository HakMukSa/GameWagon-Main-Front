"use client";
import Image from "next/image";
// for Image Slide
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "@/types/commons/store";
import { settings } from "@/types/commons/slick-settings";

import { ReactElement } from "react";

const settings: settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};
const Slick = (props: Images): ReactElement => {
  const images = props.images;
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.src} className="relative h-80">
            <Image
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
