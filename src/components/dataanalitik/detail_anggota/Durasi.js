import Image from "next/image";

export default function Durasi() {
    return (
        <div className="container">
            <div className="bg-white rounded-md p-4">
                <h4 className="poppins-semibold fs-14 pb-2">Total Durasi Pelatihan Selesai</h4>
                <div className="grid grid-cols-5 flex gap-4 py-10">
                    <div className="flex-col col-span-1">
                        <p className="text-center text-gray-400 fs-12">Jam</p>
                        <h1 className="poppins-bold fs-52 text-center text-green-800">3</h1>
                    </div>
                    <div className="col-span-1 flex-col">
                        <span className="poppins-bold fs-52 text-left text-green-800 pt-8"> : </span>
                    </div>
                    <div className="flex-col col-span-1">
                        <p className="text-center text-gray-400 fs-12">Menit</p>
                        <h1 className="poppins-bold fs-52 text-center text-green-800">27</h1>
                    </div>
                    <div className="col-span-1 flex-col">
                        <span className="poppins-bold fs-52 text-left text-green-800 pt-8"> : </span>
                    </div>
                    <div className="flex-col col-span-1">
                        <p className="text-center text-gray-400 fs-12">Detik</p>
                        <h1 className="poppins-bold fs-52 text-center text-green-800">14</h1>
                    </div>
                </div>
                <p className="text-regular fs-12 text-gray-400 pt-2">Total durasi ini merupakan akumulasi durasi setiap pelatihan yang telah diikuti</p>
            </div>
        </div>
    )
}