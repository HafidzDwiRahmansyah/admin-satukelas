import Image from "next/image";

export default function Pelatihandiikuti() {
  return (
    <div className="navbar p-4 rounded-lg shadow col-span-2">
      <h2 className="pb-4 fs-14 poppins-semibold">Pelatihan Diikuti</h2>
      <div className="flex py-2">
        <div className="image p-2">
          <Image
            classsName="img-fluid"
            alt="icons"
            src="/images/icons/pelatihan_diikuti.svg"
            width={32}
            height={32}
          />
        </div>
        <div className="text pl-2">
          <h1 className="poppins-extrabold text-blue-800 leading-none fs-50"><b>65</b></h1>
          <p className="poppins-regular text-gray-500 fs-14">pelatihan</p>
        </div>
      </div>
      <div className="text-right">
        <a className="fs-12 text-blue-400 poppins-regular" href="#">Lihat Selengkapnya</a>
      </div>
    </div>
  );
}
