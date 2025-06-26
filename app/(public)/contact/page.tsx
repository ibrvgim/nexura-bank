import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nexura Team",
};

function Contact() {
  return (
    <section className="my-20">
      <div className="pb-12 text-center text-6xl leading-20 font-extrabold text-gray-800 uppercase">
        <p>Do you need help with something?</p>
        <p>Get in touch with us</p>
      </div>

      <div className="flex items-center gap-10 *:flex-1">
        <div>
          <p className="mb-3 text-3xl font-medium text-gray-700">
            Contact Nexura Team
          </p>
          <p className="mb-8 text-lg font-light text-gray-500">
            The quickest way to get in touch. Connect with our team in seconds.
            We can support you in more than 100 languages. Sign in and get in
            contact.
          </p>

          <Link
            href="/chat"
            className="inline-block rounded-full border-2 border-gray-700 px-8 py-1 font-medium transition-all duration-300 hover:bg-gray-800 hover:text-white"
          >
            Start Chat Now
          </Link>
        </div>

        <div className="relative h-[28rem] w-full">
          <Image
            src="/images/chat.webp"
            alt="chat sample image"
            fill
            className="object-contain"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
