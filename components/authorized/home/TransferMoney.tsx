import getCurrencies from "@/data/api/getCurrencies";
import Converter from "./Converter";
import getCurrenciesRate from "@/data/api/getCurrenciesRate";
import { ConverterData } from "@/types/types";

async function TransferMoney({
  converterData,
}: {
  converterData: ConverterData;
}) {
  const isConverterEmpty = !Object.entries(converterData).length;

  const allCurrencies = (await getCurrencies()) || [];
  const currencyRate =
    !isConverterEmpty &&
    (await getCurrenciesRate(converterData.from, converterData.to));

  return (
    <div className="my-15">
      <p className="mb-8 text-2xl font-medium">Transfer Money</p>

      <Converter
        allCurrencies={allCurrencies}
        currencyRate={currencyRate || 0}
        converterData={converterData}
        isConverterEmpty={isConverterEmpty}
      />
    </div>
  );
}

export default TransferMoney;
