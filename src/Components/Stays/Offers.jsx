import React from "react";
import OffersData from "../../Json/Offers.json";

export default function Offers() {
  return (
    <div className="text-black flex justify-center items-center">
      <div className="w-full max-w-default px-4">
        <p>Offers</p>
        <p>Promotions, deals, and special offers for you</p>
        <div className="grid grid-cols-2 gap-4">
          {OffersData.map((item) => (
            <div className="border flex" key={item.id}>
              <div className="p-4 w-[33rem]">
                <p>{item.title}</p>
                <p>{item.description}</p>
                <button className="bg-primary py-1 px-4 text-white rounded-default">
                  {item.buttontext}
                </button>
              </div>
              <div>
                {item.image && (
                  <img
                    className="w-[22rem]"
                    alt="imag"
                    src={item.image}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
