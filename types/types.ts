export interface DebitCardType {
  image: string;
  type: string;
  deliveryTime: string;
  price: number;
  offerings: OfferingType[];
}

interface OfferingType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface CurrencyItem {
  currencyCode: string;
  currencyName: string;
  currencySymbol: string;
  flag: string;
}

export interface ConverterDataType {
  from: string;
  to: string;
  amount: string;
}

export interface SendAddMoneyType {
  initialAmount: string;
  currency: string;
  payingWith: string;
  arrivesBy: string;
  recipientFullname: string;
  recipientEmail: string;
  accountType: "eu" | "other";
  accountNumber: string;
  accountSwift: string;
}

export type SendAddMoneyFieldKeys =
  | "initialAmount"
  | "currency"
  | "payingWith"
  | "arrivesBy"
  | "recipientFullname"
  | "recipientEmail"
  | "accountType"
  | "accountNumber"
  | "accountSwift";

export interface MoneyAmountFormType {
  allCurrencies: CurrencyItem[];
  setFormStep: (value: string) => void;
  formData:
    | SendAddMoneyType
    | Pick<
        SendAddMoneyType,
        "initialAmount" | "currency" | "payingWith" | "arrivesBy"
      >;
  handleFormData: (key: SendAddMoneyFieldKeys, value: string) => void;
  currentCurrencySymbol: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  params?: {
    amountToTransfer: string | undefined;
    transferCurrency: string | undefined;
  };
  isSendMoneyForm?: boolean;
}
