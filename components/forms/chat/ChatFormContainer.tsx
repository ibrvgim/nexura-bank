"use client";

import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import FormButton from "../FormButton";
import { useActionState, useEffect, useState } from "react";
import { chatFormAction } from "@/actions/chatFormAction";
import SuccessWindow from "./SuccessWindow";

function ChatFormContainer() {
  const [isSuccessfull, formAction, isPending] = useActionState(
    chatFormAction,
    null,
  );
  const [chat, setChat] = useState({
    descriptionValue: "",
    descriptionError: "",
    successWindow: false,
  });

  function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setChat((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (
      chat.descriptionValue.trim() &&
      chat.descriptionValue.trim().length <= 50
    )
      setChat((prev) => ({
        ...prev,
        descriptionError: "Minimum 50 characters",
      }));
    else setChat((prev) => ({ ...prev, descriptionError: "" }));
  }, [chat.descriptionValue]);

  if (isSuccessfull) return <SuccessWindow />;

  return (
    <form action={formAction} className="mx-auto mt-14 mb-12 w-1/2">
      <p className="mb-4 text-center text-5xl font-extrabold text-gray-700">
        Contact Nexura Team
      </p>
      <p className="mx-auto mb-12 w-3/4 text-center text-gray-400">
        Please describe the problem in detail and we will try to help you as
        soon as possible.
      </p>

      <label
        htmlFor="descriptionValue"
        className="mb-2 block text-sm font-medium"
      >
        Describe the Problem:
        {chat?.descriptionError && (
          <span className="float-right inline-block font-normal text-red-500">
            {chat.descriptionError}
          </span>
        )}
      </label>
      <textarea
        id="descriptionValue"
        name="descriptionValue"
        value={chat.descriptionValue}
        onChange={handleDescriptionChange}
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
        <FormButton
          type="submit"
          title="SEND"
          active={
            chat.descriptionValue.trim().length > 50 && !chat.descriptionError
          }
          isPending={isPending}
        />
      </span>
    </form>
  );
}

export default ChatFormContainer;
