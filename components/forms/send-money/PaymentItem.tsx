function PaymentItem({
  title,
  value,
  last = false,
  isBold = false,
}: {
  title: string;
  value: string;
  last?: boolean;
  isBold?: boolean;
}) {
  return (
    <p
      className={`text-gray-600 ${!last ? "mb-3" : isBold ? "text-lg font-bold tracking-wide text-gray-900" : ""}`}
    >
      {title}:{" "}
      <span
        className={`float-right ${isBold ? "text-gray-900" : "text-gray-400"}`}
      >
        {value}
      </span>
    </p>
  );
}

export default PaymentItem;
