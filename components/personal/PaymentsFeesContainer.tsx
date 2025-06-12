import { ChevronRightIcon } from "@heroicons/react/16/solid";
import BasicModalWindow from "../common/BasicModalWindow";
import PaymentOptions from "../forms/PaymentOptions";
import {
  calculateAmountWithoutFees,
  calculateFees,
} from "@/utilities/calculateFees";
import { NEXURA_FEE } from "@/constant/constants";
import { SendAddMoneyFieldKeys } from "@/types/types";
import { useState } from "react";

interface FormDataInterface {
  sendAmount: string;
  sendCurrency: string;
  receiveCurrency: string;
  payingWith: string;
}

function PaymentsFeesContainer({
  currentCurrencySymbol,
  handleFormData,
  formData,
}: {
  currentCurrencySymbol: string;
  handleFormData: (key: SendAddMoneyFieldKeys, value: string) => void;
  formData: FormDataInterface;
}) {
  const [openModalWindow, setModalWindow] = useState(false);

  function handleClose() {
    setModalWindow(false);
  }

  function handleOpen() {
    setModalWindow(true);
  }

  const calculatePaymentMethodFee =
    Number(formData.sendAmount) -
    (calculateAmountWithoutFees(formData.payingWith, formData.sendAmount) ||
      Number(formData.sendAmount));

  const calculateNexuraFee =
    Number(formData.sendAmount) -
    calculateFees(formData.sendAmount, NEXURA_FEE);

  const totalFeesPercentage =
    ((calculatePaymentMethodFee + calculateNexuraFee) * 100) /
    Number(formData.sendAmount);

  return (
    <>
      <div>
        <label className="mb-3 block text-xs font-medium tracking-wider text-gray-700 uppercase">
          Paying with:
        </label>

        <BasicModalWindow
          open={openModalWindow}
          handleClose={handleClose}
          button={
            <button
              className="flex w-full cursor-pointer items-center justify-between rounded-md border-2 border-gray-400 px-4 py-3 text-sm tracking-wide text-gray-600 capitalize transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white"
              onClick={handleOpen}
            >
              {formData.payingWith}
              <span className="flex items-center gap-1 tracking-wide">
                Change <ChevronRightIcon className="size-4" />
              </span>
            </button>
          }
        >
          <PaymentOptions
            currencySymbol={currentCurrencySymbol || "$"}
            handleClose={handleClose}
            handleFormData={handleFormData}
            isSendMoney
          />
        </BasicModalWindow>
      </div>

      <div className="rounded-md border-2 border-gray-200 p-3 text-sm font-light tracking-wide text-gray-600">
        <div className="pb-2">
          <Fee
            feeName={formData.payingWith}
            amount={calculatePaymentMethodFee.toFixed(2)}
            currency={currentCurrencySymbol || "$"}
          />
          <Fee
            feeName="Nexura"
            amount={calculateNexuraFee.toFixed(2)}
            currency={currentCurrencySymbol || "$"}
          />
        </div>

        <p className="border-t-2 border-t-gray-200 pt-2 font-medium text-gray-700">
          Total Fees ({totalFeesPercentage.toFixed(2)}%){" "}
          <span className="float-right">
            {(calculatePaymentMethodFee + calculateNexuraFee).toFixed(2)}
            {currentCurrencySymbol || "$"}
          </span>
        </p>
      </div>

      <p className="text-sm text-gray-500">
        You are able to save up to{" "}
        <span className="font-medium">
          {currentCurrencySymbol}
          {((calculatePaymentMethodFee + calculateNexuraFee) * 3).toFixed(2)}
        </span>{" "}
        with us.
      </p>
    </>
  );
}

function Fee({
  feeName,
  amount,
  currency,
}: {
  feeName: string;
  amount: number | string;
  currency: string;
}) {
  return (
    <p className="capitalize">
      {feeName} Fee{" "}
      <span className="float-right">
        {amount}
        {currency}
      </span>
    </p>
  );
}

export default PaymentsFeesContainer;
