import getCurrencies from "@/data/getCurrencies";
import Converter from "./Converter";
import getCurrenciesRate from "@/data/getCurrenciesRate";
import ConverterData from "@/types/types";

async function TransferMoney({
  converterData,
}: {
  converterData: ConverterData;
}) {
  const isConverterEmpty = !Object.entries(converterData).length;

  const allCurrencies = (await getCurrencies()) || [];
  const currenciesRate =
    !isConverterEmpty && (await getCurrenciesRate(converterData.to));

  const chosenCurrencyRate =
    !isConverterEmpty &&
    Number(currenciesRate.rates[converterData?.to.toUpperCase()]);

  return (
    <div className="my-15">
      <p className="mb-8 text-2xl font-medium">Transfer Money</p>

      <Converter
        allCurrencies={allCurrencies}
        chosenCurrencyRate={chosenCurrencyRate || 0}
        converterData={converterData}
        isConverterEmpty={isConverterEmpty}
      />
    </div>
  );
}

export default TransferMoney;
