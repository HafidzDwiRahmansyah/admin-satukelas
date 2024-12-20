"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Cardpelatihandiikuti() {

    const [data, setData] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        fetch("/api/data")
            .then((response) => response.json())
            .then((data) => setData(data.sertifikasi))
            .catch((error) => console.error("error fetching data:", error));
    }, []);

    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleSelect = (value) => {
        setItemsPerPage(value);
        setCurrentPage(1); // Reset halaman ke 1 setelah mengubah items per page
        setShowDropdown(false); // Menutup dropdown setelah memilih
    };

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev); // Toggle dropdown open/close
    };

    const getStatusStyle = (status) => {
        if (status === "Belum Lulus") {
            return "text-orange-600 bg-orange-100";
        } else if (status === "Lulus Ujian") {
            return "text-blue-600 bg-blue-100";
        } else if (
            status === "Klaim CPTT/CTT" ||
            status === "Sertifikat dalam pengiriman"
        ) {
            return "text-green-600 bg-green-100";
        }
        return "text-gray-600 bg-gray-100";
    };

    const renderStatus = (status) => {
        if (typeof status === 'number') {
            const percentage = Math.min(Math.max(status, 0), 100);
            return (
                <div className="flex gap-2 items-center">
                    <progress value={percentage} max="100" className="w-15 h-1 rounded-md"></progress>
                    <div className="text-center poppins-semibold fs-14">{percentage}%</div>
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
        <section className="p-4">
            <h2 className="poppins-semibold py-2 fs-16">Program Sertifikasi yang diikuti</h2>
            <div className="grid grid-cols-2 gap-4 items-center mb-4">
                <div className="flex gap-4 items-center">
                    <input
                        type="text"
                        placeholder="Cari"
                        className="w-full px-4 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button className="border border-gray-500 text-gray-700 px-4 py-1 rounded flex items-center gap-2">
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
                <div className="flex gap-6 justify-end"></div>
            </div>
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
            <div className="flex">
                <table className="w-full my-4">
                    <thead>
                        <tr className="border-b border-gray-400 py-2">
                            <th>
                                No
                            </th>
                            <th className="text-left px-4 py-2">Judul Program</th>
                            <th className="text-left px-4 py-2">Anggota</th>
                            <th className="text-left px-4 py-2">Rombel</th>
                            <th className="text-left py-2">Tangga Pendaftaran</th>
                            <th className="text-left px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item, index) => (
                            <tr key={item.id} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                                <td className="text-center py-2">
                                    {item.id}
                                </td>
                                <td className="text-left text-blue-500 py-2">
                                    {item.judul.length > 31 ? item.judul.slice(0, 31) + "..." : item.judul}
                                </td>
                                <td className="px-4 py-2 text-blue-500">{item.anggota}</td>
                                <td className="px-4 py-2">{item.rombel}</td>
                                <td className="px-4 py-2">{item.pendaftaran}</td>
                                <td className="px-4 py-2">{renderStatus(item.status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">
                    Terdapat <b>{data.length} Pelatihan</b> yang diikuti
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

                    {/* Tombol untuk halaman berikutnya */}
                    <button
                        className="text-gray-600 rounded-md px-2 py-1 text-sm hover:bg-gray-300"
                        onClick={() => changePage(currentPage + 1)}
                        disabled={currentPage === totalPages} // Menonaktifkan tombol jika di halaman terakhir
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    )
}