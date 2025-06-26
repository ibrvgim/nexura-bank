import Avatar from "./Avatar";

function PersonalCard({
  accountHolder,
  isAccountBusiness = false,
}: {
  accountHolder: string;
  isAccountBusiness?: boolean;
}) {
  return (
    <div className="justify-center rounded-2xl bg-stone-200 px-4 py-16 text-center">
      <Avatar />

      <p className="text-4xl font-extrabold uppercase">{accountHolder}</p>
      <p className="mt-2 text-gray-600">
        {isAccountBusiness ? "Business Account" : "Personal Account"}
      </p>
    </div>
  );
}

export default PersonalCard;
