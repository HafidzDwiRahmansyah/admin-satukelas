import Image from "next/image";

export default function Capaianbelajar() {
    return (
        <div className="card bg-white rounded-md w-full">
            <div className="card-body px-4 py-2">
                <h1 className="poppins-semibold fs-14">Capaian Belajar</h1>
                <div className="flex">
                    <Image
                        className="img-fluid"
                        alt="icons"
                        src="/images/icons/capaian_belajar.svg"
                        width={30}
                        height={30}
                    />
                    <h2 className="poppins-bold fs-36 text-green-800 ps-4">+ 5,5</h2>
                </div>
                <p className="poppins-regular-italic fs-12 text-gray-400">Nilai didapatkan dari rata-rata presentase hasil Post test dan pre test</p>
            </div>
        </div>
    )
}