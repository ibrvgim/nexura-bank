import { PrimaryButton, SecondaryButton } from "../common/Buttons";

function BusinessHeadingCard() {
  return (
    <div className="-mx-20 bg-green-900 pt-16 pb-20 text-gray-100">
      <p className="mx-auto w-3/4 text-center text-7xl font-extrabold text-green-200 uppercase">
        Nexura business account for a huge team
      </p>

      <p className="mx-auto my-8 w-2/3 text-center text-xl">
        Create the business account with no hidden fees, high rates, or monthly
        charges. Pay your team, receive payments, and manage your international
        cash flow — all in one place.
      </p>

      <div className="flex items-center justify-center gap-3">
        <PrimaryButton path="" isStyleLight>
          Create a Business Account
        </PrimaryButton>

        <SecondaryButton path="" isStyleLight>
          Try Demo
        </SecondaryButton>
      </div>
    </div>
  );
}

export default BusinessHeadingCard;
