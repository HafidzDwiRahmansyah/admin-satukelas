import Image from "next/image";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import Hellouser from "@/components/overview/Hellouser";
import Totalanggota from "@/components/overview/Totalanggota";
import Pelatihandiikuti from "@/components/overview/Pelatihandiikuti";
import Useractive from "@/components/overview/Useractive";

import ScheduleCard from '@/components/overview/CardJadwal';

import CardPelatihan from "@/components/overview/CardPelatihanPopuler";
import Completionrate from "@/components/overview/Completionrate";

import RiwayatSertifikasi from "@/components/overview/RiwayatSertifikasi";

import PelatihanMilik from "@/components/overview/PelatihanMilik";
import CardAnggotaTerbaik from "@/components/overview/CardAnggotaTerbaik";

export const metadata = {
    title: "overview | Satu Kelas",
    description: "Halaman daftar pengguna",
};

export default function overview() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
                        <Hellouser />
                        <Totalanggota />
                        <Pelatihandiikuti />
                        <Useractive />
                    </div>

                    <div className="navbar mx-auto rounded-lg w-full shadow my-4">
                        <ScheduleCard />
                    </div>

                    <div className="flex gap-4">
                        <div className="navbar shadow rounded-lg">
                            <CardPelatihan />
                        </div>
                        <div className="navbar rounded-lg p-4">
                            <Completionrate />
                        </div>
                    </div>

                    <div className="navbar w-full mx-auto my-4">
                        <RiwayatSertifikasi />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-11 gap-2">
                        <div className="col-span-5">
                            <PelatihanMilik />
                        </div>
                        <div className="col-span-6">
                            <div className="card bg-white rounded-lg">
                                <div className="card-body">
                                    <CardAnggotaTerbaik />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}