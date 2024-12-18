import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TambahAnggota from "@/components/manajemenorganisasi/TambahAnggota";

export const metadata = {
    title: "Pelatihan | Satu Kelas",
    description: "Halaman daftar pengguna",
};

export default function pelatihan() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="flex">
                    <div className="container">
                        <h3 className="poppins-bold fs-20 p-4">Tambah Anggota</h3>
                        <nav className="flex items-center space-x-4 text-sm text-gray-600 ml-2" aria-label="Breadcrumb">
                            <Image
                                className="img-fluid mx-2"
                                alt="menu"
                                src="/images/icons/menu_gray.svg"
                                width={16}
                                height={16} />
                            <span className="text-gray-500 poppins-semibold">/</span>
                            <a href="/pelatihan" className="text-gray-500 hover:underline">
                                Manajemen Organisasi
                            </a>
                            <span className="text-gray-500 poppins-semibold">/</span>
                            <span className="text-gray-700 poppins-semibold">Tambah Anggota</span>
                        </nav>
                    </div>
                </div>
                <div className="flex m-4">
                    <TambahAnggota />
                </div>
            </div>
        </div >
    )
}