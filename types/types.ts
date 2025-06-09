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

export interface ConverterData {
  from: string;
  to: string;
  amount: string;
}

export interface SendMoneyType {
  amountToSend: string;
  currency: string;
  currencySymbol: string;
  payingWith: string;
  recipientFullname: string;
  recipientEmail: string;
  accountType: "eu" | "other";
  accountNumber: string;
  accountSwift: string;
}
