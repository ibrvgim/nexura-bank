import Converter from "./Converter";
import { ConverterDataType, CurrencyItem } from "@/types/types";

function TransferMoney({
  converterData,
  allCurrencies,
  currencyRate,
}: {
  converterData: ConverterDataType;
  allCurrencies: CurrencyItem[];
  currencyRate: number;
}) {
  const isConverterEmpty = !Object.entries(converterData).length;

  return (
    <div className="my-15">
      <p className="mb-8 text-2xl font-medium">Transfer Money</p>

      <Converter
        allCurrencies={allCurrencies || []}
        currencyRate={currencyRate}
        converterData={converterData}
        isConverterEmpty={isConverterEmpty}
      />
    </div>
  );
}

export default TransferMoney;
