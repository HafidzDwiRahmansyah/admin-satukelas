import Image from "next/image";

export default function KuotaAnggota() {
  return (
    <div className="card bg-white rounded-md m-2 max-h-[130px]">
      <div className="card-body p-4 flex">
        <div className="col-1">
          <h3 className="poppins-semibold fs-14 flex-1">
            <b>Kuota Anggota</b>
          </h3>
          <p className="py-2 fs-28 poppins-bold text-blue-700">
            50/<span className="text-gray-500">100 User</span>
          </p>
          <p className="fs-14 poppins-semibold">
            50% <span className="poppins-bold">Terisi</span>
          </p>
        </div>
        <div className="col-2 ml-4">
          <div className="relative w-24 h-24 ml-4">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div
              className="absolute inset-0 rounded-full border-4 border-blue-500"
              style={{
                clipPath:
                  "polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)",
                transform: "rotate(180deg)",
              }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-800">50%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
