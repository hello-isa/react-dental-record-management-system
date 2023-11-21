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
              {/* Display data */}
              <div className=" border border-gray-300 p-2 rounded-lg">
                <p>
                  <strong>Date:</strong> {rowData.date}
                </p>
              </div>
              <div className=" border border-gray-300 p-2 rounded-lg">
                <p>
                  <strong>Visit Purpose:</strong> {rowData.visit_purpose}
                </p>
              </div>
              <div className=" border border-gray-300 p-2 rounded-lg">
                <p>
                  <strong>Treatment:</strong> {rowData.treatment}
                </p>
              </div>
              <div className=" border border-gray-300 p-2 rounded-lg">
                <p>
                  <strong>Prescription:</strong> {rowData.prescription}
                </p>
              </div>
              <div className=" border border-gray-300 p-2 rounded-lg">
                <p>
                  <strong>Notes:</strong> {rowData.notes}
                </p>
              </div>
            </div>

            <hr className="my-2 border-gray-300 my-6" />

            <div className="grid grid-cols-2 gap-4">
              <div className=" border border-gray-300 p-2 rounded-lg">
                <p>
                  <strong>Total Fee:</strong> {rowData.total_fee}
                </p>
              </div>
              <div className=" border border-gray-300 p-2 rounded-lg">
                <p>
                  <strong>Discount:</strong> {rowData.discount}
                </p>
              </div>
              <div className=" border border-gray-300 p-2 rounded-lg">
                <p>
                  <strong>Amount Paid:</strong> {rowData.amount_paid}
                </p>
              </div>
              <div className=" border border-gray-300 p-2 rounded-lg">
                <p>
                  <strong>Balance:</strong> {rowData.balance}
                </p>
              </div>
            </div>

            <hr className="my-2 border-gray-300 my-6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewModal;
