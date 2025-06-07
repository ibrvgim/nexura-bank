"use client";

import AmountInput from "./AmountInput";
import { CurrencyItem } from "@/types/types";
import ActionCard from "./ActionCard";
import {
  BuildingLibraryIcon,
  ClockIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import FormButton from "../FormButton";

function SendMoneyAmountForm({
  allCurrencies,
}: {
  allCurrencies: CurrencyItem[];
}) {
  const [amountToSend, setAmountToSend] = useState("");

  return (
    <>
      <AmountInput
        label="Amount To Send:"
        name="sendAmount"
        type="text"
        placeholder="0"
        allCurrencies={allCurrencies}
        value={amountToSend}
        onHandle={setAmountToSend}
      />

      {amountToSend && Number(amountToSend) >= 5 && <SendAmountConditions />}

      <FormButton active={!!amountToSend && Number(amountToSend) >= 5}>
        Continue
      </FormButton>
    </>
  );
}

function SendAmountConditions() {
  return (
    <>
      <ul className="mt-12 mb-8 flex flex-col gap-8 border-b border-b-stone-300 pb-8">
        <li>
          <ActionCard
            icon={<BuildingLibraryIcon />}
            title="Paying with"
            pathTitle="Change"
            path=""
          >
            Bank Transfer
          </ActionCard>
        </li>

        <li>
          <ActionCard
            icon={<ClockIcon />}
            title="Arrives"
            pathTitle="Schedule"
            path=""
          >
            by Monday
          </ActionCard>
        </li>
      </ul>

      <ActionCard icon={<ReceiptPercentIcon />} title="Total amount" path="">
        with Fees
      </ActionCard>
    </>
  );
}

export default SendMoneyAmountForm;
