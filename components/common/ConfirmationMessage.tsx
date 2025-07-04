function ConfirmationMessage({
  title,
  children,
  onClose,
  isPending,
  formAction,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  isPending: boolean;
  formAction: (formData: FormData) => void;
}) {
  return (
    <div className="px-10 py-2">
      <p className="mb-4 w-3/4 text-3xl leading-11 font-bold tracking-wider text-red-500">
        {title}
      </p>

      <p className="leading-8 tracking-wide text-gray-500">{children}</p>

      <div className="float-right mt-8 flex gap-8">
        <button
          className="cursor-pointer text-gray-400 transition-all duration-200 hover:text-gray-800 disabled:cursor-not-allowed disabled:hover:text-gray-800"
          onClick={onClose}
          disabled={isPending}
        >
          Cancel
        </button>

        <form action={formAction}>
          <button
            className="cursor-pointer rounded-md border-2 border-red-500 bg-red-500 px-10 py-1 text-white transition-all duration-200 hover:bg-transparent hover:text-red-500 disabled:cursor-not-allowed disabled:border-red-400 disabled:bg-red-400 disabled:text-white disabled:opacity-70 disabled:hover:bg-red-400"
            disabled={isPending}
          >
            {isPending ? "Processing..." : "Confirm"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConfirmationMessage;
