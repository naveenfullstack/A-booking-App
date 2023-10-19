import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LuBedDouble } from "react-icons/lu";
import { useIp } from "../Context/IpContext";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { ipAddress } = useIp();

  const userDataString = localStorage.getItem("userData");
  const userData = userDataString ? JSON.parse(userDataString) : {};
  const Token = userData.accessToken;

  const countryCode = ipAddress ? ipAddress.countryCode.toLowerCase() : "us";

  const menuItems = [
    {
      id: 1,
      name: "Stays",
      icon: <LuBedDouble />,
      Url: "/",
    },
    {
      id: 2,
      name: "Car Rentals",
      icon: <LuBedDouble />,
      Url: "/announcements",
    },
    {
      id: 4,
      name: "Airport Taxis",
      icon: <LuBedDouble />,
      Url: "/approval",
    },
  ];

  const logout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  return (
    <div>
      <div className="bg-primary text-white flex justify-center items-center">
        <div className="w-full max-w-default flex py-4 items-center px-4">
          <div className="w-1/5">
            <p className="lg:text-[1.5rem] sm:text-[1rem] md:text-[1rem] font-semibold">A Booking App</p>
          </div>
          <div className="w-4/5 flex justify-end items-center">
            <div className="flex space-x-default items-center">
              <p className="capitalize text-subtitle2 font-medium sm:hidden md:hidden lg:block">USD</p>
              <img
                className="h-[1.3rem] sm:hidden md:hidden lg:block"
                alt="profile"
                src={`https://flagcdn.com/w320/${countryCode}.png`}
              />
              <p className="capitalize text-subtitle2 font-medium sm:hidden md:hidden lg:block">
                list your property
              </p>
              {Token ? (
                <div>
                  {" "}
                  <div
                    onClick={logout}
                    className="flex items-center space-x-[8px] cursor-pointer"
                  >
                    <img
                      className="rounded-full w-[2.2rem]"
                      alt="profile"
                      src={
                        userData.profileImage ||
                        `https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png`
                      }
                    />
                    <div>
                      <p className="font-medium text-header">
                        {" "}
                        {userData.firstname} {userData.lastname}
                      </p>
                      <p className="text-subtitle">{userData.email}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-x-4">
                  <button
                    onClick={() => navigate("/signin")}
                    className="bg-white text-primary py-2 px-4 rounded-default font-medium text-subtitle2"
                  >
                    Register
                  </button>
                  <button
                    onClick={() => navigate("/signin")}
                    className="bg-white text-primary py-2 px-4 rounded-default font-medium text-subtitle2"
                  >
                    Sign in
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="text-white flex justify-center items-center">
          <div className="w-full max-w-default flex items-center px-4 space-x-default">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(item.Url)}
                className={`flex items-center p-2 px-5 rounded-header_button space-x-2 text-default hover:bg-button_hover ${
                  location.pathname === item.Url
                    ? "border border-white/[.40] bg-button_hover"
                    : ""
                }`}
                title={item.name}
              >
                <div className="flex space-x-2 items-center">
                  <div>{item.icon}</div>
                  <div>{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
