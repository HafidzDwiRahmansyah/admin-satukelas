import Image from "next/image";

export default function Notification() {
    return (
        <div className="card border-l-4 border-md border-blue-600 rounded-md shadow-md bg-white mt-4">
            <div className="card-body m-4">
                <div className="flex m-2">
                    <Image
                        className="img-fluid mr-2"
                        alt="notification"
                        width={24}
                        height={24}
                        src="/images/icons/notification.svg" />
                    <h3 className="poppins-semibold">Pastikan pembelajaran terlaksana dengan fitur penugasan pelatihan.</h3>
                </div>
                <div className="flex ml-12">
                    <ul className="text-gray-400 fs-14 poppins-regular list-disc">
                        <li>Buat penugasan untuk mengelompokkan pembelajaran</li>
                        <li>Pilih pelatihan yang sesuai dengan keinginan Anda</li>
                        <li>Pilih anggota yang diwajibkan untuk menyelesaikan pelatihan</li>
                        <li>Tetapkan tenggat waktu dan pantau penyelesaian pembelajaran </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}