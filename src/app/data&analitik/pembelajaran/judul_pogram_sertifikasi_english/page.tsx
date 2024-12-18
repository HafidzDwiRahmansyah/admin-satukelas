import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata = {
    title: "Manajemen Organisasi | Satu Kelas",
    description: "Halaman daftar pengguna",
};

export default function judul_program_sertifikasi_english() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="flex">
                    <div className="container">
                        <h3 className="poppins-bold fs-20 p-4">Detail - Course English</h3>
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

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}