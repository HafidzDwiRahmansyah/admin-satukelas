import Image from "next/image"

export default function Carddiikuti() {
    return (
        <div className="card">
            <div className="flex gap-4">
                <div className="flex-col">
                    <h2 className="poppins-bold fs-32 text-blue-500">20</h2>
                    <h5 className="poppins-regular fs-16">Pelatihan Diikuti</h5>
                </div>
                <div className="flex-col pt-4">
                    <Image
                        className="img-fluid ms-10"
                        alt="icons pelatihan diikuti"
                        src="/images/icons/file_blue.svg"
                        width={34}
                        height={34} />
                </div>
            </div>
            <p className="poppins-regular fs-12 text-gray-500">Setiap anggota mengikuti <br />
                rata-rata <span className="text-blue-500">8</span> pelatihan.</p>
        </div>
    )
}