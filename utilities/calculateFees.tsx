import {
  BANK_TRANSFER_FEE,
  CREDIT_CARD_FEE,
  DEBIT_CARD_FEE,
} from "@/constant/constants";

export function calculateFees(totalAmount: string | number, fees: number) {
  return Number(totalAmount) - (Number(totalAmount) * fees) / 100;
}

// returns string due to formatNumber function
export function calculateAmountWithoutFees(
  paymentMethod: string | undefined = "bank transfer",
  totalAmount: string | number | undefined,
) {
  if (!paymentMethod || !totalAmount) return;

  if (paymentMethod === "bank transfer")
    return calculateFees(totalAmount, BANK_TRANSFER_FEE);
  else if (paymentMethod === "debit card")
    return calculateFees(totalAmount, BANK_TRANSFER_FEE + DEBIT_CARD_FEE);
  else if (paymentMethod === "credit card")
    return calculateFees(totalAmount, BANK_TRANSFER_FEE + CREDIT_CARD_FEE);
}
