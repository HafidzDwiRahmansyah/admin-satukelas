import Image from "next/image";

export default function CardDaftarAdmin() {
  return (
    <div className="bg-white shadow rounded-lg p-6 m-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg poppins-semibold">Daftar Admin</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 items-center mb-4">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Cari"
            className="w-full px-4 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="border border-gray-500 text-gray-700 px-4 py-2 rounded flex items-center gap-2">
            <span className="material-icons">
              <Image
                className="img-fluid"
                alt="icon_delete"
                src="/images/icons/filter.svg"
                width={24}
                height={24}
              />
            </span>{" "}
            Filter
          </button>
        </div>

        <div className="flex gap-2 justify-end">
          <button className="border border-gray-500 text-gray-700 px-4 py-2 rounded flex items-center gap-2">
            <span className="material-icons">
              <Image
                className="img-fluid"
                alt="icon_delete"
                src="/images/icons/trash.svg"
                width={16}
                height={16}
              />
            </span>{" "}
            Hapus
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <span className="material-icons">
              <Image
                className="img-fluid"
                alt="icon_delete"
                src="/images/icons/plus.svg"
                width={16}
                height={16}
              />
            </span>{" "}
            Tambah Admin
          </button>
        </div>
      </div>
      <table className="w-full rounded-lg">
        <thead>
          <tr>
            <th className="border-b border-gray-500 px-4 py-2">
              <input type="checkbox" />
            </th>
            <th className="border-b border-gray-500 px-4 py-2 text-left">
              Nama Admin
            </th>
            <th className="border-b border-gray-500 px-4 py-2 text-left">
              Email
            </th>
            <th className="border-b border-gray-500 px-4 py-2 text-left">
              Divisi
            </th>
            <th className="border-b border-gray-500 px-4 py-2 text-left">
              Posisi
            </th>
            <th className="border-b border-gray-500 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-50">
            <td className="px-4 py-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="px-4 py-2">Mirsa Erisar Raib</td>
            <td className="px-4 py-2">mirsa@satukelas.com</td>
            <td className="px-4 py-2">Digital Product</td>
            <td className="px-4 py-2">APM</td>
            <td className="px-4 py-2 text-center">
              <button className="text-gray-500 hover:text-blue-500">
                <span className="material-icons">
                  <Image
                    className="img-fluid"
                    alt="icon_delete"
                    src="/images/icons/pencil.svg"
                    width={16}
                    height={16}
                  />
                </span>
              </button>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="px-4 py-2">Kenzo Adhisatrio</td>
            <td className="px-4 py-2">adhisatrio@satukelas.com</td>
            <td className="px-4 py-2">Digital Product</td>
            <td className="px-4 py-2">CEO</td>
            <td className="px-4 py-2 text-center">
              <button className="text-gray-500 hover:text-blue-500">
                <span className="material-icons">
                  <Image
                    className="img-fluid"
                    alt="icon_delete"
                    src="/images/icons/pencil.svg"
                    width={16}
                    height={16}
                  />
                </span>
              </button>
            </td>
          </tr>
          <tr className="bg-blue-50">
            <td className="px-4 py-2 text-center">
              <input type="checkbox" />
            </td>
            <td className="px-4 py-2">Nataya Aviani</td>
            <td className="px-4 py-2">nataya@satukelas.com</td>
            <td className="px-4 py-2">HRD</td>
            <td className="px-4 py-2">HR</td>
            <td className="px-4 py-2 text-center">
              <button className="text-gray-500 hover:text-blue-500">
                <span className="material-icons">
                  <Image
                    className="img-fluid"
                    alt="icon_delete"
                    src="/images/icons/pencil.svg"
                    width={16}
                    height={16}
                  />
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
