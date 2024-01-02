import React from "react";

const Stats = () => {
  return (
    <div className="wrapper bg-[#0E0E0E]">
      <div className="contain min-h-[680px] flex flex-col gap-24 justify-center">
        <h3 className="text-center font-ProtoMono text-[35px] md:text-[50px] xl:text-[60px] leading-[66px] text-white mt-10 px-5">
          ONS is the most widely integrated blockchain naming standard.
        </h3>
        <div className="flex-col lg:flex-row flex gap-10 mx-auto lg:mx-0 lg:justify-around mb-10 text-center lg:text-left">
          <div>
            <h5 className="text-[#FF5101] font-ProtoMono text-[80px] md:text-[85px] lg:text-[100px] leading-[100px]">
              2.58M
            </h5>
            <p className="font-ProtoMono text-[18px] lg:text-[22px] leading-[33px] text-white">
              NAMES
            </p>
          </div>
          <div>
            <h5 className="text-[#FF5101] font-ProtoMono text-[80px] md:text-[85px] lg:text-[100px] leading-[100px]">
              574
            </h5>
            <p className="font-ProtoMono text-[18px] lg:text-[22px] leading-[33px] text-white">
              INTEGRATIONS
            </p>
          </div>
          <div>
            <h5 className="text-[#FF5101] font-ProtoMono text-[80px] md:text-[85px] lg:text-[100px] leading-[100px]">
              745k
            </h5>
            <p className="font-ProtoMono text-[18px] lg:text-[22px] leading-[33px] text-white">
              OWNERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
