"use client";

import { useState } from "react";
import Image from "next/image";
import Successmembuatcourse from '@/components/popup/pelatihan/Successmembuatcourse';

export default function ConfirmationCourse({ isOpen, onClose, onConfirm }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = () => {
    onClose();
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
          onClick={onClose}>
          <div
            className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6 text-center"
            onClick={(e) => e.stopPropagation()}>
            <Image
              className="img-fluid mx-auto py-4"
              alt="icons_success"
              src="/images/icons/confirmation_blue.svg"
              width={100}
              height={113}
            />
            <h2 className="text-xl poppins-bold text-gray-800 pt-6">
              Apakah Anda Yakin untuk Membuat Course Baru ?
            </h2>
            <p className="text-gray-600 poppins-regular fs-14 mx-6 my-2">
              Anda akan membuat course dengan judul
              <span className="poppins-semibold"> Judul Course </span>
            </p>
            <div className="grid grid-cols-2 gap-4 flex">
              <div className="flex flex-col">
                <button
                  onClick={handleConfirm}
                  className="mt-4 px-10 py-2 bg-blue-700 text-white poppins-semibold rounded hover:bg-blue-600">
                  Ya
                </button>
              </div>
              <div className="flex flex-col">
                <button
                  onClick={onClose}
                  className="mt-4 px-10 py-2 bg-gray-200 text-gray-600 poppins-semibold rounded hover:bg-gray-300">
                  Tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Successmembuatcourse isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}