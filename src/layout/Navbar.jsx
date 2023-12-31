import React from "react";

const Navbar = () => {
  return (
    <container className="w-full flex justify-center ">
      <div className="w-[90%] py-7 max-w-[1300px] flex items-center font-ProtoMono justify-between">
        <div className="flex gap-10 items-center">
          <img src="/images/logo.png" className="w-[100px]" alt="logo" />
        </div>

        <ul className="flex gap-[32px] text-white">
          <li>
            <a href="#" className="text-[#FF5101]">
              Home
            </a>
          </li>
          <li>
            <a href="#">Governance</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">+</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">+</a>
          </li>
          <li>
            <a href="#">Roadmap</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
        </ul>

        <div className="flex gap-3">
          <button className="text-white border text-[13px] border-white py-2 px-5 rounded-full">
            GO TO APP
          </button>
          <button className="text-white border text-[13px] border-white py-2 px-5 rounded-full">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </container>
  );
};

export default Navbar;
