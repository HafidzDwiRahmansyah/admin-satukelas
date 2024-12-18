"use client";

import { useState } from "react";
import Image from "next/image";

export default function Successmembuatcourse({ isOpen, onClose }) {

    return (
        <>
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
                            src="/images/icons/success_alert.svg"
                            width={100}
                            height={113}
                        />
                        <h2 className="text-xl poppins-bold text-gray-800 pt-6">
                            Selamat!
                        </h2>
                        <p className="text-gray-600 poppins-regular fs-14 mx-6 my-2">
                            Anda Telah Berhasil Membuat Course dengan judul
                            <span className="poppins-semibold"> Judul Course </span>
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-4 px-10 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
