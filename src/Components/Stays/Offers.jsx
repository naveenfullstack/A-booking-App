import React from "react";

export default function Offers() {
  return (
    <div className="text-black flex justify-center items-center">
      <div className="w-full max-w-default px-4">
        <p className="text-title font-semibold pt-8">Offers</p>
        <p className="text-secondary text-header pb-4">
          These popular destinations have a lot to offer
        </p>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="border flex rounded-lg">
            <div className="p-4 w-[33rem] space-y-2">
              <p className="font-semibold text-header">
                Take your longest vacation yet
              </p>
              <p className="text-subtitle3">
                Browse properties offering long-term stays, many at reduced
                monthly rates.
              </p>
              <button className="bg-primary py-2 px-4 text-white rounded-default hover:bg-button_hover">
                Find a stay
              </button>
            </div>
            <div>
              <img
                className="w-[17rem] rounded-r-lg"
                alt="imag"
                src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
              />
            </div>
          </div>

          <div
            className="border flex rounded-lg text-white"
            style={{
              backgroundImage:
                "url('https://r-xx.bstatic.com/xdata/images/xphoto/714x300/261387541.jpeg?k=80d1571cedd0a363b9d9b78207914af9b1490c6a859cacd8dc090c866d1bbc94&o=')",
            }}
          >
            <div className="p-4 w-[33rem] space-y-2">
              <p className="font-semibold text-header">
                Save 15% with Late Escape Deals
              </p>
              <p className="text-subtitle3 max-w-[350px]">
                Explore thousands of destinations worldwide and save 15% or more
              </p>
              <button className="bg-primary py-2 px-4 text-white rounded-default hover:bg-button_hover">
                Find Late Escape Deals
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
