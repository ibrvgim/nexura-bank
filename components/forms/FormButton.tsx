import Link from "next/link";

function FormButton({
  children,
  active = true,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href=""
      className={`mt-12 block rounded-full py-2 text-center font-medium tracking-wide outline-2 transition-all duration-200 ${active ? "bg-green-400 text-white outline-green-400 hover:bg-transparent hover:text-green-400" : "cursor-not-allowed bg-stone-300 text-stone-500 opacity-70 outline-stone-300"}`}
    >
      {children}
    </Link>
  );
}

export default FormButton;
