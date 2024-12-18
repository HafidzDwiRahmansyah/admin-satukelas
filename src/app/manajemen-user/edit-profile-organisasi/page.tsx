import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Ubahprofileorganisasi from "@/components/manajemenorganisasi/Ubahprofileorganisasi";

export default function profileorganisasi() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="container">
                    <h3 className="poppins-bold fs-20 p-4">Ubah Profile Organisasi</h3>
                    <nav className="flex items-center space-x-4 text-sm text-gray-600 ml-2" aria-label="Breadcrumb">
                        <a href="/manajemen-organisasi" className="text-gray-400 hover:underline flex items-center">
                            <Image
                                className="img-fluid mx-2"
                                alt="menu"
                                src="/images/icons/menu_gray.svg"
                                width={16}
                                height={16} />
                            manajemen organisasi
                        </a>
                        <span className="poppins-semibold">/</span>
                        <a href="/manajemen-user/edit-profile-organisasi" className="text-blue-500 hover:underline">
                            Ubah Profile Organisasi
                        </a>
                    </nav>
                </div>
                <div className="flex m-4">
                    <Ubahprofileorganisasi />
                </div>
            </div>
        </div>
    )
}