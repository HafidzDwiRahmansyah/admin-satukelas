import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import Notification from "@/components/manajemenpenugasan/Notification";
import Chartmanajementugas from "@/components/manajemenpenugasan/Chartmanajementugas";
import Daftarpenugasan from "@/components/manajemenpenugasan/Daftarpenugasan";

export const metadata = {
    title: "Manajemen Penugasan | Satu Kelas",
    description: "Halaman daftar pengguna",
};

export default function manajemenpenugasan() {
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
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col ml-4">
                        <Notification />
                    </div>
                    <div className="flex flex-col mr-4">
                        <Chartmanajementugas />
                    </div>
                </div>
                <Daftarpenugasan />
            </div>
        </div>
    )
}