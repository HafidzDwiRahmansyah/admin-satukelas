import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import CardOrganisasi from "@/components/manajemenorganisasi/CardOrganisasi";
import ContactSales from "@/components/manajemenorganisasi/ContactSales";
import KuotaAnggota from "@/components/manajemenorganisasi/KuotaAnggota";

import DaftarAnggota from "@/components/manajemenorganisasi/DaftarAnggota";

import CardRombel from "@/components/manajemenorganisasi/CardRombel";
import CardDaftarAdmin from "@/components/manajemenorganisasi/CardDaftarAdmin";

export const metadata = {
    title: "Manajemen Organisasi | Satu Kelas",
    description: "Halaman daftar pengguna",
};

export default function manajemenorganisasi() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="flex">
                    <div className="container">
                        <h3 className="poppins-bold fs-20 p-4">Manajemen Organisasi</h3>
                        <div className="flex px-4">
                            <Image
                                className="img-fluid"
                                alt="menu"
                                src="/images/icons/menu_gray.svg"
                                width={16}
                                height={16} />
                            <p className="fs-30 mx-2">/</p>
                            <p className="fs-16 poppins-semibold">Manajemen Organisasi</p>
                        </div>
                        <div className="flex w-full p-2">
                            <CardOrganisasi />
                            <div className="flex flex-col">
                                <ContactSales />
                                <KuotaAnggota />
                            </div>
                        </div>
                        <DaftarAnggota />
                        <CardRombel />
                        <CardDaftarAdmin />
                    </div>
                </div>
            </div>
        </div>
    )
}