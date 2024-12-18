"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Ubahprofileorganisasi() {

    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState("/images/icons/Foto.svg"); // Gambar default

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set preview image dengan data dari FileReader
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="card bg-white rounded-md m-4 p-4 w-full">
            <h2 className="poppins-semibold">Silahkan Ubah Informasi Organisasi</h2>
            <p className="text-gray-400 poppins-regular pt-2 pb-6">Isi form dibawah untuk mengubah informasi Organisasi Anda</p>
            <div className="flex grid grid-cols-2">
                <div className="flex-col cols-2">
                    <h2 className="poppins-semibold">Informasi Organisasi</h2>
                    <p className="text-gray-400 poppins-regular pt-2">Silahkan isi informasi Organisasi Anda</p>
                </div>
                <div className="flex-col cols-2">
                    <div className="form-group py-4">
                        <label className="block text-gray-700 mb-2 poppins-semibold">Nama Organisasi</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="PT Satukelas Adhyanpana Nusantara" />
                    </div>
                    <div className="form-group py-4">
                        <label className="block text-gray-700 mb-2 poppins-semibold">Alamat Organisasi</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="No. 65D, Jl. Raya Ragunan No.RT. 12, Ps. Minggu" />
                    </div>
                    <div className="form-group py-4">
                        <label className="block text-gray-700 mb-2 poppins-semibold">Masukan Logo Organisasi</label>
                        <div className="flex gap-4">
                            <div className="flex-col">
                                <Image
                                    className="img-fluid"
                                    alt="upload file"
                                    src={imagePreview}
                                    width={65}
                                    height={71}
                                />
                            </div>

                            <div className="flex-col">
                                <button
                                    onClick={handleButtonClick}
                                    className="px-4 py-2 my-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600"
                                >
                                    + Unggah Logo
                                </button>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>
                        </div>
                        <p className="poppins-regular text-gray-400 fs-14">Unggah file foto dengan format .jpeg atau .png</p>
                    </div>
                </div>
            </div>
            <div className="flex grid grid-cols-2">
                <div className="flex-col cols-2">
                    <h2 className="poppins-semibold">Informasi Kontak</h2>
                    <p className="text-gray-400 poppins-regular pt-2">Tambahkan Informasi Kontak Personal Organisasi Anda</p>
                </div>
                <div className="flex-col cols-2">
                    <div className="form-group py-4">
                        <label className="block text-gray-700 mb-2 poppins-semibold">Nama Kontak Personal</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Budi Hartono" />
                    </div>
                    <div className="form-group py-4">
                        <label className="block text-gray-700 mb-2 poppins-semibold">No Telepon</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="085773736973" />
                    </div>
                    <div className="form-group py-4">
                        <label className="block text-gray-700 mb-2 poppins-semibold">Email</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="budihartono@gmail.com" />
                    </div>
                </div>
            </div>
            <div className="flex mt-4 justify-end gap-2">
                <a href="/manajemen-organisasi" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md">Kembali</a>
                <a href="/manajemen-organisasi" className="bg-blue-600 text-white px-4 py-2 rounded-md">Simpan</a>
            </div>
        </div>
    )
}