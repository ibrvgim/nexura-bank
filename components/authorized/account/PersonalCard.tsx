import Avatar from "./Avatar";

function PersonalCard({ fullName }: { fullName: string }) {
  return (
    <div className="justify-center rounded-2xl bg-stone-200 py-16 text-center">
      <Avatar />

      <p className="text-4xl font-extrabold uppercase">{fullName}</p>
      <p className="mt-2 text-gray-600">Personal Account Information</p>
    </div>
  );
}

export default PersonalCard;
