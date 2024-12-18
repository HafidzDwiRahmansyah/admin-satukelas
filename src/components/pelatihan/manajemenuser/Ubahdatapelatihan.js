
"use client"
import { useState, useRef } from "react";
import Image from "next/image";

export default function Editpelatihan() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    // Fungsi untuk menambah kata baru saat tekan Enter
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && input.trim()) {
            setTasks((prevTasks) => [...prevTasks, input.trim()]);
            setInput("");
        }
    };

    // Fungsi untuk menghapus kata berdasarkan index
    const handleRemoveTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState("/images/icons/Foto.svg"); // Gambar default
    const [handoutFile, setHandoutFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);

    const handleFileChange = (event, type = "image") => {
        const file = event.target.files[0];
        if (file) {
            if (type === "image") {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImagePreview(reader.result); // Set preview image dengan data dari FileReader
                };
                reader.readAsDataURL(file);
            } else if (type === "handout") {
                setHandoutFile(file);
            } else if (type === "thumbnail") {
                setThumbnailFile(file);
            }
        }
    };

    const handleButtonClick = (type = "image") => {
        if (type === "image") fileInputRef.current.click();
        if (type === "handout") document.getElementById("upload-handout").click();
        if (type === "thumbnail") document.getElementById("upload-thumbnail").click();
    };

    const removeFile = (type) => {
        if (type === "handout") {
            setHandoutFile(null);
        } else if (type === "thumbnail") {
            setThumbnailFile(null);
        }
    };

    const formatFileSize = (size) => {
        if (size < 1024) {
            return `${size} B`;
        } else if (size < 1024 * 1024) {
            return `${(size / 1024).toFixed(2)} KB`;
        } else {
            return `${(size / (1024 * 1024)).toFixed(2)} MB`;
        }
    };

    return (
        <div className="card bg-white w-full rounded-md p-4">
            <h2 className="poppins-semibold">Ubah Data Pelatihan</h2>
            <p className="text-gray-400 poppins-regular">Isi formulir di bawah Untuk Mengubah Informasi Pelatihan Internal Anda.</p>
            <div className="form-group py-4">
                <label className="block text-gray-700 mb-2">Nama Karyawan <span className="text-red-500">*</span></label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Masukan Nama Karyawan" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex-col py-4">
                    <label className="block text-gray-700 mb-2">Tipe Pelatihan <span className="text-red-500">*</span></label>
                    <select className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>Pelatihan</option>
                        <option>Webinar</option>
                    </select>
                </div>
                <div className="flex-col py-4">
                    <label className="block text-gray-700 mb-2">Kategori <span className="text-red-500">*</span></label>
                    <select className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>Bisnis</option>
                        <option>Manajemen</option>
                    </select>
                </div>
            </div>
            <div className="form-group py-4">
                <label className="block text-gray-700 mb-2">Deskripsi <span className="text-red-500">*</span></label>
                <textarea type="text" rows="6" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Pajak merupakan pendapatan negara yang cukup potensial untuk menunjang keberhasilan pembangunan nasional. DJP mengapresiasi para wajib pajak, baik Orang Pribadi maupun Badan dalam bentuk perusahaan yang taat membayar pajak. Tetapi optimalisasi penerimaan pajak yang dilakukan masih terbentur berbagai kendala dalam jangka pendek, salah satu kendalanya adalah tingginya tunggakan pajak baik yang murni penghindaran pajak ( tax avoidance ), Salah satu upaya untuk mengatasi kendala tersebut adalah dengan menerbitkan Surat Tagihan Pajak (STP). STP dapat dijadikan sebagai indikator untuk penerapan sanksi administrasi. Terbitnya STP ini biasanya disebabkan Wajib Pajak tidak melakukan satu atau beberapa kewajiban pajak yang diamanatkan oleh Undang-Undang. Dengan adanya penerbitan Surat Tagihan Pajak (STP), maka para Wajib Pajak dapat melaksanakan kewajibannya dalam membayar Pajak."
                ></textarea>
            </div>
            <div className="form-group py-4">
                <label className="block text-gray-700 mb-2">Ringkasan <span className="text-gray-400">(Opsional)</span></label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Pajak merupakan pendapatan negara yang cukup potensial untuk menunjang keberhasilan pembangunan nasional." />
            </div>
            <div className="container mx-auto mt-5">
                <div className="form-group py-4">
                    <label className="block text-gray-700 mb-2">
                        Keahlian yang Tercakup <span className="text-gray-400">(Opsional)</span>
                    </label>
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Masukan Keahlian Terkait Pelatihan Ini"
                    />
                </div>
                <p className="poppins-regular text-gray-400 fs-14">
                    Tekan tombol “Enter” untuk Menambahkan Label
                </p>
                <ul className="flex flex-wrap gap-2 mt-5 w-full">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className="flex items-center poppins-regular fs-16 rounded-md px-2 py-1 bg-blue-200 text-blue-700"
                        >
                            <span>{task}</span>
                            <button
                                onClick={() => handleRemoveTask(index)}
                                className="ml-2 text-blue-700 hover:text-blue-500 border border-blue-700 hover:border-blue-500 px-2 rounded-full"
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="form-group py-4">
                <label className="block text-gray-700 mb-2">Nama Instruktur</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="PT Akselerasi Edukasi Internasional" />
            </div>
            <div className="form-group py-4">
                <label className="block text-gray-700 mb-2">Foto Instruktur <span className="text-gray-400">(Opsional)</span></label>
                <div className="flex gap-4">
                    <div className="flex-col">
                        <Image className="img-fluid" alt="upload file" src={imagePreview} width={65} height={71} />
                    </div>
                    <div className="flex-col">
                        <button
                            onClick={() => handleButtonClick("image")}
                            className="px-4 py-2 my-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            + Upload File
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={(e) => handleFileChange(e, "image")}
                            className="hidden"
                        />
                    </div>
                </div>
                <p className="poppins-regular text-gray-400 fs-14">Unggah file foto dengan format .jpeg atau .png</p>
            </div>
            <div className="form-group py-4">
                <label className="block text-gray-700 mb-2 poppins-semibold">Unggah Handout <span className="text-gray-500">(Opsional)</span></label>
                <div
                    className="relative h-40 border-2 border-dashed border-gray-400 rounded-lg bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                    style={{ width: "100%" }}
                    onClick={() => document.getElementById('upload-handout').click()} // Memicu klik input
                >
                    <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                        <Image
                            className="img-fluid"
                            alt="Unggah File"
                            src="/images/icons/unggah.svg"
                            width={40}
                            height={40} />
                        <p className="text-sm font-medium">Klik untuk unggah</p>
                    </div>
                    {handoutFile && (
                        <div className="absolute inset-0 bg-white flex items-center justify-center">
                            <Image
                                className="img-fluid mr-2"
                                alt="delete icons"
                                src="/images/icons/file_blue_unggah.svg"
                                width={24}
                                height={24}
                            />
                            <span className="text-gray-700 text-sm">{handoutFile.name}</span>
                            <span className="text-gray-500 text-sm ml-10">{formatFileSize(handoutFile.size)}</span>
                            <button
                                onClick={() => removeFile("handout")}
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                <Image
                                    className="img-fluid"
                                    alt="delete icons"
                                    src="/images/icons/x_red.svg"
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </div>
                    )}
                </div>
                <input
                    type="file"
                    id="upload-handout" // ID unik untuk input
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    style={{ display: 'none' }} // Disembunyikan untuk mempermudah klik melalui div
                    onChange={(e) => handleFileChange(e, "handout")}
                />
            </div>

            <div className="form-group py-4">
                <label className="block text-gray-700 mb-2 poppins-semibold">Thumbnail <span className="text-gray-500">(Opsional)</span></label>
                <div
                    className="relative h-40 border-2 border-dashed border-gray-400 rounded-lg bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                    style={{ width: "100%" }}
                    onClick={() => document.getElementById('upload-thumbnail').click()} // Memicu klik input
                >
                    <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                        <Image
                            className="img-fluid"
                            alt="Unggah File"
                            src="/images/icons/unggah.svg"
                            width={40}
                            height={40} />
                        <p className="text-sm font-medium">Klik untuk unggah</p>
                    </div>
                    {thumbnailFile && (
                        <div className="absolute inset-0 bg-white flex items-center justify-center">
                            <Image
                                className="img-fluid mr-2"
                                alt="delete icons"
                                src="/images/icons/file_blue_unggah.svg"
                                width={24}
                                height={24}
                            />
                            <span className="text-blue-500 text-sm">{thumbnailFile.name}</span>
                            <span className="text-gray-500 text-sm ml-10">{formatFileSize(thumbnailFile.size)}</span>
                            <button
                                onClick={() => removeFile("thumbnail")}
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                <Image
                                    className="img-fluid"
                                    alt="delete icons"
                                    src="/images/icons/x_red.svg"
                                    width={16}
                                    height={16}
                                />
                            </button>
                        </div>
                    )}
                </div>
                <input
                    type="file"
                    id="upload-thumbnail" // ID unik untuk input
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    style={{ display: 'none' }} // Disembunyikan untuk mempermudah klik melalui div
                    onChange={(e) => handleFileChange(e, "thumbnail")}
                />
            </div>
        </div>
    )
}