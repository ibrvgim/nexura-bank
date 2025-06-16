import { formatIntlDate } from "@/utilities/formatDate";

function PaymentItem({
  title,
  inputName,
  value,
  last = false,
  isBold = false,
  style,
  isDate,
}: {
  title: string;
  inputName?: string;
  value: string;
  last?: boolean;
  isBold?: boolean;
  style?: string;
  isDate?: boolean;
}) {
  return (
    <>
      <p
        className={`text-gray-400 ${!last ? "mb-3" : isBold ? "text-lg font-bold tracking-wide text-gray-900" : ""}`}
      >
        {title}:
        <span
          className={`float-right ${isBold ? "text-gray-900" : "font-light text-gray-700"} ${style}`}
        >
          {isDate ? formatIntlDate(value) : value}
        </span>
        {inputName && (
          <input type="text" name={inputName} value={value} readOnly hidden />
        )}
      </p>
    </>
  );
}

export default PaymentItem;
