import Image from "next/image";

export default function Statussertifikasi() {
    return (
        <div className="container">
            <div className="card rounded-md bg-white p-4">
                <div className="card-body">
                    <h1 className="poppins-semibold pb-4">Status Sertifikasi</h1>
                    <div className="grid grid-cols-2 flex gap-4">
                        <div className="flex-col cols-5">
                            <h2 className="poppins-semibold fs-32 text-green-600">2</h2>
                            <p className="poppins-regular">Sertifikat diklaim</p>
                        </div>
                        <div className="flex-col cols-5">
                            <h2 className="poppins-semibold fs-32 text-green-600">1</h2>
                            <p className="poppins-regular">Sertifikat Terkirim</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}