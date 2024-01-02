import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center bg-[#0E0E0E] py-[200px] items-center relative">
      <div className="contain flex flex-col lg:flex-row gap-y-16">
        <div className="w-full flex flex-col  items-center lg:items-left justify-center text-center gap-4">
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

        <div className="w-full flex flex-col items-center justify-center text-center gap-3 lg:mx-10">
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

        <div className="w-full flex flex-col items-center justify-center text-center gap-16">
          <div className="">
            <span className="text-[#888] font-ProtoMono text-lg leading-[27px]">
              CONTACT US
            </span>
            <h3 className="font-ProtoMono text-[32px] sm:text-[40px] leading-[60px] text-white">
              @ONS.DOMAINS
            </h3>
          </div>
          <div>
            <span className="text-[#888] font-ProtoMono text-lg leading-[27px]">
              DROP US MESSAGE
            </span>
            <h3 className="font-ProtoMono text-[32px] sm:text-[40px] leading-[60px] text-white">
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
      <a
        href="#"
        className="absolute cursor-pointer bottom-20 right-50 lg:right-20"
      >
        <img src="/images/arrow-up.svg" alt="UP" />
      </a>
    </div>
  );
};

export default Footer;
