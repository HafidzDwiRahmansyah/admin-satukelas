import Image from "next/image";

export default function ContactSales() {
  return (
    <div className="card rounded-md bg-red-600 text-white max-h-[150px] m-2">
      <div className="card-body p-3">
        <div className="flex items-center">
          <div className="member text-center">
            <p className="fs-62 poppins-bold leading-none">10</p>
            <p className="fs-16 poppins-semibold">Membership</p>
          </div>

          <div className="text px-6" style={{ width: "230px" }}>
            <p className="poppins-regular fs-14">
              Akan berakhir dalam kurun waktu <b>30 Hari</b>
              <button className="bg-white text-red-600 poppins-semibold rounded-md px-2 py-1 mt-4">
                <div className="flex items-center">
                  <Image
                    className="img-fluid mx-2"
                    alt=""
                    src="/images/icons/phone_red.svg"
                    width={10}
                    height={10}
                  />
                  Hubungi Sales
                </div>
              </button>
            </p>
          </div>

          <div className="information">
            <Image
              className="img-fluid"
              alt="informasi"
              src="/images/icons/information.svg"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
