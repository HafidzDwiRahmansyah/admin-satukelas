import React, { useState } from 'react';
import Confirmationcourse from '@/components/popup/pelatihan/Confirmationcourse';

const Tambahmateri = ({ isOpen, onClose }) => {
    // Panggil hook sebelum return dan sebelum kondisi isOpen
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    // Pastikan komponen hanya dirender jika isOpen adalah true
    if (!isOpen) return null;

    // Handler untuk membuka konfirmasi
    const handleSimpan = () => {
        setIsConfirmOpen(true); // Menampilkan konfirmasi
    };

    // Handler untuk menutup modal konfirmasi
    const handleConfirm = () => {
        onClose(); // Menutup modal utama
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={onClose} // Menutup modal ketika area luar di klik
        >
            <div
                className="bg-white rounded-lg shadow-lg p-4 w-1/2"
                onClick={(e) => e.stopPropagation()} // Mencegah klik luar modal untuk menutup
            >
                <h2 className="poppins-semibold text-lg font-bold mb-2">Tambah Materi</h2>
                <p className="poppins-regular text-gray-500 fs-14">
                    Tentukan judul course dan urutan course tersebut ditampilkan
                </p>
                <div className="form-group py-4">
                    <label className="poppins-semibold block text-gray-700 mb-2">Judul</label>
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Masukan judul course"
                    />
                </div>
                <div className="flex-col py-4">
                    <label className="poppins-semibold block text-gray-700 mb-2">Sequence</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="flex justify-end gap-4">
                    <button
                        className="poppins-semibold bg-white hover:bg-white text-blue-500 border rounded-md border-blue-500 font-bold py-2 px-4 rounded"
                        onClick={onClose} // Menutup modal ketika tombol Kembali diklik
                    >
                        Kembali
                    </button>
                    <button
                        className="poppins-semibold bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                        onClick={handleSimpan} // Membuka konfirmasi saat tombol Simpan diklik
                    >
                        Simpan
                    </button>
                </div>
            </div>
            <Confirmationcourse
                isOpen={isConfirmOpen}
                onClose={() => setIsConfirmOpen(false)} // Menutup modal konfirmasi
                onConfirm={handleConfirm} // Menyimpan perubahan dan menutup modal utama
            />
        </div>
    );
};

export default Tambahmateri;
