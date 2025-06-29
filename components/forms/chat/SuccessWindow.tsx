import GoHome from "@/components/common/GoHome";
import Image from "next/image";

function SuccessWindow() {
  return (
    <div className="mt-14 px-20 text-center">
      <Image
        src="/illustrations/success.svg"
        alt="successfull"
        height={300}
        width={300}
        draggable={false}
        className="mx-auto"
      />
      <p className="mt-11 mb-4 text-6xl font-extrabold tracking-wide text-gray-700 uppercase">
        Thank You!
      </p>
      <p className="mx-auto w-3/4 tracking-wide text-gray-500">
        We are glad to inform that we have received your request successfully
        and will get back to you as soon as possible. Please remember to check
        your inbox for our response.
      </p>

      <GoHome />
    </div>
  );
}

export default SuccessWindow;
