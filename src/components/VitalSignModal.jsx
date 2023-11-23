import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

function VitalSignModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[400px] flex flex-col">
          {/* Close Button */}
          <button
            className=" text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            <IoMdCloseCircleOutline />
          </button>
          <div className="bg-white p-4 rounded-md">
            {/* Temperature input box */}
            <div className="mb-4">
              <input
                className="w-full  pl-3 rounded-lg border border-gray-300 h-10"
                type="number"
                min={0}
                placeholder="Temperature"
              />
            </div>
            {/* Pulse rate input box */}
            <div className="mb-4">
              <input
                className="w-full  pl-3 rounded-lg border border-gray-300 h-10"
                type="number"
                min={0}
                placeholder="Pulse Rate"
              />
            </div>
            {/* Blood pressure input box */}
            <div className="mb-4">
              <input
                className="w-full  pl-3 rounded-lg border border-gray-300 h-10"
                type="text"
                min={0}
                placeholder="Blood Pressure"
              />
            </div>
            {/* Time input box */}
            <div className="mb-4">
              <input
                className="w-full  pl-3 rounded-lg border border-gray-300 h-10"
                type="time"
                placeholder="Time"
              />
            </div>

            {/* Submit button */}
            <div className="mt-5 flex justify-center">
              <button className="rounded-lg border-2 h-10 w-52  bg-green-400 hover:bg-green-600 text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VitalSignModal;
