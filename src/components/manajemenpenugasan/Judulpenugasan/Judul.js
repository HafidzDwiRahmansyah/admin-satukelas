import Image from "next/image"

export default function Judul() {
    return (
        <div className="container">
            <div className="card bg-white p-4 rounded-md">
                <div className="card-body">
                    <div className="flex pb-4 justify-between">
                        <h2 className="poppins-bold">Latihan Bahasa Inggris Bulanan</h2>
                        <Image
                            className="img-fluid"
                            alt="pencil icons"
                            src="/images/icons/pencil.svg"
                            width={16}
                            height={16} />
                    </div>
                    <div className="flex grid grid-cols-3 py-3">
                        <div className="bg-red-200 p-4 rounded-md flex-col">
                            <div className="isi border-l border-red-800">
                                <div className="flex">
                                    <h3 className="poppins-semibold fs-14 pl-4">Dealine</h3>
                                    <p className="text-red-600 fs-14 poppins-semibold pl-2"> (7 Hari Lagi)</p>
                                </div>
                                <p className="poppins-regular fs-12 pl-4">12 Jan 2024 14.00</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 flex-col">
                            <div className="isi">
                                <div className="flex">
                                    <h3 className="poppins-semibold fs-14">Dibuat Oleh</h3>
                                </div>
                                <p className="poppins-regular fs-12">Admin - Nataya Aviani</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 flex-col">
                            <div className="isi border-l border-gray-800">
                                <div className="flex">
                                    <h3 className="poppins-semibold pl-4 fs-14">Tanggal</h3>
                                </div>
                                <p className="poppins-regular fs-12 pl-4">25 Des 2023 14.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}