import React from "react";

const Description = () => {
  const domains = [".COM", ".ORG", ".IO", ".APP", ".XYZ", ".ART"];
  return (
    <div className="wrapper">
      <div className="contain grid grid-cols-1 lg:grid-cols-3 place-items-center lg:place-items-start gap-y-12 gap-8 py-[80px] sm:py-[110px]  md:py-[140px] xl:py-[160px]">
        <div className="flex flex-col gap-3 px-5">
          <span className="font-DMSans text-[#181818] text-[80px] leading-[88px] text-outline text-outline-orange min-h-[104px] shrink-0">
            01
          </span>
          <h5 className="text-white leading-[34.5px] font-ProtoMono text-[23px] max-w-[370px]">
            One Name For All of Your Addresses
          </h5>
          <p className="text-[#999] leading-[24px] max-w-[370px] font-ProtoMono">
            No more copying and pasting long addresses. Use your ONS name to
            store all of your addresses and receive any cryptocurrency, token,
            or NFT.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:mt-[54px] px-5">
          <span className="font-DMSans text-[#181818] text-[80px] leading-[88px] text-outline text-outline-orange min-h-[104px] shrink-0">
            02
          </span>
          <h5 className="text-white leading-[34.5px] font-ProtoMono text-[23px] max-w-[370px]">
            Decentralised Websites
          </h5>
          <p className="text-[#999] leading-[24px] max-w-[370px] font-ProtoMono">
            Launch censorship-resistant decentralised websites with ONS. Upload
            your website to IPFS and access it with your ONS name.
          </p>
        </div>
        <div className="flex flex-col gap-3 px-5">
          <span className="font-DMSans text-[#181818] text-[80px] leading-[88px] text-outline text-outline-orange min-h-[104px] shrink-0">
            03
          </span>
          <h5 className="text-white leading-[34.5px] font-ProtoMono text-[23px] max-w-[370px]">
            Use Traditional Domains
          </h5>
          <p className="text-[#999] leading-[24px] max-w-[370px] font-ProtoMono">
            The native name suffix for ENS is .ETH, which has the full security
            benefits of being blockchain-native.
          </p>
          <p className="text-[#999] leading-[24px] max-w-[370px] font-ProtoMono mt-4">
            You can also use ENS with DNS names you already own. ENS supports
            most DNS names, including:
          </p>
          <div className="grid max-w-[300px] grid-cols-3 gap-y-4 gap-x-5 font-ProtoMono">
            {domains.map((domain, index) => {
              return (
                <div
                  key={index}
                  className="text-white rounded-[12px] border-2 border-solid border-white px-[16px] py-[8px] flex justify-center items-center"
                >
                  {domain}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
