import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

export default function ImageSlider() {
  const slides = [
    { image: img1, text: "Make your work easier and organized" },
    { image: img2, text: "Manage tasks and boost productivity" },
    { image: img3, text: "Collaborate and complete projects faster" },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };


  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {/* IMAGE */}
      <img
        src={slides[current].image}
        className="w-195 object-contain mb-0 transition-all duration-500"
      />
      {/* TEXT */}
      <p className="text-lg font-medium text-center whitespace-nowrap mb-8">
        {slides[current].text}
      </p>
      {/* DOTS */}
      <div className="flex gap-2 mb-6">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
      {/* LEFT ARROW*/}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
      >
        <ChevronLeft size={12} />
      </button>
      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
      >
        <ChevronRight size={12} />
      </button>
    </div>
  );
}
