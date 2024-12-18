"use client";
import Image from "next/image";
import React, { useState } from "react";
import ModalTambahRombel from "@/components/manajemenorganisasi/ModalTambahRombel";

export default function Rombel() {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div className="bg-white shadow rounded-lg p-6 m-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg poppins-semibold">Daftar Rombongan Belajar</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 items-center mb-4">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Cari"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="text-gray-700 px-4 py-1 rounded flex items-center gap-2 border border-gray-500">
            <Image
              className="img-fluid"
              alt="icon_filters"
              src="/images/icons/filter.svg"
              width={24}
              height={24}
            />
            Filter
          </button>
        </div>

        <div className="flex gap-2 justify-end">
          <button className="text-gray-700 px-4 py-1 rounded flex items-center gap-2 border border-gray-500">
            <Image
              className="img-fluid"
              alt="icon_trash"
              src="/images/icons/trash.svg"
              width={16}
              height={16}
            />
            Hapus
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
            onClick={openModal}
          >
            <Image
              className="img-fluid"
              alt="icon_plus"
              src="/images/icons/plus.svg"
              width={12}
              height={12}
            />
            Tambah Rombel
          </button>
        </div>
      </div>

      <table className="w-full rounded-lg">
        <thead>
          <tr className="bg-white">
            <th className="border-b border-gray-400 px-4 py-2">
              <input type="checkbox" aria-label="Select all rows" />
            </th>
            <th className="border-b border-gray-400 px-4 py-2 text-left">
              Nama Rombongan Belajar
            </th>
            <th className="border-b border-gray-400 px-4 py-2 text-center">
              Jumlah Anggota
            </th>
            <th className="border-b border-gray-400 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-50">
            <td className="px-4 py-2 text-center">
              <input type="checkbox" aria-label="Select Tax Learning row" />
            </td>
            <td className="px-4 py-2">Tax Learning</td>
            <td className="px-4 py-2 text-center">2</td>
            <td className="px-4 py-2">
              <button className="text-gray-500 hover:text-blue-500">
                <Image
                  className="img-fluid"
                  alt="icon_edit"
                  src="/images/icons/pencil.svg"
                  width={16}
                  height={16}
                />
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <input
                type="checkbox"
                aria-label="Select Creative Production row"
              />
            </td>
            <td className="px-4 py-2">Creative Production</td>
            <td className="px-4 py-2 text-center">6</td>
            <td className="px-4 py-2">
              <button className="text-gray-500 hover:text-blue-500">
                <Image
                  className="img-fluid"
                  alt="icon_edit"
                  src="/images/icons/pencil.svg"
                  width={16}
                  height={16}
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {isModalVisible && (
        <div className="bg-white rounded-md p-6 m-4">
          <ModalTambahRombel isVisible={isModalVisible} onClose={closeModal} />
        </div>
      )}
    </div>
  );
}
