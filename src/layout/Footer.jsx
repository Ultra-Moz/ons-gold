import React from "react";

const Footer = () => {
  return (
    <div className="wrapper bg-[#0E0E0E]  min-h-[735px] items-center">
      <div className="contain flex ">
        <div className="w-full flex flex-col gap-4">
          <img
            src="/images/logo.png"
            alt="ONS."
            className="w-[90px] min-h-[30px]"
          />
          <h3 className="text-white font-ProtoMono leading-[38.4px] text-[32px] max-w-[350px]">
            Ordinal Name Service
          </h3>
          <p className="text-[#888] font-ProtoMono text-lg leading-[21.6px] max-w-[300px]">
            Decentralised naming for wallets, websites, & more.
          </p>
        </div>

        <div className="w-full flex flex-col gap-3 mx-10">
          <h4 className="text-[22px] leading-[33px] font-ProtoMono text-white ">
            QUICK LINK
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="text-[#FF5101] font-ProtoMono leading-[27px]">
              HOME
            </li>
            <li className="text-white font-ProtoMono leading-[27px]">
              DISCORD
            </li>
            <li className="text-white font-ProtoMono leading-[27px]">
              TELEGRAM
            </li>
            <li className="text-white font-ProtoMono leading-[27px]">
              TWIITER
            </li>
            <li className="text-white font-ProtoMono leading-[27px]">EMAIL</li>
          </ul>
        </div>

        <div className="w-full flex flex-col gap-16">
          <div className="">
            <span className="text-[#888] font-ProtoMono text-lg leading-[27px]">
              CONTACT US
            </span>
            <h3 className="font-ProtoMono text-[40px] leading-[60px] text-white">
              @ONS.DOMAINS
            </h3>
          </div>
          <div>
            <span className="text-[#888] font-ProtoMono text-lg leading-[27px]">
              DROP US MESSAGE
            </span>
            <h3 className="font-ProtoMono text-[40px] leading-[60px] text-white">
              HELLO@ONS.COM
            </h3>
          </div>
          <div>
            <span className="text-[#888] font-ProtoMono leading-[27px]">
              2023 – Ordinal Name Service
            </span>
          </div>
        </div>
      </div>
      {/* <svg
        width="99"
        height="98"
        viewBox="0 0 99 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="49.6349" cy="48.3649" r="47.8649" stroke="#393939" />
        <path
          d="M97.9999 48.3646C97.9999 61.0443 93.0205 73.2168 84.1339 82.2613C75.2473 91.3058 63.1642 96.4987 50.4865 96.722C37.8088 96.9452 25.5504 92.1809 16.3509 83.455C7.15136 74.729 1.74648 62.7393 1.30005 50.0674"
          stroke="#FF5101"
          stroke-width="2"
        />
        <path
          d="M64.7175 57.0705L50.0221 39.6592L34.5527 57.0705"
          stroke="#CCCCCC"
        />
      </svg> */}
    </div>
  );
};

export default Footer;
