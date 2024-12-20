"use client";
import Chartmanajementugas from "@/components/manajemenpenugasan/Chartmanajementugas";

export default function StatusCardsComponent() {
    return (
        <div className="flex gap-4 p-4 bg-white rounded-md" style={{ height: "220px" }}>
            <Chartmanajementugas />
            <div className="card gap-4">
                <div className="flex grid grid-cols-4 gap-4 w-full">
                    <div className="bg-blue-100 col-span-2 items-center rounded-md px-4 py-2">
                        <h2 className="text-blue-600 poppins-semibold fs-16">2 Pelatihan</h2>
                        <p className="text-blue-500 poppins-regular fs-14">Berlangsung</p>
                    </div>
                    <div className="bg-green-100 col-span-2 items-center rounded-md px-4 py-2">
                        <h2 className="text-green-600 poppins-semibold fs-16">3 Pelatihan</h2>
                        <p className="text-green-500 poppins-regular fs-14">Selesai</p>
                    </div>
                </div>
                <div className="flex grid grid-cols-4 gap-4 w-full">
                    <div className="bg-yellow-500 col-span-2 items-center rounded-md px-4 py-2">
                        <h2 className="text-white poppins-semibold fs-16">1 Pelatihan</h2>
                        <p className="text-white poppins-regular fs-14">Belum Selesai</p>
                    </div>
                    <div className="bg-red-100 col-span-2 items-center rounded-md px-4 py-2">
                        <h2 className="text-red-600 poppins-semibold fs-16">1 Pelatihan</h2>
                        <p className="text-red-500 poppins-regular fs-14">Terlambat</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
