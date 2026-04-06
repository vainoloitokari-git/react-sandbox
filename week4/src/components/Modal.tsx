import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-xl shadow-2xl w-80"
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-800 font-bold py-2 rounded hover:bg-gray-300 mt-6"
        >
          Close Window
        </button>
      </div>
    </div>
  );
};

export default Modal;
