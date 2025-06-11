import { SendAddMoneyType } from "@/types/types";
import ActionCard from "./send-money/ActionCard";
import {
  BuildingLibraryIcon,
  ClockIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline";

function MoneyAmountConditions({
  formData,
  currentCurrencySymbol,
  isSendMoneyForm = true,
}: {
  formData:
    | Pick<
        SendAddMoneyType,
        "initialAmount" | "currency" | "payingWith" | "arrivesBy"
      >
    | SendAddMoneyType;

  currentCurrencySymbol: string;
  isSendMoneyForm?: boolean;
}) {
  return (
    <>
      <ul className="mt-12 mb-8 flex flex-col gap-8 border-b border-b-stone-300 pb-8">
        <li>
          <ActionCard
            icon={<BuildingLibraryIcon />}
            title="Paying with"
            pathTitle="Change"
            path=""
            style="capitalize"
          >
            {formData.payingWith}
          </ActionCard>
        </li>

        <li>
          <ActionCard
            icon={<ClockIcon />}
            title="Arrives"
            pathTitle={isSendMoneyForm ? "Schedule" : ""}
            path={isSendMoneyForm ? "" : ""}
            isSendMoneyForm={isSendMoneyForm}
            tooltipTitle="Nexura offers instant transactions, but in some situations, there might be delays — up to the time shown."
          >
            by {formData.arrivesBy}
          </ActionCard>
        </li>
      </ul>

      <ActionCard
        icon={<ReceiptPercentIcon />}
        title="Total amount"
        initialAmount={formData.initialAmount}
        currencySymbol={currentCurrencySymbol}
        tooltipTitle="Fee amounts vary based on the selected payment method and include a Nexura transaction fee."
      >
        with Fees
      </ActionCard>
    </>
  );
}

export default MoneyAmountConditions;
