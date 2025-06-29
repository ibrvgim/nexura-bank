import Link from "next/link";

function GoHome() {
  return (
    <Link
      href="/home"
      className="mt-10 inline-block rounded-md border-2 border-gray-400 px-10 py-2 text-gray-400 transition-all duration-200 hover:border-gray-800 hover:bg-gray-800 hover:text-white"
    >
      Go Home
    </Link>
  );
}

export default GoHome;
