import BasicTooltip from "@/components/common/Tooltip";
import BasicModalWindow from "../common/BasicModalWindow";
import { useState } from "react";
import PaymentOptions from "./PaymentOptions";
import { SendAddMoneyFieldKeys } from "@/types/types";
import ScheduleDate from "./send-money/ScheduleDate";
import { calculateAmountWithoutFees } from "@/utilities/calculateFees";
import formatNumber from "@/utilities/formatNumber";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

interface ActionCardType {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  pathTitle?: string;
  initialAmount?: string;
  currencySymbol?: string;
  style?: string;
  isSendMoneyForm?: boolean;
  tooltipTitle?: string;
  handleFormData: (key: SendAddMoneyFieldKeys, value: string) => void;
  paymentMethod?: string;
  isPaymentMethod?: boolean;
}

function ActionCard({
  icon,
  title,
  children,
  pathTitle,
  initialAmount,
  currencySymbol,
  style,
  isSendMoneyForm = true,
  tooltipTitle,
  handleFormData,
  paymentMethod,
  isPaymentMethod = false,
}: ActionCardType) {
  const [modalWindowOpen, setModalWindowOpen] = useState(false);
  const handleOpen = () => setModalWindowOpen(true);
  const handleClose = () => setModalWindowOpen(false);

  const totalAmount = formatNumber(
    (
      calculateAmountWithoutFees(paymentMethod, initialAmount) ||
      Number(initialAmount)
    )?.toFixed(2),
  );

  return (
    <div className="flex items-center gap-4 font-medium">
      <div className="inline-block rounded-full bg-stone-200 p-4">
        <span className="*:size-6">{icon}</span>
      </div>

      <div>
        <p className="flex items-center gap-2 text-[15px] font-normal text-gray-500">
          {title}{" "}
          {tooltipTitle && (
            <BasicTooltip title={tooltipTitle}>
              <QuestionMarkCircleIcon className="size-4" />
            </BasicTooltip>
          )}
        </p>
        {children && <p className={`tracking-wide ${style}`}>{children}</p>}
      </div>

      {isSendMoneyForm && (
        <>
          {pathTitle ? (
            <BasicModalWindow
              open={modalWindowOpen}
              handleClose={handleClose}
              button={
                <button
                  className="ml-auto inline-block min-w-28 cursor-pointer rounded-full border-2 border-green-400 px-4 text-center text-sm font-normal tracking-wide text-green-400 transition-colors duration-200 hover:border-green-600 hover:text-green-600"
                  onClick={handleOpen}
                >
                  {pathTitle}
                </button>
              }
            >
              {isPaymentMethod ? (
                <PaymentOptions
                  isSendMoney={isSendMoneyForm}
                  handleFormData={handleFormData}
                  handleClose={handleClose}
                  currencySymbol={currencySymbol || "$"}
                />
              ) : (
                <ScheduleDate
                  handleClose={handleClose}
                  handleFormData={handleFormData}
                />
              )}
            </BasicModalWindow>
          ) : (
            <p className="ml-auto text-2xl font-extrabold text-gray-700">
              {totalAmount}
              {currencySymbol}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default ActionCard;
