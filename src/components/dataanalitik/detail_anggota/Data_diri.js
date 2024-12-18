import Image from "next/image";

export default function data_diri() {
    return (
        <div className="container flex">
            <div className="grid grid-cols-3 flex p-4 gap-8">
                <div className="flex flex-col col-span-1">
                    <Image
                        className="img-fluid"
                        alt="photo"
                        src="/images/icons/Photo_2.svg"
                        width={170}
                        height={170} />
                </div>
                <div className="flex-col col-span-2">
                    <p className="text-gray-400 poppins-semibold fs-14">PT Akselerasi Edukasi Internasional</p>
                    <h2 className="poppins-bold fs-28 text-blue-700 py-2">Firkan Dinansyah</h2>
                    <p className="text-gray-400 fs-16 poppins-regular">firkan@satukelas.com</p>
                    <div className="flex gap-4 py-4">
                        <div className="flex gap-4">
                            <Image
                                className="img-fluid"
                                alt="icons"
                                src="/images/icons/calender.svg"
                                width={32}
                                height={32} />
                            <div className="isi">
                                <p className="poppins-semibold fs-14">Terdaftar Sejak</p>
                                <p className="poppins-regular fs-12">01 Januari 2023</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Image
                                className="img-fluid"
                                alt="icons"
                                src="/images/icons/clock.svg"
                                width={32}
                                height={32} />
                            <div className="isi">
                                <p className="poppins-semibold fs-14">Terakhir Login</p>
                                <p className="poppins-regular fs-12">4 Februari 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 bg-blue-300 px-4 py-2 rounded-md">
                        <div className="flex-col">
                            <h4 className="fs-16 poppins-bold text-blue-700">Satukelas 1 Tahun</h4>
                        </div>
                        <div className="flex-col">
                            <p className="poppins-regular fs-14 text-blue-700">Hingga: 01 Jan 2025</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icons">
                <Image
                    className="img-fluid"
                    alt="icons pencil"
                    src="/images/icons/pencil.svg"
                    width={24}
                    height={24} />
            </div>
        </div>
    )
}