import React from "react";
import Flag from "@/components/Flag";

const exchanges = [
  {
    flag: "PumpFun",
    title: "Buy",
    link: "https://dexscreener.com/solana/4qqm2x2pfhu3toscaqkqxtfhtm7dmje8lgwu9kvqenh4",
  },
  // {
  //   flag: "Binance",
  //   title: "Binance",
  //   link: "https://dexscreener.com/solana/4qqm2x2pfhu3toscaqkqxtfhtm7dmje8lgwu9kvqenh4",
  // },
];

const Exchanges = () => {
  return (
    <div id="exchanges" className="max-w-[85rem] mx-auto py-12">
      <div className="my-16">
        <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center">
          Exchanges
        </h2>
        <h3 className="font-stopbuck text-2xl text-center text-black">
          All Excahnges will list Buy To Hold!
        </h3>
      
      </div>
    </div>
  );
};

export default Exchanges;
