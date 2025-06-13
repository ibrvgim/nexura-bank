import Image from "next/image";
import Link from "next/link";

function AuthPattern({
  title,
  path,
  children,
  submitButton,
}: {
  title: string;
  path: string;
  children: React.ReactNode;
  submitButton: React.ReactNode;
}) {
  const isRegister = path.includes("login");

  return (
    <div className="mx-auto mt-14 flex w-1/2 flex-col items-center">
      <p className="text-3xl font-bold tracking-wide text-gray-700">{title}</p>

      <div className="mt-3 text-sm text-gray-500 *:inline-block">
        <p>
          {isRegister ? "Already have an account?" : "Do not have an account?"}
        </p>
        <Link
          href={path}
          replace
          className="ml-1 font-medium transition-all hover:text-green-500"
        >
          {isRegister ? "Log in" : "Register"}
        </Link>
      </div>

      <form className="mt-10 w-full">
        {children}

        {!isRegister && (
          <Link
            href=""
            className="float-right mt-3 inline-block border-b-2 text-sm text-gray-400 transition-colors hover:text-gray-800"
          >
            Problem with logging in?
          </Link>
        )}

        {submitButton}
      </form>

      <div className="flex w-full items-center gap-3 py-7">
        <div className="h-[1px] flex-1 rounded-full bg-gray-500">&nbsp;</div>
        <p className="text-gray-500">OR</p>
        <div className="h-[1px] flex-1 rounded-full bg-gray-500">&nbsp;</div>
      </div>

      <button className="w-full cursor-pointer rounded-full border-1 border-gray-400 py-2 transition-all duration-300 hover:border-gray-800 hover:bg-gray-50">
        <Image
          src="/logos/google.png"
          alt="google icon image"
          height={25}
          width={25}
          className="mx-auto"
        />
      </button>

      {isRegister && (
        <p className="mt-10 text-sm text-gray-500">
          By registering, you accept our{" "}
          <span className="cursor-pointer font-medium text-gray-700">
            Terms of Use
          </span>{" "}
          and{" "}
          <span className="cursor-pointer font-medium text-gray-700">
            Privacy Policy.
          </span>
        </p>
      )}
    </div>
  );
}

export default AuthPattern;
