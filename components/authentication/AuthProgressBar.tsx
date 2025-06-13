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
        onClick={() => handleNextStep("firstStep")}
        isActive={!!registrationStep}
      />

      <ProgressLine
        isActive={
          registrationStep === "secondStep" || registrationStep === "thirdStep"
        }
      />

      <StepItem
        icon={<LockClosedIcon />}
        onClick={() => handleNextStep("secondStep")}
        isActive={
          registrationStep === "secondStep" || registrationStep === "thirdStep"
        }
      />

      <ProgressLine isActive={registrationStep === "thirdStep"} />

      <StepItem
        icon={<IdentificationIcon />}
        onClick={() => handleNextStep("thirdStep")}
        isActive={registrationStep === "thirdStep"}
      />
    </ul>
  );
}

function StepItem({
  icon,
  isActive = false,
  onClick,
}: {
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <li>
      <button
        className={`inline-block cursor-pointer rounded-full p-4 *:size-6 ${isActive ? "bg-green-400 text-white" : "bg-stone-200 text-stone-600"}`}
        onClick={onClick}
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
