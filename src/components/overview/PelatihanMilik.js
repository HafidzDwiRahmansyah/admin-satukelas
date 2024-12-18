import Image from "next/image";

export default function PelatihanMilik() {
  return (
    <div className="flex">
      <div className="card bg-white shadow-md rounded-md">
        <div className="card-body p-4">
          <h3>
            <b>Pelatihan Milik PT Satukelas Adhyapana Nusantara</b>
          </h3>
          <button className="bg-white border border-blue-500 text-blue-500 rounded-md px-2 py-1 mt-3">
            Kelola Pelatihan
          </button>
          <div className="flex items-center justify-content-center lg:col-span-12 my-4">
            <div className="col-span-4 p-2 border-r border-gray-300 border-sm">
              <h1>0/10 GB</h1>
              <p>Penyimpanan terpakai</p>
            </div>
            <div className="col-span-4 p-2 border-r border-gray-300 border-sm">
              <h1>1</h1>
              <p>Pelatihan dibuat</p>
            </div>
            <div className="col-span-4 p-2">
              <h1>150 Menit</h1>
              <p>Durasi pelatihan</p>
            </div>
          </div>
          <table className="min-w-full">
            <thead>
              <tr className="bg-white border-b border-md">
                <th className="px-6 py-2 border-b border-md poppins-medium fs-14">No</th>
                <th className="px-6 py-2 border-b border-md poppins-medium fs-14">
                  Judul Pelatihan
                </th>
                <th className="px-6 py-2 border-b border-md poppins-medium fs-14">
                  Durasi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td className="poppins-regular fs-14 px-6 py-2 ">1</td>
                <td className="poppins-regular fs-14 px-6 py-2 ">
                  Product Knowledge
                </td>
                <td className="poppins-regular fs-14 px-6 py-2 ">2j 30m</td>
              </tr>
              <tr className="bg-white">
                <td className="poppins-regular fs-14 px-6 py-2 ">2</td>
                <td className="poppins-regular fs-14 px-6 py-2 ">- </td>
                <td className="poppins-regular fs-14 px-6 py-2 ">- </td>
              </tr>
              <tr className="bg-blue-50">
                <td className="poppins-regular fs-14 px-6 py-2 ">4</td>
                <td className="poppins-regular fs-14 px-6 py-2 ">-</td>
                <td className="poppins-regular fs-14 px-6 py-2 ">-</td>
              </tr>
              <tr className="bg-white">
                <td className="poppins-regular fs-14 px-6 py-2 ">5</td>
                <td className="poppins-regular fs-14 px-6 py-2 ">-</td>
                <td className="poppins-regular fs-14 px-6 py-2 ">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
