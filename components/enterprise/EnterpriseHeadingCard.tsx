import { SecondaryButton } from "../common/Buttons";

function EnterpriseHeadingCard() {
  return (
    <section className="py-20">
      <p className="mx-auto w-[80%] text-center text-7xl font-extrabold text-gray-800 uppercase">
        Evolve business with an integrated payments solution
      </p>
      <p className="mx-auto my-8 w-1/2 text-center text-lg tracking-wide">
        Connecting banks, financial institutions and enterprises to our
        next-generation payment solutions. Deliver the experiences customersw
        seek out – from within your own product ecosystem.
      </p>

      <div className="text-center text-white *:border-gray-800 *:bg-gray-800 *:px-16 *:py-2 *:hover:border-gray-700 *:hover:bg-transparent *:hover:text-gray-800">
        <SecondaryButton path="">Get in Touch</SecondaryButton>
      </div>
    </section>
  );
}

export default EnterpriseHeadingCard;
