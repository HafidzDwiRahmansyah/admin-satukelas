import Image from "next/image";

export default function useractive() {
  return (
    <div className="navbar p-4 rounded-lg shadow col-span-2">
      <h2 className="pb-4 fs-14 poppins-semibold">User Aktif</h2>
      <div className="flex py-2">
        <div className="image p-2">
          <Image
            classsName="img-fluid"
            alt="icons"
            src="/images/icons/user-active.svg"
            width={35}
            height={35}
          />
        </div>
        <div className="text pl-2">
          <h1 className="poppins-extrabold text-orange-500 leading-none fs-50"><b>10</b></h1>
          <p className="poppins-regular text-gray-500 fs-14"><span className="text-orange-500">user</span> sedang aktif saat ini</p>
        </div>
      </div>
    </div>
  );
}
