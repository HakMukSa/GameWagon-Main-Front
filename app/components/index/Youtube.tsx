"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Youtube } from "@/types/commons/store";
import { useState } from "react";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
export default function Youtube(props: Youtube) {
  const list = props.list;
  const [Modal, setModal] = useState(false); // default false
  return (
    <div>
      <Slider {...settings}>
        {list.map((item) => (
          <div
            key={item.src}
            className="w-[100%] h-[300px]"
            onClick={() => [setModal(!Modal), console.log(Modal)]}
          >
            <Image
              src={item.thumbnail}
              alt={item.alt}
              width={300}
              height={200}
              style={{ objectFit: "cover" }}
              className="w-[100%] h-[200px]"
            />
            <div className="overflow-hidden">
              <br />
              <span className="whitespace-nowrap overflow-ellipsis text-black">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// <iframe
// className="w-[100%] h-[200px]"
// src={item.src}
// title="YouTube video player"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// ></iframe>
