import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 overflow-y-auto transition-opacity ease-out duration-300 "
    : "";
  const overlayClasses = isOpen
    ? "fixed inset-0 bg-black bg-opacity-50 transition-opacity ease-out duration-300"
    : "opacity-0";

  return (
    <>
      {isOpen ? (
        <div className={modalClasses} style={{ zIndex: 50 }}>
          <div className={overlayClasses} onClick={onClose}></div>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-dime p-8 w-full max-w-md mx-auto rounded-lg shadow-md">
              {children}
              <button
                onClick={onClose}
                className="cursor-pointer p-3 bg-red border border-red hover:bg-opacity-0 hover:text-red text-white rounded-md w-full mt-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
