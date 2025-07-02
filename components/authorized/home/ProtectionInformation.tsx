import { SecondaryButton } from "@/components/common/Buttons";
import { LockClosedIcon } from "@heroicons/react/24/outline";

function ProtectionInformation() {
  return (
    <div className="mt-20 text-center">
      <span>
        <LockClosedIcon className="mx-auto mb-3 size-10" />
      </span>

      <p className="mb-3 font-semibold tracking-wider uppercase">
        Money Protected
      </p>
      <p className="mx-auto mb-5 w-3/4 font-light tracking-wide text-gray-500">
        Nexura promise to protect every penny with cutting-edge technologies and
        ready to provide any time customer support.
      </p>

      <div className="*:text-sm">
        <SecondaryButton path="/money-protection">Learn More</SecondaryButton>
      </div>
    </div>
  );
}

export default ProtectionInformation;
