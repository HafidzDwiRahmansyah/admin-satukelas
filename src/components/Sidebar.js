"use client"; // Membuat komponen client-side

import { useState, useEffect } from "react"; // Untuk state
import { usePathname } from "next/navigation"; // Mendapatkan URL saat ini
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname(); // Mendapatkan path aktif
  const [hoveredItem, setHoveredItem] = useState(null); // State untuk elemen yang sedang di-hover

  // Fungsi untuk menentukan menu aktif
  const isActive = (paths) => {
    if (Array.isArray(paths)) {
      return paths.some((path) => pathname.startsWith(path));
    }
    return pathname.startsWith(paths);
  };

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }).replace(/\./g, ":");
  };

  return (
    <aside className="w-64 h-screen-full bg-blue-700 text-white">
      <div className="p-4 text-center text-2xl poppins-bold fs-24 poppins-bold">
        <Link href="/">
          <b>{formatTime(currentTime)}</b>
        </Link>
        <p className="fs-14 poppins-regular">{formatDate(currentTime)}</p>
      </div>
      <div className="container mx-auto p-4">
        <hr className="text-white w-50" />
        <nav className="mt-4">
          <ul>
            {/* Menu Overview */}
            <li
              className={`flex items-center p-4 text-base font-semibold rounded-md transition duration-300 ${isActive("/overview")
                ? "bg-white text-blue-500"
                : "text-white hover:bg-white hover:text-blue-500"
                }`}
              onMouseEnter={() => setHoveredItem("overview")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                className="mr-3 transition duration-300"
                width={25}
                height={25}
                alt=""
                src={
                  isActive("/overview")
                    ? "/images/icons/list2.svg" // Gambar untuk menu aktif
                    : hoveredItem === "overview"
                      ? "/images/icons/list2.svg" // Gambar saat hover
                      : "/images/icons/list.svg" // Gambar default
                }
              />
              <Link href="/overview">Overview</Link>
            </li>

            {/* Menu Manajemen Organisasi */}
            <li
              className={`flex items-center p-4 text-base font-semibold rounded-md transition duration-300 ${isActive(["/manajemen-organisasi", "/manajemen-user/edit-profile-organisasi"])
                ? "bg-white text-blue-500"
                : "text-white hover:bg-white hover:text-blue-500"
                }`}
              onMouseEnter={() => setHoveredItem("manajemen-organisasi")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                className="mr-3 transition duration-300"
                width={22}
                height={24}
                alt="Icon Manajemen Organisasi"
                src={
                  isActive(["/manajemen-organisasi", "/manajemen-user/edit-profile-organisasi"])
                    ? "/images/icons/book2.svg"
                    : hoveredItem === "manajemen-organisasi"
                      ? "/images/icons/book2.svg"
                      : "/images/icons/book.svg"
                }
              />
              <Link href="/manajemen-organisasi">Manajemen Organisasi</Link>
            </li>

            {/* Menu Manajemen Pelatihan */}
            <li
              className={`flex items-center p-4 text-base font-semibold rounded-md transition duration-300 ${isActive(["/pelatihan", "/manajemen-user/buat-pelatihan", "/manajemen-user/edit-pelatihan"])
                ? "bg-white text-blue-500"
                : "text-white hover:bg-white hover:text-blue-500"
                }`}
              onMouseEnter={() => setHoveredItem("pelatihan")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                className="mr-3 transition duration-300"
                width={24}
                height={24}
                alt="Icon Manajemen Pelatihan"
                src={
                  isActive(["/pelatihan", "/manajemen-user/buat-pelatihan"])
                    ? "/images/icons/file-a2.svg"
                    : hoveredItem === "pelatihan"
                      ? "/images/icons/file-a2.svg"
                      : "/images/icons/file-a.svg"
                }
              />
              <Link href="/pelatihan">Manajemen Pelatihan</Link>
            </li>

            {/* Menu Manajemen Penugasan */}
            <li
              className={`flex items-center p-4 text-base font-semibold rounded-md transition duration-300 ${isActive("/manajemen-penugasan")
                ? "bg-white text-blue-500"
                : "text-white hover:bg-white hover:text-blue-500"
                }`}
              onMouseEnter={() => setHoveredItem("manajemen-penugasan")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                className="mr-3 transition duration-300"
                width={24}
                height={24}
                alt="Icon Manajemen Penugasan"
                src={
                  isActive("/manajemen-penugasan")
                    ? "/images/icons/file2.svg"
                    : hoveredItem === "manajemen-penugasan"
                      ? "/images/icons/file2.svg"
                      : "/images/icons/file.svg"
                }
              />
              <Link href="/manajemen-penugasan">Manajemen Penugasan</Link>
            </li>

            {/* Menu Data & Analitik Pembelajaran */}
            <li
              className={`flex items-center p-4 text-base font-semibold rounded-md transition duration-300 ${isActive("/data&analitik")
                ? "bg-white text-blue-500"
                : "text-white hover:bg-white hover:text-blue-500"
                }`}
              onMouseEnter={() => setHoveredItem("data&analitik")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                className="mr-3 transition duration-300"
                width={24}
                height={24}
                alt="Icon Data & Analitik"
                src={
                  isActive("/data&analitik")
                    ? "/images/icons/histogram2.svg"
                    : hoveredItem === "data&analitik"
                      ? "/images/icons/histogram2.svg"
                      : "/images/icons/histogram.svg"
                }
              />
              <Link href="/data&analitik">Data & Analitik Pembelajaran</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
