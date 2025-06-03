// debit card type
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

export default interface ConverterData {
  from: string;
  to: string;
  amount: string;
}
