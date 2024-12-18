import Image from "next/image";

export default function totalsertifikasi() {
  return (
    <div className="card bg-white rounded-md">
      <div className="card-body px-4 py-2">
        <h1 className="poppins-semibold fs-14">Total Anggota Terdaftar</h1>
        <div className="flex">
          <h2 className="poppins-bold fs-48 text-green-600">52</h2>
          <p className="poppins-regular fs-14 text-green-500 pt-10 px-2">Anggota</p>
          <Image
            className="img-fluid mx-6"
            alt="icons"
            src="/images/icons/total_anggota_terdaftar.svg"
            width={32}
            height={32}
          />
        </div>
        <p className="poppins-regular-italic fs-12 text-gray-400">*Terhitung sejak 25 Desember 2023</p>
      </div>
    </div>
  )
}