"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Cardpelatihandiikuti() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/data")
            .then((response) => response.json())
            .then((data) => setData(data.sertifikasi))
            .catch((error) => console.error("error fetching data:", error));
    }, []);

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
                        {data.map((item, index) => (
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
                                <td className="px-4 py-2">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end">

            </div>
        </section>
    )
}