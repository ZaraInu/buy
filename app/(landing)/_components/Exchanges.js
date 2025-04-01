import React from "react";
import Flag from "@/components/Flag";

const exchanges = [
  {
    flag: "PumpFun",
    title: "Buy",
    link: "https://dexscreener.com/solana/8j5r6kteet9cm6wamq2mwb2sneu97cz1jtksdg76moon",
  },
  // {
  //   flag: "Binance",
  //   title: "Binance",
  //   link: "https://pump.fun/coin/99b83VR35uBkxkq3XmFhyEvSFfuQKZeXPwNzG4wxpump",
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
