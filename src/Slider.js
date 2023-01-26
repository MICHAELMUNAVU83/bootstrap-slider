import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1594717527389-a590b56e8d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1545917992-dea2d782ef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2489&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const previuosSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery">
      <h1 className="text-center p-1">Slider</h1>

      <div className="position-relative d-flex justify-content-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === current ? "opacity-100" : "opacity-0"}
          >
            <FaArrowAltCircleLeft
              className=" text-light opacity-75 position-absolute top-50 start-0 translate-middle-y"
              onClick={previuosSlide}
              size={30}
            />

            {index === current && (
              <img src={slide.image} alt="eaach img" className="img-fluid" />
            )}
            <FaArrowAltCircleRight
              className="text-light opacity-75  position-absolute top-50 end-0 translate-middle-y"
              onClick={nextSlide}
              size={30}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
