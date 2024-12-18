"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <nav className="h-16 bg-white text-gray flex items-center shadow justify-between px-6 navbar">
      <Image
        src="https://www.satukelas.biz.id/_next/static/media/satukelas-logo.587060df.svg"
        className="img-fluid rounded-top"
        alt=""
        width={100}
        height={70}
      />
      <ul className="flex space-x-4 relative">
        <Image
          className="img-fluid"
          width={50}
          height={50}
          alt=""
          src="/images/icons/notifikasi.svg"
        />
        <li className="flex items-center relative">
          <Image
            className="img-fluid mr-2"
            width={40}
            height={40}
            alt=""
            src="/images/icons/logo-1.svg"
          />
          <a
            href="#"
            className="hover:underline flex items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <p className="fs-16 poppins-semibold">
              PT Satukelas Adhyapa...
              <br />
              <span className="fs-14 poppins-regular text-gray-400">Admin</span>
            </p>
            <Image
              className="img-fluid m-4"
              width={17}
              height={10}
              alt=""
              src="/images/icons/dropdown.svg"
            />
          </a>
          {isOpen && (
            <ul className="absolute bg-white shadow-lg rounded-md right-0 z-50" style={{ width: "300px", margintop: "100px" }}>
              <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Profil</li>
              <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Profil Organisasi</li>
              <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Keluar</li>
            </ul>
          )}
        </li>
      </ul >
    </nav >
  )
}