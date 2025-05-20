import Image from "next/image";
import Link from "next/link";

function ArticlesCard() {
  return (
    <div className="-mx-20 flex items-center gap-10 bg-gray-800 px-20 py-30 text-white *:flex-1">
      <div>
        <p className="mb-3 text-5xl leading-14 font-bold">
          Drive growth with solutions that may fit your industry
        </p>
        <p className="mb-10">
          Explore articles, case studies, and industry insights.
        </p>

        <Link
          href=""
          className="rounded-full border-3 border-white px-12 py-2 text-lg font-medium transition-all duration-300 hover:bg-white hover:text-gray-800"
        >
          Explore the Resource Centre
        </Link>
      </div>

      <div>
        <Image
          src="/images/team.webp"
          alt="team image"
          height={600}
          width={600}
          className="mx-auto rounded-2xl"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default ArticlesCard;
