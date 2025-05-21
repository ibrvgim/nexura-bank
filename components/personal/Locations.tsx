import Image from "next/image";
import { PrimaryButton } from "../common/Buttons";

function Locations() {
  return (
    <section className="-mx-20 flex items-center bg-gray-50 px-20 py-36">
      <div className="flex-1">
        <p className="text-6xl leading-16 font-extrabold tracking-wide text-gray-700 uppercase">
          Nexura works everywhere
        </p>

        <p className="my-7 w-[80%] text-xl leading-8 font-light text-gray-500">
          We are in more than 140 countries worldwide and manage 30+ currencies.
          Join us today to make your life easier with{" "}
          <span className="text-green-600">Nexura</span>.
        </p>

        <div className="*:px-12">
          <PrimaryButton path="">Get a Nexura Account</PrimaryButton>
        </div>
      </div>

      <div className="flex-1">
        <Image
          src="/illustrations/world.svg"
          alt="nexura's locations image"
          height={550}
          width={550}
          draggable={false}
          className="mx-auto"
        />
      </div>
    </section>
  );
}

export default Locations;
