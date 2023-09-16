import React, { useState } from 'react';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className=" flex items-center justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <h3 className="text-lg font-bold text-gray-900">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={closeModal}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
