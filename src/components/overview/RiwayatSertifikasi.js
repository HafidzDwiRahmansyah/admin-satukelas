"use client";

import { useState, useEffect } from "react";

export default function RiwayatSertifikasi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data.riwayat_sertifikat))
      .catch((error) => console.error("error fetching data:", error));
  }, []);

  const getStatusStyle = (status) => {
    if (status === "Belum Lulus") {
      return "text-red-600 bg-red-100";
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

  return (
    <div className="p-4">
      <h3 className="pb-3 poppins-semibold">
        <b>Riwayat Sertifikasi yang Diikuti</b>
      </h3>
      <table className="w-full rounded-md">
        <thead>
          <tr className="bg-white">
            <th className="px-6 py-2 border-b border-gray-400 fs-14 poppins-medium">
              No
            </th>
            <th className="text-left py-2 border-b border-gray-400 fs-14 poppins-medium">
              Judul Program
            </th>
            <th className="py-2 border-b border-gray-400 fs-14 text-left poppins-medium">
              Nama Anggota
            </th>
            <th className="py-2 border-b border-gray-400 fs-14 text-left poppins-medium">
              Rombel
            </th>
            <th className="px-6 py-2 border-b border-gray-400 fs-14 poppins-medium">
              Tanggal Pendaftaran
            </th>
            <th className="text-left px-6 py-2 border-b border-gray-400 fs-14 poppins-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
            >
              <td className="text-center py-2">{item.id}</td>
              <td className="text-left py-2 text-blue-600 fs-14 poppins-regular">
                {item.judul}
              </td>
              <td className="text-left py-2 text-blue-600 fs-14 poppins-regular">
                {item.anggota.length > 31
                  ? item.anggota.slice(0, 22) + "..."
                  : item.anggota}
              </td>
              <td className="text-left py-2 fs-14 poppins-regular">
                {item.rombel}
              </td>
              <td className="text-center py-2 fs-14 poppins-regular">
                {item.tanggal}
              </td>
              <td className="text-left py-2">
                {renderStatus(item.status)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center mx-auto">
        <a
          className="mx-auto text-center poppins-reguler fs-14 py-2 text-blue-400"
          href=""
        >
          Lihat Selengkapnya
        </a>
      </div>
    </div>
  );
}
