import React, { useState, useRef } from "react";
import { LuBedDouble } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";
import DateRangePopup from "../Stays/Popups/DateRangePopup";
import FilterPopup from "../Stays/Popups/FilterPopup";

export default function StaysSearch() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const popupRef = useRef();
  const filterPopupRef = useRef();

  // Function to update filter values
  const updateFilterValues = (newAdults, newChildren, newRooms) => {
    setAdults(newAdults);
    setChildren(newChildren);
    setRooms(newRooms);
  };

  const openPopup = () => {
    setPopupVisible(true);
    setFilterVisible(false);
  };

  const openFilterPopup = () => {
    setFilterVisible(true);
    setPopupVisible(false);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const closeFilterPopup = () => {
    setFilterVisible(false);
  };

  const handleDateSelect = (startDate, endDate) => {
    setCheckInDate(startDate);
    setCheckOutDate(endDate);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
    if (
      filterPopupRef.current &&
      !filterPopupRef.current.contains(event.target)
    ) {
      closeFilterPopup();
    }
  };

  // Listen for clicks outside of the popups
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  const incrementAdults = () => {
    setAdults(adults + 1);
  };

  const incrementChildren = () => {
    setChildren(children + 1);
  };

  const incrementRooms = () => {
    const maxRooms = 10; // Change this to your desired maximum limit
    if (rooms < maxRooms) {
      setRooms(rooms + 1);
    }
  };

  const decrementAdults = () => {
    if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  const decrementChildren = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const decrementRooms = () => {
    if (rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  return (
    <div className="bg-primary flex justify-center text-white">
      <div className="max-w-default w-full px-4">
        <div className="py-10">
          <p className="capitalize lg:text-MailTitle sm:text-[2rem] md:text-[2rem] font-semibold font-sans">
            Find your next stay
          </p>
          <p className="capitalize">
            Search deals on hotels, homes, and much more...
          </p>
        </div>

        <div>
          <div className="bg-search_bg lg:p-1 sm:p-2 text-black rounded-default space-x-1 items-center sm:grid md:grid lg:flex grid-cols-1 sm:gap-2 md:gap-2 lg:gap-0">
            <div className="bg-white flex items-center space-x-2 p-3 w-full rounded-default w-full">
              <LuBedDouble className="text-title text-black/[.60]" />
              <input
                className="outline-none w-full"
                type="text"
                placeholder="Where are you going ?"
              />
            </div>
            <div
              onClick={() => openPopup()}
              className="bg-white w-full rounded-default"
            >
              <div className="flex items-center space-x-2 p-3">
                <FaRegCalendarAlt className="text-title text-black/[.60]" />
                <div className="flex items-center space-x-2">
                  <p>
                    {checkInDate ? checkInDate.toDateString() : "Check in date"}
                  </p>
                  <p>-</p>
                  <p>
                    {checkOutDate
                      ? checkOutDate.toDateString()
                      : "Check out date"}
                  </p>
                </div>
              </div>

              <div className="absolute top-[22rem]" ref={popupRef}>
                {popupVisible ? (
                  <DateRangePopup
                    onDateSelect={handleDateSelect}
                    initialStartDate={checkInDate}
                    initialEndDate={checkOutDate}
                  />
                ) : null}
              </div>
            </div>
            <div
              onClick={openFilterPopup}
              className="bg-white w-full rounded-default"
            >
              <div className="flex items-center space-x-2 p-3 ">
                <AiOutlineUser className="text-title text-black/[.60]" />
                <div className="flex items-center space-x-2">
                  <p>{adults} Adults</p>
                  <p>-</p>
                  <p>{children} Children</p>
                  <p>-</p>
                  <p>{rooms} Room</p>
                  <div className="flex justify-end w-[2rem]">
                    <BiCaretDown />
                  </div>
                </div>
              </div>

              <div className="absolute top-[22rem]">
                {filterVisible ? (
                  <FilterPopup
                    initialStartDate={checkInDate}
                    initialEndDate={checkOutDate}
                    closeFilterPopup={closeFilterPopup}
                    updateFilterValues={updateFilterValues}
                    adults={adults}
                    children={children}
                    rooms={rooms}
                    incrementAdults={incrementAdults}
                    incrementChildren={incrementChildren}
                    incrementRooms={incrementRooms}
                    decrementAdults={decrementAdults}
                    decrementChildren={decrementChildren}
                    decrementRooms={decrementRooms}
                  />
                ) : null}
              </div>
            </div>

            <div className="bg-primary text-white rounded-default hover:bg-button_hover text-center">
              <button className="p-3 px-5">Search</button>
            </div>
          </div>
        </div>

        <div className="pt-4 flex space-x-4 pb-10">
          <div className="flex items-center space-x-2">
            <input type="checkbox"></input>
            <p>I'm looking for an entire home or apartment</p>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox"></input>
            <p>I'm traveling for work</p>
          </div>
        </div>
      </div>
    </div>
  );
}
