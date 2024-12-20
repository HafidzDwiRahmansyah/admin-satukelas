"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DaftarPenugasan() {

  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("api/data")
      .then((response) => response.json())
      .then((data) => setData(data.daftarpenugasan))
      .catch((error) => console.error("error fetching data:", error));
  }, []);

  const getStatusStyle = (status) => {
    if (status === "Belum Selesai") {
      return "text-white bg-yellow-500";
    } else if (status === "Berlangsung") {
      return "text-white bg-blue-600";
    } else if (status === "Terlambat") {
      return "text-white bg-red-600";
    } else if (
      status === "Selesai"
    ) {
      return "text-white bg-green-600";
    }
    return "text-gray-600 bg-gray-100";
  };

  const renderStatus = (status) => {
    if (typeof status === 'number') {
      const percentage = Math.min(Math.max(status, 0), 100);
      return (
        <div className="flex gap-2 items-center">
          <div className="text-center poppins-regular fs-14">{percentage}%</div>
        </div>
      );
    } else {
      return (
        <span className={`rounded px-2 py-1 text-sm poppins-semibold ${getStatusStyle(status)}`}>
          {status}
        </span>
      );
    }
  };

  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSelect = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1); // Reset halaman ke 1 setelah mengubah items per page
    setShowDropdown(false); // Menutup dropdown setelah memilih
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev); // Toggle dropdown open/close
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-6 mx-4 bg-white rounded-md shadow-md m-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Daftar Penugasan</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 items-center mb-4">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Cari"
            className="w-full px-4 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="border border-gray-500 text-gray-700 px-4 py-2 rounded flex items-center gap-2">
            <span className="material-icons">
              <Image
                className="img-fluid"
                alt="icon_delete"
                src="/images/icons/filter.svg"
                width={24}
                height={24}
              />
            </span>{" "}
            Filter
          </button>
        </div>

        <div className="flex gap-2 justify-end">
          <button className="border border-gray-500 text-gray-700 px-4 py-2 rounded flex items-center gap-2">
            <span className="material-icons">
              <Image
                className="img-fluid"
                alt="icon_delete"
                src="/images/icons/trash.svg"
                width={16}
                height={16}
              />
            </span>{" "}
            Hapus
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <span className="material-icons">
              <Image
                className="img-fluid"
                alt="icon_delete"
                src="/images/icons/plus.svg"
                width={16}
                height={16}
              />
            </span>{" "}
            Buat Penugasan
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="poppins-regular fs-14">
          Terpilih <span className="poppins-semibold">3</span> dari 7
          penugasan
        </p>
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
                </ul>
              </div>
            )}
          </div>
          <p>data/halaman</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-gray-600 text-sm border-b border-gray-500 leading-normal">
              <th className="py-3 px-6 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </th>
              <th className="py-3 px-6 text-left">Judul Penugasan</th>
              <th className="py-3 px-6 text-left">Jumlah Pelatihan</th>
              <th className="py-3 px-6 text-left">Assigned To</th>
              <th className="py-3 px-6 text-left">Tanggal Penugasan</th>
              <th className="py-3 px-6 text-left">Deadline</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {currentData.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                <td className="py-3 px-6 text-left">
                  <input type={item.checkbox} className="cursor-pointer" />
                </td>
                <td className="py-3 px-6">{item.judul_penugasan}</td>
                <td className="py-3 px-6">{item.jumlah_pelatihan}</td>
                <td className="py-3 px-6">{item.assigned}</td>
                <td className="py-3 px-6">{item.tanggal_penugasan}</td>
                <td className="py-3 px-6">{item.deadline}</td>
                <td className="py-3 px-6 text-center">
                  <button className="px-2 py-2">
                    {renderStatus(item.status)}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          Terdapat <b>{data.length} Penugasan</b> tersedia
        </p>
        <div className="flex items-center gap-1">
          <button
            className="text-gray-600 rounded-md px-2 py-1 text-sm hover:bg-gray-300"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'text-gray-600'
                } rounded-md px-2 py-1 text-sm hover:bg-blue-600 hover:text-white`}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}

          <button
            className="text-gray-600 rounded-md px-2 py-1 text-sm hover:bg-gray-300"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages} // Menonaktifkan tombol jika di halaman terakhir
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}