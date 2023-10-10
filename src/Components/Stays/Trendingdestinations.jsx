import React from "react";
import Trending from "../../Json/TrendingDestinations.json";

export default function Trendingdestinations() {
  const firstRowItems = Trending.slice(0, 2);
  const remainingItems = Trending.slice(2);

  return (
    <div className="text-black flex justify-center items-center pt-8">
      <div className="w-full max-w-default px-4">
        <p className="text-title font-semibold">Trending destinations</p>
        <p className="text-secondary text-header">
          Travelers searching for Sri Lanka also booked these
        </p>
        <div className="grid grid-cols-2 gap-2 pt-4">
          {firstRowItems.map((item) => (
            <div
              className="border flex bg-cover h-[16rem] rounded-lg"
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="bg-black/[.40] rounded-lg w-full">
                <div className="p-4 w-full text-white">
                  <p className="text-title font-semibold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 pt-2">
          {remainingItems.map((item) => (
            <div
              className="border flex bg-cover h-[16rem] rounded-lg"
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="bg-black/[.40] rounded-lg w-full">
                <div className="p-4 w-full text-white">
                  <p className="text-title font-semibold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
