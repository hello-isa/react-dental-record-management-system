import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

function AddVisitModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px] flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            <IoMdCloseCircleOutline />
          </button>
          <div className="bg-white p-2 rounded-md">Modal</div>
        </div>
      </div>
    </>
  );
}

export default AddVisitModal;
