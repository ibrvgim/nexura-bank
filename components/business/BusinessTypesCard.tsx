import Image from "next/image";
import { SecondaryButton } from "../common/Buttons";

function BusinessTypesCard() {
  return (
    <section className="my-30 flex items-center gap-10 rounded-2xl bg-green-900 px-24 py-20">
      <div className="flex-1">
        <p className="mb-4 text-5xl leading-14 font-extrabold text-green-200 uppercase">
          Medium or large sized business?
        </p>
        <p className="mb-8 text-lg leading-8 tracking-wide text-gray-100">
          Our team of experts can help your team scale and grow globally. Get in
          touch to hear how Nexura Business can work for you.
        </p>
        <SecondaryButton path="" isStyleLight>
          Get in Touch
        </SecondaryButton>
      </div>

      <div className="flex-1">
        <Image
          src="/illustrations/global-team.svg"
          alt="mailbox illustration"
          height={500}
          width={500}
          className="mx-auto"
          draggable={false}
        />
      </div>
    </section>
  );
}

export default BusinessTypesCard;
