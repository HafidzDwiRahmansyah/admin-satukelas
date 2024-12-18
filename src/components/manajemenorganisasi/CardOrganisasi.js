import Image from "next/image";

export default function CardOrgansisasi() {
  return (
    <div className="card rounded-md bg-white w-full m-2">
      <div className="card-body">
        <div className="flex items-arround justify-between">
          <h5 className="p-4 poppins-bold">
            <b>Organisasi Anda</b>
          </h5>
          <a className="p-4" href="/manajemen-user/edit-profile-organisasi">
            <Image
              className="img-fluid"
              alt="icon pencil"
              src="/images/icons/pencil.svg"
              width={15}
              height={15}
            />
          </a>
        </div>
        <div className="flex grid lg:grid-cols-10 align-items justify-content-center p-3">
          <div className="col-span-3">
            <Image
              className="img-fluid mx-auto"
              alt="Logo Satukelas"
              src="/images/lg_skls.svg"
              width={90}
              height={90}
            />
          </div>
          <div className="col-span-7">
            <h3 className="poppins-bold">
              <b>PT Satukelas Adhyapana Nusantara</b>
            </h3>
            <div className="group-alamat">
              <div className="flex">
                <Image
                  className="img-fluid m-2"
                  alt="Logo Satukelas"
                  src="/images/icons/geo_gray.svg"
                  width={10}
                  height={10}
                />
                <p className="text-gray-400 poppins-regular fs-14">
                  No. 65D, Jl. Raya Ragunan No.RT. 12, Ps. Minggu
                </p>
              </div>
              <p className="text-gray-400 poppins-regular fs-14 ml-6 mr-2">
                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520
              </p>
            </div>
            <p className="text-gray-600 poppins-semibold fs-14 ml-6 py-2">
              Contact Person
            </p>
            <p className="fs-14 text-gray-500 poppins-regular ml-6">
              Nataya Aviani
            </p>
            <div className="flex ml-6 py-1">
              <div className="flex">
                <Image
                  className="img-fluid mr-2"
                  alt="Logo Satukelas"
                  src="/images/icons/phone_gray.svg"
                  width={10}
                  height={10}
                />
                <p className="fs-12 poppins-regular text-gray-400">
                  085677788899
                </p>
              </div>
              <div className="flex">
                <Image
                  className="img-fluid mx-2"
                  alt="Logo Satukelas"
                  src="/images/icons/mail_gray.svg"
                  width={10}
                  height={10}
                />
                <p className="fs-12 poppins-regular text-gray-400">
                  satukelasplatforma@satukelas.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
