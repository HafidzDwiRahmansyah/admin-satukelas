"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function DaftarAnggota() {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showDropdown, setShowDropdown] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data.all_student))
      .catch((error) => console.error("error fetching data:", error));
  }, []);

  // Menghitung total halaman
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Mendapatkan data yang ditampilkan untuk halaman tertentu
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSelect = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1); // Reset halaman ke 1 setelah mengubah items per page
    setShowDropdown(false); // Menutup dropdown setelah memilih
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev); // Toggle dropdown open/close
  };

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Membuat daftar tombol halaman
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-6 mx-4 bg-white rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Daftar Anggota</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Cari"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Filter
          </button>
          <button className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm hover:bg-blue-700">
            + Tambah Student
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <p className="fs-12 poppins-regular text-gray-400">
          Terpilih <span className="poppins-bold text-gray-600">{itemsPerPage}</span> dari {data.length} Anggota
        </p>
        <div className="flex justify-end">
          <div className="flex justify-end text-gray-500 fs-14 poppins-regular">
            <p>Menampilkan</p>
            <div className="relative">
              <button
                className="flex border border-gray-500 rounded-md px-1 mx-2 items-center"
                onClick={toggleDropdown}
              >
                {itemsPerPage}
                <Image
                  className="img-fluid pl-1"
                  alt="dropdown"
                  src="/images/icons/dropdown2.svg"
                  width={14}
                  height={14}
                />
              </button>
              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md">
                  <ul className="text-sm">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect(5)}
                    >
                      5
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect(10)}
                    >
                      10
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelect(15)}
                    >
                      15
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <p>data/halaman</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-gray-600 text-sm border-b border-gray-500 leading-normal">
              <th className="py-3 px-6 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </th>
              <th className="py-3 px-6 text-left">Nama Anggota</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Divisi</th>
              <th className="py-3 px-6 text-left">Posisi</th>
              <th className="py-3 px-6 text-left">Membership</th>
              <th className="py-3 px-6 text-left">Tanggal Kadaluarsa</th>
              <th className="py-3 px-6 text-left">Terakhir Aktif</th>
              <th className="py-3 px-6 text-center"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {currentData.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                <td className="text-center py-2">
                  <input type="checkbox" className="cursor-pointer" />
                </td>
                <td className="px-4 py-2 text-blue-500">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.divisi}</td>
                <td className="px-4 py-2">{item.posisi}</td>
                <td className="px-4 py-2">{item.membership}</td>
                <td className="px-4 py-2">{item.kadaluarsa}</td>
                <td className="px-4 py-2">{item.terakhir_aktif}</td>
                <td className="px-4 py-2">
                  <a href="#">
                    <Image
                      className="img-fluid"
                      alt="pencil icons"
                      src="/images/icons/pencil.svg"
                      width={16}
                      height={16}
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          Terdapat <b>{data.length}</b> Anggota terdaftar
        </p>
        <div className="flex items-center gap-2">
          <button
            className="text-gray-600 rounded-md px-3 py-1 text-sm hover:bg-gray-300"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1} // Menonaktifkan tombol jika di halaman pertama
          >
            &lt;
          </button>

          {/* Menampilkan tombol untuk halaman dinamis */}
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`${
                currentPage === pageNumber ? 'bg-blue-500 text-white' : 'text-gray-600'
              } rounded-md px-3 py-1 text-sm hover:bg-blue-600 hover:text-white`}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}

          {/* Tombol untuk halaman berikutnya */}
          <button
            className="text-gray-600 rounded-md px-3 py-1 text-sm hover:bg-gray-300"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages} // Menonaktifkan tombol jika di halaman terakhir
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
