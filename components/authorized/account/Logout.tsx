import { PowerIcon } from "@heroicons/react/24/solid";

function Logout() {
  return (
    <button className="mx-auto flex size-8 cursor-pointer justify-center text-stone-500 transition-all duration-300 hover:text-red-600">
      <PowerIcon />
    </button>
  );
}

export default Logout;
