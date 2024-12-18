import Image from "next/image";

export default function DaftarAnggota() {
  return (
    <div className="p-6 mx-4 bg-white rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Daftar Anggota</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Cari"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            {/* <img src="/images/icons/filter.svg" alt="Filter" className="w-4 h-4" /> */}
            Filter
          </button>
          <button className="bg-blue-600 text-white rounded-md px-4 py-2 text-sm hover:bg-blue-700">
            + Tambah Student
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4 border-b pb-2 mb-4">
        <button className="text-blue-500 poppins-semibold fs-14 relative">
          All Student{" "}
          <span className="ml-2 px-1 bg-orange-500 text-white rounded-md poppins-semibold fs-14">
            50
          </span>
        </button>
        <button className="text-gray-600 poppins-semibold fs-14 hover:text-blue-500 font-medium">
          Tax Learning{" "}
          <span className="ml-2 px-1 bg-gray-500 text-white rounded-md poppins-semibold fs-14">
            2
          </span>
        </button>
        <button className="text-gray-600 poppins-semibold fs-14 hover:text-blue-500 font-medium">
          Creative Prod{" "}
          <span className="ml-2 px-1 bg-gray-500 text-white rounded-md poppins-semibold fs-14">
            6
          </span>
        </button>
        <button className="text-gray-600 poppins-semibold fs-14 hover:text-blue-500 font-medium">
          +
        </button>
      </div>

      <p className="fs-12 poppins-regular text-gray-400">
        Terpilih <span className="poppins-bold text-gray-600">5</span> dari 50 Anggota
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-gray-600 text-sm border-b border-gray-500 leading-normal">
              <th className="py-3 px-6 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </th>
              <th className="py-3 px-6 text-left">Nama Anggota</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Divisi</th>
              <th className="py-3 px-6 text-left">Posisi</th>
              <th className="py-3 px-6 text-left">Membership</th>
              <th className="py-3 px-6 text-left">Tanggal Kadaluarsa</th>
              <th className="py-3 px-6 text-left">Terakhir Aktif</th>
              <th className="py-3 px-6 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className="py-3 px-6">Adhi Prasetyo</td>
              <td className="py-3 px-6">adhi@satukelas.com</td>
              <td className="py-3 px-6">Tax Learning</td>
              <td className="py-3 px-6">Staff</td>
              <td className="py-3 px-6">Satukelas 1 Tahun</td>
              <td className="py-3 px-6">05 Jan 2025 17:00</td>
              <td className="py-3 px-6">06 Feb 2024 17:00</td>
              <td className="py-3 px-6 text-center">
                <button>
                  {/* <img
                    src="/images/icons/edit.svg"
                    alt="Edit"
                    classNameName="w-5 h-5"
                  /> */}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          Terdapat <b>42</b> Anggota terdaftar
        </p>
        <div className="flex items-center gap-2">
          <button className="bg-gray-200 text-gray-600 rounded-md px-3 py-1 text-sm hover:bg-gray-300">
            &lt;
          </button>
          <button className="bg-blue-500 text-white rounded-md px-3 py-1 text-sm hover:bg-blue-600">
            1
          </button>
          <button className="bg-gray-200 text-gray-600 rounded-md px-3 py-1 text-sm hover:bg-gray-300">
            2
          </button>
          <button className="bg-gray-200 text-gray-600 rounded-md px-3 py-1 text-sm hover:bg-gray-300">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
