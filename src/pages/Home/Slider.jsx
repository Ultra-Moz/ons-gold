import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const Slider = () => {
  return (
    <div className="wrapper">
      <div className="contain">
        {/* Slider */}
        <Splide
          hasTrack={false}
          options={{ type: "loop", gap: 48 }}
          className="relative w-full max-w-[1250px] mx-auto"
        >
          <div className="splide__arrows flex flex-col absolute -top-[70px] right-0 gap-8">
            <button className="splide__arrow--prev rotate-180">
              <svg
                width="99"
                height="99"
                viewBox="0 0 99 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="48.3649"
                  cy="48.3649"
                  r="47.8649"
                  transform="matrix(-1 0 0 1 97.7854 0.160828)"
                  stroke="#CCCCCC"
                />
                <path
                  d="M58.1262 63.6081L40.7148 48.9127L58.1262 33.4433"
                  stroke="#CCCCCC"
                />
              </svg>
            </button>

            <button className="splide__arrow--next rotate-180">
              <svg
                width="99"
                height="99"
                viewBox="0 0 99 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="48.3649"
                  cy="48.3649"
                  r="47.8649"
                  transform="matrix(-1 0 0 1 97.7854 0.160828)"
                  stroke="#CCCCCC"
                />
                <path
                  d="M58.1262 63.6081L40.7148 48.9127L58.1262 33.4433"
                  stroke="#CCCCCC"
                />
              </svg>
            </button>
          </div>

          <ul
            className="splide__pagination splide__pagination--ltr mb-10 justify-start p-0"
            role="tablist"
            aria-label="Select a slide to show"
          ></ul>

          <SplideTrack className="!overflow-visible">
            <SplideSlide>
              <img
                src="/images/slider-1.png"
                alt="slider-1"
                className="w-full"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/images/slider-2.png"
                alt="slider-2"
                className="w-full"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="/images/slider-3.png"
                alt="slider-3"
                className="w-full"
              />
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
    </div>
  );
};

export default Slider;
