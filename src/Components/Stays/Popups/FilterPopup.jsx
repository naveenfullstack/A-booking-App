import React from "react";
import { IoIosAdd, IoMdRemove } from "react-icons/io";

export default function FilterPopup({
  closeFilterPopup,
  updateFilterValues,
  adults,
  children,
  rooms,
  incrementAdults,
  incrementChildren,
  incrementRooms,
  decrementAdults,
  decrementChildren,
  decrementRooms,
}) {
  //   const [adults, setAdults] = useState(initialAdults || 2);
  //   const [children, setChildren] = useState(initialChildren || 0);
  //   const [rooms, setRooms] = useState(initialRooms || 1);

  const handleDone = () => {
    // Call the callback function in the parent component to update values
    updateFilterValues(adults, children, rooms);
    closeFilterPopup();
  };

  const handleDoneAndClose = () => {
    // First, call handleDone to update values
    handleDone();

    // Then, call closeFilterPopup to close the popup
    closeFilterPopup();
  };

  return (
    <div className="bg-white w-[25rem] text-black p-4 rounded-lg space-y-4">
      <div className="flex items-center">
        <div className="w-3/5">
          <p className="text-header font-semibold">Adults</p>
        </div>
        <div className="w-2/5 flex justify-end">
          <div className="flex items-center space-x-5 p-2 border rounded-default border-black/[.40]">
            <IoMdRemove
              className="text-[1.3rem] text-primary cursor-pointer"
              onClick={decrementAdults}
            />
            <p>{adults}</p>
            <IoIosAdd
              className="text-[1.3rem] text-primary cursor-pointer"
              onClick={incrementAdults}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-3/5">
          <p className="text-header font-semibold">Children</p>
        </div>
        <div className="w-2/5 flex justify-end">
          <div className="flex items-center space-x-5 p-2 border rounded-default border-black/[.40]">
            <IoMdRemove
              className="text-[1.3rem] text-primary cursor-pointer"
              onClick={decrementChildren}
            />
            <p>{children}</p>
            <IoIosAdd
              className="text-[1.3rem] text-primary cursor-pointer"
              onClick={incrementChildren}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-3/5">
          <p className="text-header font-semibold">Rooms</p>
        </div>
        <div className="w-2/5 flex justify-end">
          <div className="flex items-center space-x-5 p-2 border rounded-default border-black/[.40]">
            <IoMdRemove
              className="text-[1.3rem] text-primary cursor-pointer"
              onClick={decrementRooms}
            />
            <p>{rooms}</p>
            <IoIosAdd
              className="text-[1.3rem] text-primary cursor-pointer"
              onClick={incrementRooms}
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleDoneAndClose}
        className="border p-2 w-full rounded-default text-header font-semibold text-primary border-primary"
      >
        Done
      </button>
    </div>
  );
}
