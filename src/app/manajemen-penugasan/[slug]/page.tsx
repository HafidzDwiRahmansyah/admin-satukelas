"use client";
import { notFound } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

import Judul from "@/components/manajemenpenugasan/Judulpenugasan/Judul";
import Anggotaonline from "@/components/manajemenpenugasan/Judulpenugasan/Anggotaonline";
import Daftarpelatihan from "@/components/manajemenpenugasan/Judulpenugasan/Daftarpelatihan";
import Daftaranggota from "@/components/manajemenpenugasan/Judulpenugasan/Daftaranggota";

interface DataItem {
    slug: string;
    title: string;
    deadline: string;
    tanggal: string;
}

const data: DataItem[] = [
    { slug: "latihan-bahasa-inggris-bulanan", title: "Latihan Bahasa Inggris Bulanan", deadline: "12 Jan 2024 14.00", tanggal: "25 Des 2023 14.00" },
    { slug: "latihan-softskill", title: "Latihan Softskill", deadline: "19 Jan 2024 14.00", tanggal: "9 Jan 2024 14.00" },
];

interface Params {
    params: { slug: string };
}

export default function SlugPage({ params }: Params) {
    const detailData = data.find((items) => items.slug === params.slug);

    if (!detailData) {
        notFound();
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="flex">
                    <div className="container">
                        <h3 className="poppins-bold fs-20 p-4">Manajemen Penugasan</h3>
                        <div className="flex px-4">
                            <Image
                                className="img-fluid"
                                alt="menu"
                                src="/images/icons/menu_gray.svg"
                                width={16}
                                height={16} />
                            <p className="fs-30 mx-2">/</p>
                            <p className="fs-16 poppins-semibold">Manajemen Penugasan</p>
                            <p className="fs-30 mx-2">/</p>
                            <p className="fs-16 poppins-semibold">{detailData.title}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4 m-4">
                    <div className="col-span-3 flex flex-col">
                        <Judul />
                    </div>
                    <div className="flex flex-col col-span-2">
                        <div className="bg-white rounded-md p-4">
                            <Anggotaonline />
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 m-4">
                    <div className="bg-white rounded-md p-4">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                                <Daftarpelatihan />
                            </div>
                            <div className="flex flex-col">
                                <Daftaranggota />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}