import FormButton from "@/components/forms/FormButton";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

function ChatForm() {
  return (
    <form className="mx-auto mt-20 mb-24 w-1/2">
      <p className="mb-4 text-center text-5xl font-extrabold text-gray-700">
        Contact Nexura Team
      </p>
      <p className="mx-auto mb-12 w-3/4 text-center text-gray-400">
        Please describe the problem in detail and we will try to help you as
        soon as possible.
      </p>

      <label
        htmlFor="problemDescription"
        className="mb-2 inline-block text-sm font-medium"
      >
        Describe the Problem:
      </label>
      <textarea
        id="problemDescription"
        name="problemDescription"
        placeholder="Start typing here..."
        className="max-h-96 min-h-40 w-full rounded-lg border border-gray-400 px-4 py-3 placeholder:text-sm placeholder:text-gray-400"
      />

      <label
        htmlFor="problemFile"
        className="mt-4 flex w-full cursor-pointer items-center gap-3 rounded-lg border border-gray-400 px-4 py-6 text-xs text-gray-800"
      >
        <ArrowUpTrayIcon className="size-5" />
        <span className="text-sm font-medium tracking-wider uppercase">
          Upload File
        </span>
        <span className="text-gray-500">[PDF, JPG, PNG, WEBP] - Max. 5MB</span>
      </label>
      <input
        id="problemFile"
        type="file"
        accept=".pdf, .jpg, .png, .webp"
        hidden
      />

      <span className="*:mt-8">
        <FormButton title="SEND" />
      </span>
    </form>
  );
}

export default ChatForm;
