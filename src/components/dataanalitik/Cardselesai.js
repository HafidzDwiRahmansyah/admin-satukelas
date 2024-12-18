import Image from "next/image"

export default function SelesaiDiikuti() {
    return (
        <div className="card" style={{ width: "250px" }}>
            <div className="flex gap-4">
                <div className="flex-col">
                    <h2 className="poppins-bold fs-32 text-blue-500">45</h2>
                    <h5 className="poppins-regular fs-16">Pelatihan Selesai</h5>
                </div>
                <div className="flex-col p-4">
                    <Image
                        className="img-fluid"
                        alt="icons pelatihan selesai"
                        src="/images/icons/file_ceklis.svg"
                        width={32}
                        height={32} />
                </div>
            </div>
            <p className="poppins-regular fs-12 text-gray-500"><span className="poppins-semibold">Setiap anggota</span> telah menyelesaikan
                rata-rata <span className="poppins-semibold text-blue-500">16</span> pelatihan.</p>
        </div>

    )
}