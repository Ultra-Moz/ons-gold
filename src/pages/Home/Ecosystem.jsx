import React from "react";
import card1 from "../../data/card1.json";
import card2 from "../../data/card2.json";
import card3 from "../../data/card3.json";
import Card from "../../components/Card";

const Ecosystem = () => {
  return (
    <div className="wrapper">
      <div className="contain pb-[160px] flex flex-col gap-10">
        <h2 className="text-white font-ProtoMono text-[45px] md:text-[55px] lg:text-[60px] lg:leading-[66px] text-center px-5">
          ENS ECOSYSTEM
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 place-items-center cards-full">
          <Card number={"01"} heading={"WALLETS"} data={card1} />
          <Card number={"02"} heading={"APPS"} data={card2} />
          <Card number={"03"} heading={"BROWSERS"} data={card3} />
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
