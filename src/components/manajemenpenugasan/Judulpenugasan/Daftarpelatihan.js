"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Pelatihan() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/data")
            .then((response) => response.json())
            .then((data) => setData(data.daftar_pelatihan))
            .catch((error) => console.error("error fetching data:", error));
    }, []);

    return (
        <div className="container">
            <div className="card border border-gray-200 p-4">
                <div className="flex justify-between">
                    <div className="block-1">
                        <h2 className="poppins-semibold">Daftar Pelatihan</h2>
                        <p className="poppins-regular">10 Pelatihan ditugaskan</p>
                    </div>
                    <div className="block-2 flex gap-4">
                        <button className="poppins-semibold bg-red-600 text-white rounded-md px-4">Hapus</button>
                        <button className="poppins-semibold bg-blue-600 text-white rounded-md px-4">+ Tambah</button>
                    </div>
                </div>
                <div className="flex">
                    <table className="w-full my-4">
                        <thead>
                            <tr className="border-b border-gray-400 py-2">
                                <th>
                                    <input type="checkbox" />
                                </th>
                                <th className="text-left px-4 py-2">Judul Pelatihan</th>
                                <th className="text-left px-4 py-2">Kategori</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                                    <td className="text-center py-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-left text-blue-500 py-2">
                                        {item.judul.length > 31 ? item.judul.slice(0, 31) + "..." : item.judul}
                                    </td>
                                    <td className="px-4 py-2">{item.kategori}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}