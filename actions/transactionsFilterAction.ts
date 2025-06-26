"use server";

import { redirect } from "next/navigation";

export async function transactionsFilterAction(_: unknown, formData: FormData) {
  const date = formData.get("date") as string;
  const action = formData.get("action") as string;
  const attachment = formData.get("attachment") as string;

  if (date || action || attachment) {
    redirect(
      `/transactions/?date=${date}&action=${action}&attachment=${attachment}`,
    );
  }
}
