"use client";
import { useState } from "react";
import { useEffect } from 'react';
export default function Carousel() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  const cards = [
    {
      title: "This site",
      description: "this web site",
      bgColor: "bg-red-500",
      img: "/samosa-s.svg",
    },
    {
      title: "Spotify Cloan",
      description: "spotify cloan made by me",
      bgColor: "bg-blue-500",
      img: "/spotify_s.svg",
    },
    {
      title: "Comming soon ",
      description: "More projects coming soon",
      bgColor: "bg-green-500",
      img: "/soon.svg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full h-[80vh]">
      <div className="relative h-[80vh] overflow-hidden rounded-lg">
        { cards.map((card, index) => (
          <div
            key={ index }
            className={ `absolute w-full h-full sm:flex items-center justify-center transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }` }
          >
            <div className={ `sm:w-[80vw] w-full h-[50vh] sm:flex p-6 rounded-xl shadow-lg text-white m-auto justify-center items-center ` }>
              <div className="sm:w-[200vw] sm:h-[58vh] h-[50vh] flex justify-center items-center ">
                <div>
                <img src={ card.img } alt="" className="sm:absolute sm:w-[45vw] sm:h-[53vw] top-[0vh] left-[13vw]" /> 
                </div>
              </div>
              <div className=" flex-col justify-center items-center w-full ">
                <h2 className="text-2xl font-bold text-center">{ card.title }</h2>
                <p className="mt-2 text-center">{ card.description }</p>
              </div>
            </div>
          </div>
        )) }
      </div>

      {/* Dots Navigation */ }
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        { cards.map((_, index) => (
          <button
            key={ index }
            onClick={ () => setCurrentIndex(index) }
            className={ `w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }` }
            aria-label={ `Slide ${index + 1}` }
          />
        )) }
      </div>

      {/* Prev & Next Buttons */ }
      <button
        onClick={ prevSlide }
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </span>
      </button>
      <button
        onClick={ nextSlide }
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </span>
      </button>
    </div>
  );
}
