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
  isScheduled?: boolean;
  recipientFullname?: string;
  recipientEmail?: string;
  accountType?: "eu" | "other";
  accountNumber?: string;
  accountSwift?: string;
}

export type SendAddMoneyFieldKeys =
  | "initialAmount"
  | "currency"
  | "payingWith"
  | "arrivesBy"
  | "isScheduled"
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
  handleFormData: (key: SendAddMoneyFieldKeys, value: string | boolean) => void;
  currentCurrencySymbol: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCurrency?: (value: string) => void;
  params?: {
    amountToTransfer: string | undefined;
    transferCurrency: string | undefined;
  };
  isSendMoneyForm?: boolean;
  nextForm?: string;
}

export interface RegistrationDataType {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface UserDataType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  customerNumber: number | string;
  nexuraBusinessAccount: boolean;
}

export interface BusinessAccountType {
  user_id: string;
  created_at: string | Date;
  businessName: string;
  businessCountry: string;
  businessAddress: string;
  businessCity: string;
  businessPostal: string;
  businessSector: string;
  employeesNumber: string;
  businessWebsite: string;
  team: string[];
}

export interface TransactionDataType {
  id: string;
  transactionDate: string;
  recipientFullName: string;
  amount: string | number;
  paymentMethod: string;
  actionType: "withdrawn" | "pawn";
  isScheduled: boolean;
}
