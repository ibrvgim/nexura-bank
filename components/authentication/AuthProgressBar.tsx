import {
  AtSymbolIcon,
  LockClosedIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

function AuthProgressBar({
  registrationStep,
  handleNextStep,
}: {
  registrationStep: "firstStep" | "secondStep" | "thirdStep";
  handleNextStep: (value: "firstStep" | "secondStep" | "thirdStep") => void;
}) {
  return (
    <ul className="mb-16 flex items-center justify-center">
      <StepItem
        icon={<AtSymbolIcon />}
        stepName="firstStep"
        currentStep={registrationStep}
        onClick={handleNextStep}
        isActive={!!registrationStep}
      />

      <ProgressLine
        isActive={
          registrationStep === "secondStep" || registrationStep === "thirdStep"
        }
      />

      <StepItem
        icon={<LockClosedIcon />}
        stepName="secondStep"
        currentStep={registrationStep}
        onClick={handleNextStep}
        isActive={
          registrationStep === "secondStep" || registrationStep === "thirdStep"
        }
      />

      <ProgressLine isActive={registrationStep === "thirdStep"} />

      <StepItem
        icon={<IdentificationIcon />}
        stepName="thirdStep"
        currentStep={registrationStep}
        onClick={handleNextStep}
        isActive={registrationStep === "thirdStep"}
      />
    </ul>
  );
}

function StepItem({
  icon,
  isActive = false,
  stepName,
  currentStep,
  onClick,
}: {
  icon: React.ReactNode;
  isActive?: boolean;
  stepName: "firstStep" | "secondStep" | "thirdStep";
  currentStep: "firstStep" | "secondStep" | "thirdStep";
  onClick: (value: "firstStep" | "secondStep" | "thirdStep") => void;
}) {
  function handleProgressBar() {
    if (stepName === "thirdStep") return;
    else if (currentStep === "firstStep") return;
    else onClick(stepName);
  }

  return (
    <li>
      <button
        className={`inline-block cursor-pointer rounded-full p-4 *:size-6 ${isActive ? "bg-green-400 text-white" : "bg-stone-200 text-stone-600"}`}
        onClick={handleProgressBar}
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

export default AuthProgressBar;
