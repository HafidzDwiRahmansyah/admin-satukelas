"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TambahAnggota() {
    const [activeTab, setActiveTab] = useState("individu");

    const [gender, setGender] = useState("");

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="card rounded-md bg-white m-4 shadow-md w-full">
            <div className="card-body">
                <div className="flex flex-col">
                    <nav className="grid grid-cols-2 text-center">
                        <button
                            onClick={() => setActiveTab("individu")}
                            className={`${activeTab === "individu"
                                ? "text-blue-600 border-b-4 border-blue-600 bg-white rounded-t-md"
                                : "text-gray-600 hover:text-blue-600 hover:border-b-4 hover:border-blue-600 rounded-t-md"
                                } py-4 text-lg font-medium`}>
                            Tambah Individu
                        </button>

                        <button
                            onClick={() => setActiveTab("massal")}
                            className={`${activeTab === "massal"
                                ? "text-blue-600 border-b-4 border-blue-600 bg-white rounded-t-md"
                                : "text-gray-600 hover:text-blue-600 hover:border-b-4 hover:border-blue-600 rounded-t-md"
                                } py-4 text-lg font-medium`}>
                            Tambah Massal
                        </button>
                    </nav>

                    <main className="flex-1 p-6 bg-white rounded-b-md">
                        {activeTab === "individu" && (
                            <section>
                                <h2 className="poppins-semibold">Tambah Individu</h2>
                                <p className="text-gray-400 poppins-regular pt-2 pb-6">Isi form dibawah untuk melakukan registrasikan akun karyawan anda</p>
                                <div className="flex grid grid-cols-2 gap-14">
                                    <div className="flex-col cols-2">
                                        <h2 className="poppins-semibold">Informasi Pribadi</h2>
                                        <p className="text-gray-400 poppins-regular pt-2">Masukan Informasi Pribadi Karyawan.</p>
                                    </div>
                                    <div className="flex-col cols-2">
                                        <div className="form-group py-4">
                                            <label className="block poppins-semibold text-gray-700 mb-2">Role <span className="text-red-500">*</span></label>
                                            <select className="w-full p-3 bg-white hover:bg-white border border-gray-300 rounded-md shadow-smss focus:ring-blue-500 focus:border-blue-500">
                                                <option>Anggota</option>
                                                <option>Admin</option>
                                            </select>
                                        </div>
                                        <div className="form-group py-4">
                                            <label className="block text-gray-700 mb-2 poppins-semibold">Nama Karyawan <span className="text-red-500">*</span></label>
                                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukan Nama Karyawan" />
                                        </div>
                                        <div className="form-group py-4">
                                            <label className="block text-gray-700 mb-2 poppins-semibold">Jenis Kelamin <span className="text-red-500">*</span></label>
                                            <div className="mt-6 flex gap-4">
                                                <div className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        id="male"
                                                        name="gender"
                                                        value="Laki-Laki"
                                                        checked={gender === 'Laki-Laki'}
                                                        onChange={handleGenderChange}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                    />
                                                    <label htmlFor="male" className="ml-2 text-gray-700">Laki-Laki</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        id="female"
                                                        name="gender"
                                                        value="Perempuan"
                                                        checked={gender === 'Perempuan'}
                                                        onChange={handleGenderChange}
                                                        className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                                                    />
                                                    <label htmlFor="female" className="ml-2 text-gray-700">Perempuan</label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-group py-4">
                                            <label className="block text-gray-700 mb-2 poppins-semibold">No. Handphone <span className="text-red-500">*</span></label>
                                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukan No. Handphone" />
                                        </div>
                                    </div>
                                    <div className="flex-col cols-2">
                                        <h2 className="poppins-semibold">Informasi Alamat</h2>
                                        <p className="text-gray-400 poppins-regular pt-2">Masukan Informasi Alamat Karyawan.</p>
                                    </div>
                                    <div className="flex-col cols-2">
                                        <div className="form-group py-4">
                                            <label className="block poppins-semibold text-gray-700 mb-2">Alamat <span className="text-gray-400">(Opsional)</span></label>
                                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukan Alamat" />
                                        </div>
                                        <div className="form-group py-4">
                                            <label className="block poppins-semibold text-gray-700 mb-2">Provinsi <span className="text-gray-400">(Opsional)</span></label>
                                            <select className="w-full p-3 bg-white hover:bg-white border border-gray-300 rounded-md shadow-smss focus:ring-blue-500 focus:border-blue-500">
                                                <option>Jawa Barat</option>
                                                <option>Jawa Tengah</option>
                                            </select>
                                        </div>
                                        <div className="form-group py-4">
                                            <label className="block poppins-semibold text-gray-700 mb-2">Kota/Kabupaten <span className="text-gray-400">(Opsional)</span></label>
                                            <select className="w-full p-3 bg-white hover:bg-white border border-gray-300 rounded-md shadow-smss focus:ring-blue-500 focus:border-blue-500">
                                                <option>Bandung</option>
                                                <option>Bogor</option>
                                            </select>
                                        </div>
                                        <div className="form-group py-4">
                                            <label className="block poppins-semibold text-gray-700 mb-2">Kecamatan <span className="text-gray-400">(Opsional)</span></label>
                                            <select className="w-full p-3 bg-white hover:bg-white border border-gray-300 rounded-md shadow-smss focus:ring-blue-500 focus:border-blue-500">
                                                <option>Marga Asih</option>
                                                <option>Bojong Gede</option>
                                            </select>
                                        </div>
                                        <div className="form-group py-4">
                                            <label className="block poppins-semibold text-gray-700 mb-2">Kelurahan <span className="text-gray-400">(Opsional)</span></label>
                                            <select className="w-full p-3 bg-white hover:bg-white border border-gray-300 rounded-md shadow-smss focus:ring-blue-500 focus:border-blue-500">
                                                <option>Marga Asih</option>
                                                <option>Pasirangin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex-col cols-2">
                                        <h2 className="poppins-semibold">Informasi Pekerjaan</h2>
                                        <p className="text-gray-400 poppins-regular pt-2">Tambahkan Informasi Pekerjaan Karyawan Anda.</p>
                                    </div>
                                    <div className="flex-col cols-2">
                                        <div className="form-group py-4">
                                            <label className="block text-gray-700 mb-2 poppins-semibold">Jabatan <span className="text-red-500">*</span></label>
                                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukan Jabatan" />
                                        </div>
                                        <div className="form-group py-4">
                                            <label className="block text-gray-700 mb-2 poppins-semibold">Divisi <span className="text-red-500">*</span></label>
                                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukan Divisi" />
                                        </div>
                                    </div>
                                    <div className="flex-col cols-2">
                                        <h2 className="poppins-semibold">Informasi Akun</h2>
                                        <p className="text-gray-400 poppins-regular pt-2">Masukan Informasi Akun Untuk Karyawan.</p>
                                    </div>
                                    <div className="flex-col cols-2">
                                        <div className="form-group py-4">
                                            <label className="block text-gray-700 mb-2 poppins-semibold">Email <span className="text-red-500">*</span></label>
                                            <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukan Email" />
                                        </div>
                                        <div className="form-group py-4">
                                            <label className="block text-gray-700 mb-2 poppins-semibold">
                                                Kata Sandi <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="Masukan Kata Sandi"
                                                    id="passwordInput"
                                                />
                                                <span
                                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.806 2.648-3.08 4.917-6.042 5.894M9.882 9.882l4.243 4.243" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.806 2.648-3.08 4.917-6.042 5.894M9.882 9.882l4.243 4.243" />
                                                        </svg>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-group py-4">
                                            <label className="block text-gray-700 mb-2 poppins-semibold">
                                                Konfirmasi Kata Sandi <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="Masukan Kata Sandi"
                                                    id="passwordInput"
                                                />
                                                <span
                                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.806 2.648-3.08 4.917-6.042 5.894M9.882 9.882l4.243 4.243" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-500">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.806 2.648-3.08 4.917-6.042 5.894M9.882 9.882l4.243 4.243" />
                                                        </svg>
                                                    )}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex mt-4 justify-end gap-2">
                                    <a href="/manajemen-organisasi" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md">Kembali</a>
                                    <a href="/manajemen-organisasi" className="bg-blue-600 text-white px-4 py-2 rounded-md">Simpan</a>
                                </div>
                            </section>
                        )}
                        {activeTab === "massal" && (
                            <section>
                                <h2 className="poppins-semibold">Tambah Massal</h2>
                                <p className="text-gray-400 poppins-regular pt-2 pb-6">Unggah file csv untuk menambahkan anggota secara massal</p>
                                <div className="card border-0 shadow rounded-md bg-blue-100 p-4">
                                    <div className="flex">
                                        <Image
                                            className="img-fluid"
                                            alt="Icons Information"
                                            src="/images/icons/information_blue.svg"
                                            width={20}
                                            height={20} />
                                        <h2 className="p-4 poppins-semibold fs-16 text-gray-700">
                                            Cara Tambah Anggota Massal
                                        </h2>
                                    </div>
                                    <div className="card-body flex cols-3 gap-4">
                                        <div className="flex cols-4">
                                            <h1 className="fs-40 poppins-bold text-blue-300 pr-2 pb-2">1</h1>
                                            <p className="poppins-regular fs-14">Pertama Anda harus mengunduh file csv yang berisikan format tabel yang perlu anda isi melalui <a className="text-blue-600" href="">tautan ini</a></p>
                                        </div>
                                        <div className="flex cols-4">
                                            <h1 className="fs-40 poppins-bold text-blue-300 pr-2 pb-2">2</h1>
                                            <p className="poppins-regular fs-14">Isi tabel dalam file csv tersebut dengan data yang anda inginkan, sesuai dengan kolom yang tersedia.</p>
                                        </div>
                                        <div className="flex cols-4">
                                            <h1 className="fs-40 poppins-bold text-blue-300 pr-2 pb-2">3</h1>
                                            <p className="poppins-regular fs-14">Unggah file csv yang telah anda isi dengan menekan Klik untuk unggah yang ada pada  kotak di bawah.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex cols-3 p-4 gap-8">
                                    <div className="flex-col cols-1" style={{ width: "320px" }}>
                                        <h2 className="poppins-semibold text-gray-700">Format</h2>
                                        <p className="fs-14 text-gray-400 py-2">Penambahan user secara massal dapat dilakukan menggunakan template yang telah disediakan. Unduh template pada tautan Unduh Template yang tersedia.</p>
                                        <a className="text-blue-600 poppins-semibold" href="#">Unduh Template</a>
                                    </div>
                                    <div className="flex-col cols-2">
                                        <label className="block text-gray-700 mb-2 poppins-semibold">Unggah File <span className="text-red-500">*</span></label>
                                        <div className="relative h-40 border-2 border-dashed border-gray-400 rounded-lg bg-white hover:bg-gray-50 transition-colors cursor-pointer" style={{ width: "550px" }}>
                                            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                                                <Image
                                                    className="img-fluid"
                                                    alt="Unggah File"
                                                    src="/images/icons/unggah.svg"
                                                    width={40}
                                                    height={40} />
                                                <p className="text-sm font-medium">Klik untuk unggah</p>
                                            </div>
                                        </div>
                                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="flex mt-4 justify-end gap-2">
                                    <a href="/manajemen-organisasi" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md">Kembali</a>
                                    <a href="/manajemen-organisasi" className="bg-blue-600 text-white px-4 py-2 rounded-md">Simpan</a>
                                </div>
                            </section>
                        )}
                    </main>
                </div>
            </div>
        </div >
    );
}