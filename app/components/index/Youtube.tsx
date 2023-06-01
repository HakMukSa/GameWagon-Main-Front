"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { YoutubeMeta } from "@/types/commons/store";
import { ReactElement, useState } from "react";
import Image from "next/image";
import { Settings } from "react-slick";
import useStore from "@/main/store";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default function Youtube(): ReactElement {
  const { youtubeMeta } = useStore();
  const list: YoutubeMeta[] = youtubeMeta;
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [selectedArtist, setSelectedArtist] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  return (
    <div>
      <Slider {...settings}>
        {list.map((item) => (
          <div
            key={item.src}
            className="w-[100%] h-[300px]"
            onClick={() => {
              setSelected(item.src);
              setSelectedTitle(item.title);
              setSelectedArtist(item.artist);
              setSelectedTag(item.tag);
              setModalIsOpen(true);
            }}
          >
            <Image
              src={item.thumbnail}
              alt={item.alt}
              width={500}
              height={200}
              style={{ objectFit: "cover" }}
              className="w-full h-full object-cover transition-transform duration-300 transform-gpu hover:scale-105"
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

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-screen h-screen bg-[#000000] bg-opacity-[50%]">
            {/* Modal Content */}
            <div className="w-[50%] h-[750px] bg-[#3f414b] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg z-[999]">
              <div>
                <div className="absolute top-3 left-3">
                  <span>추천 동영상</span>
                </div>
                <button
                  onClick={() => setModalIsOpen(false)}
                  className="absolute top-3 right-3 text-white bg-transparent border-0 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute top-12 left-3 text-[18px] text-[#FFBDD4]">
                <span>{selectedTag}</span>
              </div>

              {/* youtube */}
              <div>
                <iframe
                  className="w-[100%] h-[500px] mt-[100px]"
                  src={selected}
                  title="YouTube video player"
                  allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative top-5 left-3 text-[20px]">
                {selectedTitle}
              </div>
              <div className="relative top-10 left-3 text-[15px] text-gray-400">
                {selectedArtist}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
