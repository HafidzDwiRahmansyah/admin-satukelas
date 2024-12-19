"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardPelatihan() {
  const [activeTab, setActiveTab] = useState("internal");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data.pelatihansatukelas))
      .catch((error) => console.error("error fetching data:", error));
  }, []);

  return (
    <div className="card rounded-md bg-white m-4 shadow-md w-full">
      <div className="card-body">
        <div className="flex flex-col">
          <nav className="grid grid-cols-2 text-center">
            <button
              onClick={() => setActiveTab("internal")}
              className={`${activeTab === "internal"
                ? "text-blue-600 border-b-4 border-blue-600 bg-white rounded-t-md"
                : "text-gray-600 hover:text-blue-600 hover:border-b-4 hover:border-blue-600 rounded-t-md"
                } py-4 text-lg font-medium`}>
              Pelatihan Internal
            </button>

            <button
              onClick={() => setActiveTab("satukelas")}
              className={`${activeTab === "satukelas"
                ? "text-blue-600 border-b-4 border-blue-600 bg-white rounded-t-md"
                : "text-gray-600 hover:text-blue-600 hover:border-b-4 hover:border-blue-600 rounded-t-md"
                } py-4 text-lg font-medium`}>
              Pelatihan Satukelas
            </button>
          </nav>

          <main className="flex-1 p-6 bg-white rounded-b-md">
            {activeTab === "internal" && (
              <section>
                <div className="flex gap-2 justify-end my-6">
                  <button className="p-4 flex px-4 py-2 border border-gray-500 rounded-md">
                    <Image
                      className="img-fluid mr-2"
                      alt="icons"
                      src="/images/icons/trash.svg"
                      width={16}
                      height={16}
                    />
                    Hapus
                  </button>
                  <Link className="p-4 flex px-4 py-2 bg-blue-600 rounded-md text-white" href="/manajemen-user/buat-pelatihan">
                    <Image
                      className="img-fluid mr-2"
                      alt="icons"
                      src="/images/icons/plus.svg"
                      width={16}
                      height={16}
                    />
                    Tambah Pelatihan
                  </Link>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-end text-gray-500 fs-14 poppins-regular">
                    <p>Menampilkan</p>
                    <button className="flex border border-gray-500 rounded-md items-center px-1 mx-2">
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
                          <input type="checkbox"></input>
                        </th>
                        <th className="text-left px-4 py-2">Judul Pelatihan</th>
                        <th className="text-left px-4 py-2">Kategori</th>
                        <th className="text-left py-2">Peserta</th>
                        <th className="text-left px-4 py-2">Tanggal Dibuat</th>
                        <th className="text-left px-4 py-2">Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-50">
                        <td className="text-center py-2">
                          <input type="checkbox"></input>
                        </td>
                        <td className="px-4 py-2">Product Knowledge</td>
                        <td className="px-4 py-2">Digital Product</td>
                        <td className="px-4 py-2">5</td>
                        <td className="px-4 py-2">23 Des 2024 14:00 WIB</td>
                        <td className="px-4 py-2">
                          <button className="flex bg-blue-700 text-white rounded-md px-4 py-1 items-center">
                            Draft
                            <Image
                              className="img-fluid pl-1"
                              alt="dropdown"
                              src="/images/icons/dropdown_white.svg"
                              width={20}
                              height={20}
                            />
                          </button>
                        </td>
                        <td className="px-4 py-2">
                          <a href="/manajemen-user/edit-pelatihan">
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
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 poppins-regular fs-14">
                    Terdapat{" "}
                    <span className="poppins-semibold">1 Pelatihan</span>{" "}
                    tersedia
                  </p>
                </div>
              </section>
            )}
            {activeTab === "satukelas" && (
              <section>
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
                <div className="flex justify-between">
                  <p className="poppins-regular fs-14">
                    Terpilih <span className="poppins-semibold">1</span> dari 1
                    pelatihan
                  </p>
                  <div className="flex justify-end text-gray-500 fs-14 poppins-regular">
                    <p>Menampilkan</p>
                    <button className="flex border border-gray-500 rounded-md px-1 mx-2 items-center">
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
                        <th className="text-left px-4 py-2">Judul Pelatihan</th>
                        <th className="text-left px-4 py-2">Tipe</th>
                        <th className="text-left px-4 py-2">Kategori</th>
                        <th className="text-left py-2">Jumlah Materi</th>
                        <th className="text-left px-4 py-2">Terdaftar</th>
                        <th className="text-left px-4 py-2">Selesai</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                          <td className="text-center py-2">
                            {item.id}
                          </td>
                          <td className="px-4 py-2 text-blue-500">{item.judul_pelatihan}</td>
                          <td className="text-center py-2">
                            {item.tipe}
                          </td>
                          <td className="px-4 py-2">{item.kategori}</td>
                          <td className="px-4 py-2">{item.jumlah_materi}</td>
                          <td className="px-4 py-2">{item.terdaftar}</td>
                          <td className="px-4 py-2">{item.selesai}</td>
                          <td className="px-4 py-2">
                            <button className="flex bg-blue-700 text-white rounded-md px-4 py-1">
                              {item.detail}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500 poppins-regular fs-14">
                    Terdapat{" "}
                    <span className="poppins-semibold">1 Pelatihan</span>{" "}
                    tersedia
                  </p>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
