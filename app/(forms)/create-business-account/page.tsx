// import BusinessFormContainer from "@/components/forms/create-business-account/BusinessFormContainer";
// import { getCountries } from "@/data/api/getCountries";
import GoHome from "@/components/common/GoHome";
import { createClient } from "@/data/supabase/server";
import { UserDataType } from "@/types/types";
import {
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { redirect } from "next/navigation";

async function CreateBusinessAccount() {
  // const allCountries = await getCountries();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { nexuraBusinessAccount } = user?.user_metadata as UserDataType;

  if (nexuraBusinessAccount) redirect("/business-account/home");

  const iconValues = "-mb-3 inline-block size-5";

  // return <BusinessFormContainer allCountries={allCountries} />;

  return (
    <div className="mt-20 mb-10 text-center">
      <Image
        src="/illustrations/construction-work.svg"
        alt="construction work image"
        height={450}
        width={450}
        className="mx-auto"
        draggable={false}
      />

      {/* <p className="mt-14 text-center text-5xl font-extrabold tracking-widest text-gray-700 uppercase">
        Coming Soon...
      </p> */}
      <p className="mt-14 text-center text-4xl font-extrabold tracking-widest text-gray-600 uppercase">
        Construction Works{" "}
        <CurrencyEuroIcon className={`-ml-2 ${iconValues}`} />
        <CurrencyDollarIcon className={iconValues} />
        <CurrencyPoundIcon className={iconValues} />
      </p>
      <p className="mt-4 text-center text-lg text-gray-400">
        We’re currently working on building the best business banking experience
        for you. Thank you for your patience.
      </p>

      <GoHome />
    </div>
  );
}

export default CreateBusinessAccount;
