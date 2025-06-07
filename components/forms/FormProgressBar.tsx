import {
  BanknotesIcon,
  UserIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

function FormProgressBar() {
  return (
    <ul className="flex items-center justify-center">
      <StepItem icon={<BanknotesIcon />} active={true} />

      <li
        className={`-z-10 -mx-2 h-[5px] w-60 rounded-full ${true ? "bg-green-400" : "bg-stone-200"}`}
      >
        &nbsp;
      </li>

      <StepItem icon={<UserIcon />} active={true} />

      <li className="-z-10 -mx-2 h-[5px] w-60 rounded-full bg-stone-200">
        &nbsp;
      </li>

      <StepItem icon={<CreditCardIcon />} active={false} />
    </ul>
  );
}

function StepItem({
  icon,
  active,
}: {
  icon: React.ReactNode;
  active: boolean;
}) {
  return (
    <li>
      <button
        className={`inline-block cursor-pointer rounded-full p-4 *:size-6 ${active ? "bg-green-400 text-white" : "bg-stone-200 text-stone-600"}`}
      >
        {icon}
      </button>
    </li>
  );
}

export default FormProgressBar;
