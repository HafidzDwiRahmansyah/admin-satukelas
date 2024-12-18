"use client";
import React, { useState } from "react";
import ConfirmationTambahRombel from "./ConfirmationTambahRombel";

const ModalTambahRombel = () => {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(true);

  // Fungsi untuk membuka modal konfirmasi
  const handleSelanjutnyaClick = () => {
    setConfirmationVisible(true);
    setModalVisible(false);
  };

  // Fungsi untuk kembali ke modal utama
  const handleCloseConfirmation = () => {
    setConfirmationVisible(false);
    setModalVisible(true);
  };

  // Fungsi untuk menutup semua modal
  const closeAllModals = () => {
    setConfirmationVisible(false);
    setModalVisible(false);
  };

  return (
    <div>
      {/* Modal Tambah Rombel */}
      {isModalVisible && (
        <div>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeAllModals} // Menutup modal saat overlay diklik
          ></div>

          {/* Kontainer Modal */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg z-50 w-11/12 max-w-3xl">
            <div className="p-4">
              {/* Header Modal */}
              <div className="flex justify-between items-center">
                <h1 className="poppins-bold text-lg">Tambah Rombongan Belajar</h1>
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={closeAllModals}
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-400 poppins-regular text-sm mt-2">
                Tentukan nama rombongan belajar dan pilih anggota untuk
                ditambahkan ke dalam rombongan belajar ini.
              </p>
            </div>

            {/* Konten Form */}
            <div className="p-4">
              {/* Nama Rombel */}
              <div className="form-group mb-4">
                <label
                  className="poppins-semibold text-sm"
                  htmlFor="nama-rombel"
                >
                  Nama Rombel
                </label>
                <input
                  id="nama-rombel"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  placeholder="Masukkan Nama Rombongan Belajar"
                />
              </div>

              {/* Cari Anggota */}
              <div className="form-group mb-4">
                <label
                  className="poppins-semibold text-sm"
                  htmlFor="cari-anggota"
                >
                  Pilih Anggota
                </label>
                <input
                  id="cari-anggota"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  placeholder="Cari Nama Anggota"
                />
              </div>

              <p className="poppins-regular text-sm mb-4">
                Terpilih <span className="poppins-semibold">5</span> dari 42
                Anggota
              </p>

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
                  <tr>
                    <td className="py-2 text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="px-4 py-2">Arifa Trinugrahaeni</td>
                    <td className="px-4 py-2">Creative Production</td>
                    <td className="px-4 py-2">Staff</td>
                    <td className="px-4 py-2">Sertifikasi Brevet AB</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end mt-4">
                <button
                  className="bg-blue-600 text-white poppins-semibold rounded-md shadow-md px-4 py-2"
                  onClick={handleSelanjutnyaClick}
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isConfirmationVisible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
          <ConfirmationTambahRombel
            isVisible={isConfirmationVisible}
            onClose={handleCloseConfirmation}
          />
        </div>
      )}
    </div>
  );
};

export default ModalTambahRombel;
