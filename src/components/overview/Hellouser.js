import Image from "next/image";

export default function hellouser() {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow col-span-4">
      <h2 className="px-5 fs-32 font-reguler">
        Hello <b className="font-bold">, Mirsa</b>
      </h2>
      <p className="fs-14 px-5 py-3 poppins-medium">
        Admin, PT Satukelas Adhyapana Nusantara
      </p>
      <div className="flex px-5 items-start">
        <Image
          className="mr-2 mt-1"
          width={11}
          height={11}
          src="/images/icons/geo.svg"
          alt=""
        />
        <p className="fs-14 pr-5 poppins-reguler">
          No. 65D, Jl. Raya Ragunan No.RT. 12, <br /> Ps. Minggu, Kota Jakarta Selatan,
          Daerah <br /> Khusus Ibukota Jakarta 12520
        </p>
      </div>
    </div>
  );
}
