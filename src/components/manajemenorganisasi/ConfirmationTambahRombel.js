"use client";
import React from "react";
import Image from "next/image";

const ConfirmationTambahRombel = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}></div>

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg z-50 w-11/12 max-w-3xl transition-transform">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h1 className="poppins-bold text-lg">Tambah Rombongan Belajar</h1>
          </div>
          <p className="poppins-regular fs-14 my-4">
            <div className="flex bg-blue-200 p-5 rounded-md">
              <Image
                className="img-fluid px-2"
                alt="icons information"
                src="/images/icons/information_blue.svg"
                width={35}
                height={35}
              />
              Apakah anda yakin untuk membuat RomBel
              <span className="poppins-semibold px-1"> nama kelompok </span>
              dengan anggota berikut?
            </div>
          </p>
        </div>

        <div className="p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-400">
                <th className="py-2 text-center">
                  <input type="checkbox" />
                </th>
                <th className="py-2 text-left px-4">Nama</th>
                <th className="py-2 text-left px-4">Divisi</th>
                <th className="py-2 text-left px-4">Posisi</th>
                <th className="py-2 text-left px-4">Membership</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td className="py-2 text-center">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-2">Adhi Prasetya</td>
                <td className="px-4 py-2">Tax Learning</td>
                <td className="px-4 py-2">Staff</td>
                <td className="px-4 py-2">Sertifikasi Brevet AB</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-end mt-4">
            <button
              className="border border-blue-600 text-blue-600 poppins-semibold rounded-md shadow-md px-4 py-2"
              onClick={onClose}>
              kembali
            </button>
            <button
              className="bg-blue-600 text-white poppins-semibold rounded-md shadow-md px-4 py-2 ml-4"
              onClick={onClose}>
              Simpan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationTambahRombel;
