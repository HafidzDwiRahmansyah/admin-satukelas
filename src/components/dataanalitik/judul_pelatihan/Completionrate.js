import Image from "next/image";
import Circlechart from "@/components/dataanalitik/judul_pelatihan/Circlechart"
import Chartpelatihan from "@/components/dataanalitik/Chartpelatihan";

export default function Completionrate() {
    return (
        <div className="card bg-white rounded-md shadow p-4">
            <div className="card-body">
                <h3 className="poppins-semibold fs-14">
                    Completion Rate + Jumlah Anggota (All Student)
                </h3>
                <hr className="mt-3" />
                <div className="flex justify-between mt-2">
                    <Circlechart />
                    <div className="flex p-2 border border-gray-300 rounded-md my-auto">
                        <Image
                            className="img-fluid"
                            alt="icons person blue"
                            src="/images/icons/person_bg_blue.svg"
                            width={32}
                            height={32} />
                        <div className="text ps-2">
                            <h3 className="poppins-bold fs-14">21 Selesai</h3>
                            <p className="fs-12 text-gray-400 poppins-regular">50% sudah selesai</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}