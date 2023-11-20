import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Datepicker from "tailwind-datepicker-react";

function AddVisitModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };
  const handleCloseDatePicker = (state) => {
    setShowDatePicker(state);
  };
  const options = {};

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px] flex flex-col">
          {/* Close Button */}
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            <IoMdCloseCircleOutline />
          </button>
          {/* Modal content */}
          <div className="bg-white p-2 rounded-md flex">
            {/* Date picker */}
            <div className=" w-72 mr-3">
              <Datepicker
                options={{}}
                onChange={handleChange}
                show={showDatePicker}
                setShow={handleCloseDatePicker}
              />
            </div>
            {/* Visit purpose input box */}
            <div className="w-full">
              <input
                className="w-full pl-3 rounded-lg border border-gray-300 h-10"
                type="text"
                placeholder="Visit Purpose"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddVisitModal;
