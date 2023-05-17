"use client";
import Image from "next/image";
// for Image Slide
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStore from "@/main/store";
// types
import { imageList } from "@/types/image-list";
import { imageListSetting } from "@/types/image-list-setting";

const settings: imageListSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

/** @todo 이미지 목록을 props로 받도록 코딩 */

const Slick = () => {
  const { images } = useStore(); //
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        {images.map((image: imageList) => (
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
