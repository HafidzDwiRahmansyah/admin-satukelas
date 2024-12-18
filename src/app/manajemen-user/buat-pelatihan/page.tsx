import Image from "next/image"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Buatdatapelatihan from "@/components/pelatihan/manajemenuser/Buatdatapelatihan";

export default function editpelatihan() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="container">
                    <h3 className="poppins-bold fs-20 p-4">Buat Pelatihan</h3>
                    <nav className="flex items-center space-x-4 text-sm text-gray-600 ml-2" aria-label="Breadcrumb">
                        <a href="/pelatihan" className="text-gray-400 hover:underline flex items-center">
                            <Image
                                className="img-fluid mx-2"
                                alt="menu"
                                src="/images/icons/menu_gray.svg"
                                width={16}
                                height={16} />
                            Pelatihan
                        </a>
                        <span className="poppins-semibold">/</span>
                        <a href="/manajemen-user/buat-pelatihan" className="text-blue-500 hover:underline">
                            Buat Pelatihan
                        </a>
                    </nav>
                    <div className="flex m-4">
                        <Buatdatapelatihan />
                    </div>
                </div>
            </div>
        </div>
    )
}