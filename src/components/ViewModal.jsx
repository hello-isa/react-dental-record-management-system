import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

function ViewModal({ isVisible, onClose, rowData }) {
  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px] flex flex-col">
          {/* Close Button */}
          <button
            className=" text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            <IoMdCloseCircleOutline />
          </button>
          {/* Modal content */}
          <div className="bg-white p-4 rounded-md">
            <div className="grid grid-cols-2 gap-4">
              <p>
                <strong>Date:</strong> {rowData.date}
              </p>
              <p>
                <strong>Visit Purpose:</strong> {rowData.visit_purpose}
              </p>
              <p>
                <strong>Treatment:</strong> {rowData.treatment}
              </p>
              <p>
                <strong>Balance:</strong> {rowData.balance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewModal;
