function PaymentItem({
  title,
  value,
  last = false,
  isBold = false,
  style,
}: {
  title: string;
  value: string;
  last?: boolean;
  isBold?: boolean;
  style?: string;
}) {
  return (
    <p
      className={`text-gray-400 ${!last ? "mb-3" : isBold ? "text-lg font-bold tracking-wide text-gray-900" : ""}`}
    >
      {title}:
      <span
        className={`float-right ${isBold ? "text-gray-900" : "font-light text-gray-700"} ${style}`}
      >
        {value}
      </span>
    </p>
  );
}

export default PaymentItem;
