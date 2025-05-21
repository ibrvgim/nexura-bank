import Image from "next/image";
import { SecondaryButton } from "../common/Buttons";

function DeveloperDocumentation() {
  return (
    <section className="flex items-center gap-10 py-14 *:flex-1">
      <div>
        <Image
          src="/images/code-image.webp"
          alt="api preview image"
          height={600}
          width={600}
          draggable={false}
        />
      </div>

      <div>
        <p className="mb-4 text-5xl font-extrabold text-gray-800 uppercase">
          Deliver Performance with our API
        </p>
        <p className="mb-8">
          Get API credentials, demo product experiences, and participate in our
          developer community. We make it easy for your team to integrate our
          solutions and add new features as your business scales.
        </p>

        <div className="*:px-12 *:py-2 *:hover:border-gray-800 *:hover:bg-gray-800 *:hover:text-white">
          <SecondaryButton path="">Get the API</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

export default DeveloperDocumentation;
