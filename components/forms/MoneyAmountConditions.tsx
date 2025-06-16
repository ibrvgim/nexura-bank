import { SendAddMoneyFieldKeys, SendAddMoneyType } from "@/types/types";
import ActionCard from "./ActionCard";
import {
  BuildingLibraryIcon,
  ClockIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline";
import { formatIntlDate } from "@/utilities/formatDate";

function MoneyAmountConditions({
  formData,
  currentCurrencySymbol,
  isSendMoneyForm = true,
  handleFormData,
}: {
  formData: SendAddMoneyType;

  currentCurrencySymbol: string;
  isSendMoneyForm?: boolean;
  handleFormData: (key: SendAddMoneyFieldKeys, value: string) => void;
}) {
  return (
    <>
      <ul className="mt-12 mb-8 flex flex-col gap-8 border-b border-b-stone-300 pb-8">
        <li>
          <ActionCard
            icon={<BuildingLibraryIcon />}
            title="Paying with"
            pathTitle="Change"
            style="capitalize"
            handleFormData={handleFormData}
            isPaymentMethod
            currencySymbol={currentCurrencySymbol}
          >
            {formData.payingWith}
          </ActionCard>
        </li>

        <li>
          <ActionCard
            icon={<ClockIcon />}
            title="Arrives"
            pathTitle={isSendMoneyForm ? "Schedule" : ""}
            formData={formData}
            isSendMoneyForm={isSendMoneyForm}
            tooltipTitle="Nexura offers instant transactions, but in some situations, there might be delays — up to the time shown."
            handleFormData={handleFormData}
          >
            by{" "}
            <span className="capitalize">
              {formatIntlDate(formData.arrivesBy)}
            </span>
          </ActionCard>
        </li>
      </ul>

      <ActionCard
        icon={<ReceiptPercentIcon />}
        title="Total amount"
        initialAmount={formData.initialAmount}
        currencySymbol={currentCurrencySymbol}
        tooltipTitle="Fee amounts vary based on the selected payment method and include a Nexura transaction fee."
        handleFormData={handleFormData}
        paymentMethod={formData.payingWith}
      >
        with Fees
      </ActionCard>
    </>
  );
}

export default MoneyAmountConditions;
