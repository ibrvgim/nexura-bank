import { SendMoneyType } from "@/types/types";
import {
  isEmailValid,
  isInputLengthValid,
} from "@/utilities/validateInputsValue";
import {
  BanknotesIcon,
  UserIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";

function FormProgressBar({
  formData,
  formStep,
  setFormStep,
  params,
}: {
  formData: SendMoneyType;
  formStep: string;
  setFormStep: (value: string) => void;
  params: {
    amountToTransfer: string | undefined;
    transferCurrency: string | undefined;
  };
}) {
  return (
    <ul className="flex items-center justify-center">
      <StepItem
        icon={<BanknotesIcon />}
        stepName="amount"
        setFormStep={setFormStep}
        formData={formData}
        isActive={
          formStep === "amount" ||
          formStep === "recipient" ||
          formStep === "pay"
        }
      />

      <ProgressLine isActive={formStep === "recipient" || formStep === "pay"} />

      <StepItem
        icon={<UserIcon />}
        stepName="recipient"
        setFormStep={setFormStep}
        formData={formData}
        isActive={formStep === "recipient" || formStep === "pay"}
        params={params}
      />

      <ProgressLine isActive={formStep === "pay"} />

      <StepItem
        icon={<CreditCardIcon />}
        stepName="pay"
        setFormStep={setFormStep}
        formData={formData}
        isActive={formStep === "pay"}
        params={params}
      />
    </ul>
  );
}

function StepItem({
  icon,
  isActive,
  stepName,
  formData,
  setFormStep,
  params,
}: {
  icon: React.ReactNode;
  isActive: boolean;
  stepName: string;
  formData: SendMoneyType;
  setFormStep: (value: string) => void;
  params?: {
    amountToTransfer: string | undefined;
    transferCurrency: string | undefined;
  };
}) {
  function handleFormStep() {
    const {
      amountToSend,
      accountType,
      accountNumber,
      accountSwift,
      recipientFullname,
    } = formData;

    const isAmountValid = amountToSend && Number(amountToSend) >= 5;
    const isStepSkippable = stepName === "amount" || stepName === "recipient";

    if (!isAmountValid) return;

    const isEU = accountType === "eu";
    const isOther = accountType === "other";

    if (isEU && (!accountNumber || !recipientFullname) && !isStepSkippable)
      return;

    if (
      isOther &&
      (!accountNumber || !accountSwift || !recipientFullname) &&
      !isStepSkippable
    )
      return;

    if (
      (!!isEmailValid(formData.recipientEmail).message ||
        !!isInputLengthValid(formData.accountNumber, 12)?.message ||
        !!isInputLengthValid(formData.recipientFullname, 5)?.message ||
        (formData.accountType === "other" &&
          !!isInputLengthValid(formData.accountSwift, 8)?.message)) &&
      !isStepSkippable
    )
      return;

    setFormStep(stepName);

    if (params && (params.amountToTransfer || params.transferCurrency))
      redirect("/send-money");
  }

  return (
    <li>
      <button
        className={`inline-block cursor-pointer rounded-full p-4 *:size-6 ${isActive ? "bg-green-400 text-white" : "bg-stone-200 text-stone-600"}`}
        onClick={handleFormStep}
      >
        {icon}
      </button>
    </li>
  );
}

function ProgressLine({ isActive = false }: { isActive?: boolean }) {
  return (
    <li
      className={`-z-10 -mx-2 h-[5px] w-60 rounded-full ${isActive ? "bg-green-400" : "bg-stone-200"}`}
    >
      &nbsp;
    </li>
  );
}

export default FormProgressBar;
