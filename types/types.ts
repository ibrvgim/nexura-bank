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
