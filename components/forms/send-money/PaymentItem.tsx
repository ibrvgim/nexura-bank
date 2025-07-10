import { formatIntlDate } from "@/utilities/formatDate";

function PaymentItem({
  title,
  inputName,
  value,
  last = false,
  isBold = false,
  style,
  isDate,
  cutValue,
}: {
  title: string;
  inputName?: string;
  value: string;
  last?: boolean;
  isBold?: boolean;
  style?: string;
  isDate?: boolean;
  cutValue?: number | undefined;
}) {
  return (
    <>
      <p
        className={`text-gray-400 ${isBold ? "text-lg font-bold tracking-wide text-gray-900" : !last ? "mb-3" : ""}`}
      >
        {title}:
        <span
          className={`float-right ${isBold ? "text-gray-900" : "font-light text-gray-700"} ${style}`}
        >
          {isDate
            ? formatIntlDate(value)
            : cutValue
              ? value.length > cutValue
                ? `${value.slice(0, cutValue)}...`
                : value
              : value}
        </span>
        {inputName && (
          <input type="text" name={inputName} value={value} readOnly hidden />
        )}
      </p>
    </>
  );
}

export default PaymentItem;
