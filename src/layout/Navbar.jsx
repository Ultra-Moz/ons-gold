import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navVariants = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transformOrigin: "top",
    transition: {
      duration: 0.6,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 1, 1],
    },
  },
};

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <container
      className={`w-full flex justify-center fixed ${
        isScrolled ? "bg-[rgb(118,116,116)]" : "bg-transparent"
      } z-10`}
    >
      <div className="w-[90%] py-7 max-w-[1300px] flex items-center font-ProtoMono justify-between">
        <div className="flex gap-10 items-center">
          <img src="/images/logo.png" className="w-[100px]" alt="logo" />
        </div>

        <ul className="hidden xl:flex gap-[32px] text-white">
          <li>
            <a href="#" className="text-[#FF5101] ">
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
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Roadmap</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
        </ul>

        <div className="gap-3 hidden xl:flex">
          <button className="text-white border text-[13px] border-white py-2 px-5 rounded-full">
            GO TO APP
          </button>
          <button className="text-white border text-[13px] border-white py-2 px-5 rounded-full">
            CONNECT WALLET
          </button>
        </div>
        <img
          src={isOpen ? "/images/close.svg" : "/images/hammenu-icon.svg"}
          alt="Open"
          className="block xl:hidden w-[40px] cursor-pointer z-10"
          onClick={() => setIsOpen(!isOpen)}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed w-[350px] h-[100dvh] right-0 top-0 bg-[#555555] px-12 py-20"
              variants={navVariants}
              animate="animate"
              initial="initial"
              exit="exit"
            >
              <ul className="flex flex-col gap-[20px] text-white">
                <li>
                  <a href="#" className="text-[#FF5101] ">
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
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
              </ul>

              <div className="gap-3 flex flex-col mt-7">
                <button className="text-white border text-[13px] border-white py-2 px-5 rounded-full">
                  GO TO APP
                </button>
                <button className="text-white border text-[13px] border-white py-2 px-5 rounded-full">
                  CONNECT WALLET
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </container>
  );
};

export default Navbar;
