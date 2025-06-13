function PaymentDetailsCard({
  title,
  children,
  bottomMargin,
  isChangeable = false,
  onClick,
}: {
  title?: string;
  children: React.ReactNode;
  bottomMargin?: string;
  isChangeable?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={`relative rounded-lg border border-gray-400 px-6 ${title ? "pt-9 pb-6" : "py-6"} ${bottomMargin}`}
    >
      {title && (
        <p className="absolute -top-2.5 left-10 bg-white px-2 text-sm font-medium tracking-wide text-gray-700 uppercase">
          {title}
        </p>
      )}

      {children}

      {isChangeable && (
        <button
          onClick={onClick}
          className="absolute -top-2.5 right-5 cursor-pointer bg-white px-2 text-sm text-gray-400 transition-colors hover:text-green-400"
        >
          Change
        </button>
      )}
    </div>
  );
}

export default PaymentDetailsCard;
