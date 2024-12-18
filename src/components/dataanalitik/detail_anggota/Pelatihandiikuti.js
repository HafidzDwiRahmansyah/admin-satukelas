"use client"
import Image from "next/image"
import Chartpelatihan from "@/components/dataanalitik/detail_anggota/Chartpelatihan";

export default function Pelatihandiikuti() {
    return (
        <div className="card bg-white rounded-md shadow p-4 w-full">
            <div className="card-body">
                <h3 className="poppins-semibold fs-14">
                    Pelatihan yang Diikuti
                </h3>
                <hr className="mt-3" />
                <div className="flex justify-between mt-2">
                    <Chartpelatihan />
                    <div className="group my-auto">
                        <div className="flex ms-4 p-2 border border-gray-300 rounded-md mb-4">
                            <Image
                                className="img-fluid"
                                alt="icons person blue"
                                src="/images/icons/file_blue_ceklis.svg"
                                width={32}
                                height={32} />
                            <div className="text ps-2">
                                <h3 className="poppins-bold fs-14">30 Pelatihan</h3>
                                <p className="fs-12 text-gray-400 poppins-regular">Telah Selesai</p>
                            </div>
                        </div>
                        <div className="flex ms-4 p-2 border border-gray-300 rounded-md">
                            <Image
                                className="img-fluid"
                                alt="icons file green"
                                src="/images/icons/file_green.svg"
                                width={32}
                                height={32} />
                            <div className="text ps-2">
                                <h3 className="poppins-bold fs-14">6 Pelatihan</h3>
                                <p className="fs-12 text-gray-400 poppins-regular">Berlangsung</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}