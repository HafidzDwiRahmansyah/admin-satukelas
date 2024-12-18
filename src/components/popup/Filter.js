"use client";
import React, { useState } from "react";

export default function FilterButtons() {
    const [activeButtons, setActiveButtons] = useState([]); // State untuk tombol yang aktif

    const handleButtonClick = (buttonType) => {
        if (activeButtons.includes(buttonType)) {
            // Jika tombol sudah aktif, hapus dari daftar aktif
            setActiveButtons(activeButtons.filter((button) => button !== buttonType));
        } else {
            // Jika tombol belum aktif, tambahkan ke daftar aktif
            setActiveButtons([...activeButtons, buttonType]);
        }
    };

    return (
        <div className="flex space-x-4">
            <button
                onClick={() => handleButtonClick("tl")}
                className={`px-4 py-2  rounded ${activeButtons.includes("tl") ? "bg-blue-500 text-white" : "bg-blue-500 text-white"}`}
            >
                Tax Learning
            </button>
            <button
                onClick={() => handleButtonClick("cp")}
                className={`px-4 py-2  rounded ${activeButtons.includes("cp") ? "bg-blue-500 text-white" : "bg-blue-500 text-white"}`}
            >
                Creative Production
            </button>
            <button
                onClick={() => handleButtonClick("hc")}
                className={`px-4 py-2  rounded ${activeButtons.includes("hc") ? "bg-blue-500 text-white" : "bg-blue-500 text-white"}`}
            >
                Human Capital
            </button>
        </div>
    );
}
