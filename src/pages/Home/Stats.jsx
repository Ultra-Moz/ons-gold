import React from "react";

const Stats = () => {
  return (
    <div className="wrapper bg-[#0E0E0E]">
      <div className="contain min-h-[680px] flex flex-col gap-24 justify-center">
        <h3 className="text-center font-ProtoMono text-[60px] leading-[66px] text-white">
          ONS is the most widely integrated blockchain naming standard.
        </h3>
        <div className="flex justify-around">
          <div>
            <h5 className="text-[#FF5101] font-ProtoMono text-[100px] leading-[100px]">
              2.58M
            </h5>
            <p className="font-ProtoMono text-[22px] leading-[33px] text-white">
              NAMES
            </p>
          </div>
          <div>
            <h5 className="text-[#FF5101] font-ProtoMono text-[100px] leading-[100px]">
              574
            </h5>
            <p className="font-ProtoMono text-[22px] leading-[33px] text-white">
              INTEGRATIONS
            </p>
          </div>
          <div>
            <h5 className="text-[#FF5101] font-ProtoMono text-[100px] leading-[100px]">
              745k
            </h5>
            <p className="font-ProtoMono text-[22px] leading-[33px] text-white">
              OWNERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
