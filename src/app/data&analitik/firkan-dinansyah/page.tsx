"use client";
import { notFound } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

import Data_diri from "@/components/dataanalitik/detail_anggota/Data_diri";
import Membership from "@/components/dataanalitik/detail_anggota/Membership";
import Durasi from "@/components/dataanalitik/detail_anggota/Durasi";

import Liveclass from "@/components/dataanalitik/detail_anggota/Liveclass";
import Pelatihandiikuti from "@/components/dataanalitik/detail_anggota/Pelatihandiikuti";
import Capaianbelajar from "@/components/dataanalitik/detail_anggota/Capaianbelajar";

export default function firkan_dinansyah() {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="flex">
                    <div className="container">
                        <h3 className="poppins-bold fs-20 p-4">Detail Anggota</h3>
                        <div className="flex px-4">
                            <Image
                                className="img-fluid"
                                alt="menu"
                                src="/images/icons/menu_gray.svg"
                                width={16}
                                height={16} />
                            <p className="fs-30 mx-2">/</p>
                            <p className="fs-16 poppins-semibold text-gray-400">Data & Analitik Pembelajaran</p>
                            <p className="fs-30 mx-2">/</p>
                            <p className="fs-16 poppins-semibold">Firkan Dinansyah</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="grid grid-cols-3 flex gap-4 m-4">
                        <div className="flex-col col-span-2 card bg-white rounded-md p-4">
                            <Data_diri />
                        </div>
                        <div className="flex-col col-span-1">
                            <Membership />
                        </div>
                        <div className="flex-col col-span-2 card bg-white rounded-md p-4">
                            <Data_diri />
                        </div>
                        <div className="flex-col col-span-1">
                            <Durasi />
                        </div>
                    </div>
                    <div className="flex gap-4 m-4">
                        <Liveclass />
                        <Pelatihandiikuti />
                        <div className="cb" style={{ width: "220px" }}>
                            <Capaianbelajar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}