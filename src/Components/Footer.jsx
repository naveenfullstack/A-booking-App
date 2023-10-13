import React from "react";
import FooterMain from "../Json/Footer/FooterMain.json";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import MenuItem1 from "../Json/Footer/MenuItemsColumn1.json"
import MenuItem2 from "../Json/Footer/MenuItemsColumn2.json"
import MenuItem3 from "../Json/Footer/MenuItemsColumn3.json"
import MenuItem4 from "../Json/Footer/MenuItemsColumn4.json"
import MenuItem5 from "../Json/Footer/MenuItemsColumn5.json"

export default function Footer() {
  return (
    <div className="pt-8">
      <div className="flex justify-center bg-primary text-white py-4">
        <button className="p-2 px-4 border border-white rounded-default hover:bg-button_hover">
          List your property
        </button>
      </div>

      <div className="text-black flex justify-center items-center bg-primary text-white/[.80] border-t py-4 border-white/[.30]">
        <div className="w-full max-w-default px-4">
          <div className="flex space-x-6 text-subtitle3 justify-center text-header ">
            {FooterMain.map((index) => (
              <div key={index.id}>
                <p className="hover:text-white cursor-pointer">{index.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-black flex justify-center items-center text-black pt-4 pb-4">
        <div className="w-full max-w-default px-4">
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              {MenuItem1.map((index) => (
                <div key={index.id}>
                  <p className="hover:text-primary cursor-pointer">
                    {index.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {MenuItem2.map((index) => (
                <div key={index.id}>
                  <p className="hover:text-primary cursor-pointer">
                    {index.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {MenuItem3.map((index) => (
                <div key={index.id}>
                  <p className="hover:text-primary cursor-pointer">
                    {index.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {MenuItem4.map((index) => (
                <div key={index.id}>
                  <p className="hover:text-primary cursor-pointer">
                    {index.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {MenuItem5.map((index) => (
                <div key={index.id}>
                  <p className="hover:text-primary cursor-pointer">
                    {index.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-black/[.20] flex justify-center text-black/[.70] flex space-x-2 items-center">
        <p>Copyright © 2023</p>
        <AiFillGithub/>
        <a href="https://github.com/naveenfullstack/A-booking-App" target="blank" className="text-sky-700" title="View code using GitHub">A Booking App.</a>
        <p>All rights reserved by</p>
        <AiFillLinkedin/>
        <a href="https://www.linkedin.com/in/naveen-dissanayaka/" target="blank" className="text-sky-700" title="View Linkedin profile">Naveen Dissanayaka</a>
      </div>
    </div>
  );
}
