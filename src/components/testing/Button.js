"use client"
import { useState } from 'react';

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpenModal}
      >
        Buka Modal
      </button>
      <Tambahmateri isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Button;