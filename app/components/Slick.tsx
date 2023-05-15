"use client";
import Image from "next/image";
// for Image Slide
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStore from "@/../store.js"; // image list
// types
import { ImageList } from "@/api/commons/types/image-list";
import { ImageListSetting } from "@/api/commons/types/image-list-setting";

const settings: ImageListSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slick = () => {
  const { images } = useStore();
  console.log(images[0]);
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        {images.map((image: ImageList) => (
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
