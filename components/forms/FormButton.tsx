function FormButton({
  children,
  active = true,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`mt-12 w-full rounded-full py-2 font-medium tracking-wide outline-2 transition-all duration-200 ${active ? "cursor-pointer bg-green-400 text-white outline-green-400 hover:bg-transparent hover:text-green-400" : "cursor-not-allowed bg-stone-300 text-stone-500 opacity-70 outline-stone-300"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FormButton;
