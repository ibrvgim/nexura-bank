import CreateBusinessAccountCard from "@/components/authorized/account/CreateBusinessAccountCard";
import Logout from "@/components/authorized/account/Logout";
import ManageAccount from "@/components/authorized/account/ManageAccount";
import PersonalCard from "@/components/authorized/account/PersonalCard";

function Account() {
  return (
    <>
      <p className="text-3xl font-semibold tracking-wide text-gray-700">
        Account Settings
      </p>

      <div className="mt-10 flex gap-10 *:flex-1">
        <div>
          <PersonalCard />
          <CreateBusinessAccountCard />

          <p className="my-6 text-center text-stone-500">
            Nexura Customer Number:{" "}
            <span
              role="button"
              className="inline-block cursor-pointer hover:text-green-500"
            >
              364869374
            </span>
          </p>

          <Logout />
        </div>

        <ManageAccount />
      </div>
    </>
  );
}

export default Account;
