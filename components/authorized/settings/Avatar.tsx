"use client";

import { UserIcon, CameraIcon } from "@heroicons/react/24/outline";

function Avatar() {
  return (
    <>
      <label
        htmlFor="avatar"
        className="relative mx-auto mb-5 inline-block rounded-full border border-stone-400 bg-stone-300 p-7 transition-all hover:opacity-80"
        title="Add Photo"
      >
        <UserIcon className="size-10" />

        <span className="absolute right-0 bottom-0 rounded-full border-2 border-white bg-green-300 p-1">
          <CameraIcon className="size-5" />
        </span>
      </label>

      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
        hidden
      />
    </>
  );
}

export default Avatar;
