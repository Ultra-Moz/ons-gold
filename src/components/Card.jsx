import React from "react";

const Card = ({ number, heading, data }) => {
  return (
    <div className="flex flex-col gap-7 items-center">
      <div className="flex justify-between items-end w-full">
        <span className="font-DMSans text-[22px] leading-[33px] text-white">
          {number}
        </span>
        <span className="text-[#D0D0D0] text-right font-ProtoMono leading-[24px] ">
          {heading}
        </span>
      </div>

      <div className="w-[412px] min-h-[464px] bg-[#555] grid grid-cols-3 place-items-center">
        {data.map((group, index) => {
          return (
            <div key={index} className="flex flex-col justify-center">
              <img
                src={group.image}
                alt={group.name}
                className="w-[90px] aspect-square"
              />
              <span className="text-center text-white text-ellipsis text-[16px] leading-[24px] overflow-hidden max-w-[85px] line-clamp-1 font-Syne">
                {group.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex relative w-full justify-center">
        <div className="w-[60px] aspect-square shrink-0 bg-[#FF5101] rounded-full"></div>
        <div className="flex items-center gap-2 absolute top-1/2 -translate-y-1/2 translate-x-11">
          <span className="text-white text-center text-lg">VIEW ALL</span>
          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5H14V3.5H0V4.5Z"
              fill="white"
            />
          </svg>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
