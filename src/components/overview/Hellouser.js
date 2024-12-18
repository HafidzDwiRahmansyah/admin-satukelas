import Image from "next/image";

export default function hellouser() {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow col-span-4">
      <h2 className="text-xl px-5 fs-32 font-reguler">
        Hello <b className="font-bold">, Mirsa</b>
      </h2>
      <p className="fs-14 px-5 py-3 poppins-medium">
        Admin, PT Satukelas Adhyapana Nusantara
      </p>
      <div className="flex px-5">
        <Image
          className="img-fluid pr-3"
          width={30}
          height={30}
          src="/images/icons/geo.svg"
          alt=""
        />
        <p className="fs-14 pr-5 poppins-reguler">
          No. 65D, Jl. Raya Ragunan No.RT. 12, Ps. Minggu, Kota Jakarta Selatan,
          Daerah Khusus Ibukota Jakarta 12520
        </p>
      </div>
    </div>
  );
}
