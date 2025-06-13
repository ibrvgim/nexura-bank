import {
  BANK_TRANSFER_FEE,
  CREDIT_CARD_FEE,
  DEBIT_CARD_FEE,
  NEXURA_FEE,
} from "@/constant/constants";

export function calculateFees(totalAmount: string | number, fees: number) {
  return Number(totalAmount) - (Number(totalAmount) * fees) / 100;
}

export function calculateAmountWithoutFees(
  paymentMethod: string | undefined = "bank transfer",
  totalAmount: string | number | undefined,
) {
  if (!paymentMethod || !totalAmount) return;

  if (paymentMethod === "bank transfer")
    return calculateFees(totalAmount, NEXURA_FEE + BANK_TRANSFER_FEE);
  else if (paymentMethod === "debit card")
    return calculateFees(totalAmount, NEXURA_FEE + DEBIT_CARD_FEE);
  else if (paymentMethod === "credit card")
    return calculateFees(totalAmount, NEXURA_FEE + CREDIT_CARD_FEE);
}
