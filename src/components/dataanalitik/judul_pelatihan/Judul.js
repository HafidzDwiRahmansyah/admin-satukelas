import Image from "next/image";

export default function judul() {
    return (
        <div className="container">
            <div className="card bg-white rounded-md">
                <div className="card-body">
                    <div className="grid grid-cols-3 flex">
                        <div className="flex flex-col">
                            <Image
                                className="img-fluid"
                                alt="default image"
                                src="/images/icons/default.svg"
                                width={410}
                                height={307}
                            />
                        </div>
                        <div className="flex flex-col col-span-2 p-4">
                            <button className="poppins-semibold bg-blue-200 text-blue-600 rounded-md">Perpajakan</button>
                            <h3 className="fs-28 poppins-bold py-4">Akutansi Perpajakan Pada Laporan Keuangan</h3>
                            <p className="poppins-regular fs-14 text-gray-400">
                                Pelatihan Accounting for Non Accounting ini dirancang untuk individu yang tidak memiliki latar belakang pendidikan dan pengalaman pada bidang akuntansi tetapi dalam tugas sehari-harinya dituntut untuk memahami dan mengerti laporan keuangan seperti; Laporan Posisi Keuangan (neraca), Laporan Laba Rugi dan Penghasilan Komprehensif Lain, dan Laporan Arus Kas secara benar.
                            </p>
                            <div className="flex my-2">
                                <div className="flex">
                                    <Image
                                        className="img-fluid rounded-full mr-2"
                                        alt="img-profile"
                                        src="/images/icons/profile.png"
                                        width={48}
                                        height={48} />
                                </div>
                                <div className="name">
                                    <p className="poppins-semibold fs-16">Cosmas Budiyantoro, S.E., CMA.</p>
                                    <p className="text-gray-600 fs-14 poppins-semibold">Instruktur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}