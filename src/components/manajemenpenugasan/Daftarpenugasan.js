"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DaftarPenugasan() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("api/data")
      .then((response) => response.json())
      .then((data) => setData(data.daftarpenugasan))
      .catch((error) => console.error("error fetching data:", error));
  }, []);

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
          <button className="flex border border-gray-500 rounded-md px-1 mx-2">
            5
            <Image
              className="img-fluid pl-1"
              alt="dorpdown"
              src="/images/icons/dropdown2.svg"
              width={14}
              height={14}
            />
          </button>
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
            {data.map((item, index) => (
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
                  <button className="">
                    {item.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          Terdapat <b>7 Penugasan</b> tersedia
        </p>
        <div className="flex items-center gap-2">
          <button className="bg-gray-200 text-gray-600 rounded-md px-3 py-1 text-sm hover:bg-gray-300">
            &lt;
          </button>
          <button className="bg-blue-500 text-white rounded-md px-3 py-1 text-sm hover:bg-blue-600">
            1
          </button>
          <button className="bg-gray-200 text-gray-600 rounded-md px-3 py-1 text-sm hover:bg-gray-300">
            2
          </button>
          <button className="bg-gray-200 text-gray-600 rounded-md px-3 py-1 text-sm hover:bg-gray-300">
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}