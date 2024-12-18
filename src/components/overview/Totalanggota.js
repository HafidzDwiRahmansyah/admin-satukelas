import Image from "next/image";

export default function Totalanggota() {
    return (
        <div className="navbar p-4 rounded-lg shadow col-span-2">
            <h2 className="pb-4 fs-14 poppins-semibold">Total Anggota</h2>
            <div className="flex py-2">
                <div className="image p-2">
                    <Image
                        classsName="img-fluid"
                        alt="icons"
                        src="/images/icons/total_anggota.svg"
                        width={32}
                        height={32}
                    />
                </div>
                <div className="text pl-2">
                    <h1 className="poppins-extrabold text-green-700 leading-none fs-50"><b>50</b></h1>
                    <p className="poppins-regular text-gray-500 fs-14">membership</p>
                </div>
            </div>
            <div className="text-right">
                <a className="fs-12 text-blue-400 poppins-regular" href="#">Lihat Selengkapnya</a>
            </div>
        </div >
    )
} 