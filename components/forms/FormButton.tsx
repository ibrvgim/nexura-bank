function FormButton({
  title,
  active = true,
  onClick,
  type = "button",
  isPending = false,
  isSecondary = false,
}: {
  title: string;
  active?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  isPending?: boolean;
  isSecondary?: boolean;
}) {
  if (isSecondary) {
    return (
      <button
        className={`mt-12 w-full rounded-full py-2 font-medium tracking-wide outline-2 transition-all duration-200 ${active ? "cursor-pointer text-gray-700 outline-gray-600 hover:bg-gray-100" : "cursor-not-allowed bg-stone-300 text-stone-500 opacity-70 outline-stone-300"}`}
        onClick={onClick}
        type={type}
        disabled={!active || isPending}
      >
        {title}
      </button>
    );
  }

  return (
    <button
      className={`mt-12 w-full rounded-full py-2 font-medium tracking-wide outline-2 transition-all duration-200 ${active && !isPending ? "cursor-pointer bg-green-400 text-white outline-green-400 hover:bg-transparent hover:text-green-400" : isPending ? "cursor-not-allowed bg-green-300 text-white outline-green-300" : "cursor-not-allowed bg-stone-300 text-stone-500 opacity-70 outline-stone-300"}`}
      onClick={onClick}
      type={type}
      disabled={!active || isPending}
    >
      {isPending ? (
        <span className="button-loader inline-block">&nbsp;</span>
      ) : (
        title
      )}
    </button>
  );
}

export default FormButton;
