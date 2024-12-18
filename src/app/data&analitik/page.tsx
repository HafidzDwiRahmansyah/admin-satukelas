import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

import Totalanggota from "@/components/dataanalitik/Totalanggota";
import Capaianbelajar from "@/components/dataanalitik/Capaianbelajar";

import Chartbar from "@/components/dataanalitik/Chartbar";

import Cardselesai from "@/components/dataanalitik/Cardselesai";
import Carddiikuti from "@/components/dataanalitik/Carddiikuti";

import Totalsertifikasi from "@/components/dataanalitik/Totalsertifikasi";
import Statussertifikasi from "@/components/dataanalitik/Statussertifikasi";

import Cardpelatihandiikuti from "@/components/dataanalitik/Cardpelatihandiikuti";
import Liveclasses from "@/components/dataanalitik/Liveclasses";
import Programsertifikasi from "@/components/dataanalitik/Programsertifikasi";

export const metadata = {
    title: "Data & Analitik | Satu Kelas",
    description: "Halaman daftar pengguna",
};

export default function dataanalitik() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="flex py-2">
                    <div className="container">
                        <h3 className="poppins-bold fs-20 p-4">Data & Analitik Pembelajaran</h3>
                        <div className="flex px-4">
                            <Image
                                className="img-fluid"
                                alt="menu"
                                src="/images/icons/menu_gray.svg"
                                width={16}
                                height={16} />
                            <p className="fs-30 mx-2">/</p>
                            <p className="fs-16 poppins-semibold">Data & Analitik Pembelajaran</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col ml-4 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <Totalanggota />
                            </div>
                            <div className="flex flex-col">
                                <Capaianbelajar />
                            </div>
                        </div>
                        <div className="flex card bg-white rounded-md gap-4 p-4">
                            <div className="flex">
                                <Cardselesai />
                            </div>
                            <div className="relative flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 h-1/2 w-px bg-gray-300"></div>
                            </div>
                            <div className="flex">
                                <Carddiikuti />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mr-4">
                        <Chartbar/>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 m-4">
                    <div className="flex-col"><Totalsertifikasi /></div>
                    <div className="flex-col"><Statussertifikasi /></div>
                </div>
                <div className="page m-4">
                    <div className="card bg-white rounded-md w-full p-4 my-4">
                        <Cardpelatihandiikuti />
                    </div>
                    <div className="card bg-white rounded-md w-full p-4 my-4">
                        <Liveclasses />
                    </div>
                    <div className="card bg-white rounded-md w-full p-4 my-4">
                        <Programsertifikasi />
                    </div>
                </div>
            </div>
        </div>
    )
}