import Image from "next/image";
import Chartkuota from "@/components/manajemenorganisasi/Chartkuota";

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
          <p className="fs-14 poppins-semibold text-gray-700">
            50% <span className="poppins-regular">Terisi terisi</span>
          </p>
        </div>
        <div className="col-2 ml-4">
          <Chartkuota/>
        </div>
      </div>
    </div>
  );
}
