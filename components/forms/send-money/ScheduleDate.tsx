import { useState } from "react";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import { formatIntlDate } from "@/utilities/formatDate";
import { SendAddMoneyFieldKeys } from "@/types/types";

function futureDate() {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  return `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${currentDate.getDate()}`;
}

function ScheduleDate({
  handleClose,
  handleFormData,
}: {
  handleClose: () => void;
  handleFormData: (key: SendAddMoneyFieldKeys, value: string) => void;
}) {
  const [date, setDate] = useState(futureDate);

  function handleScheduledDate() {
    const scheduledDate = formatIntlDate(date || futureDate());
    handleFormData("arrivesBy", scheduledDate);
    handleClose();
  }

  return (
    <div>
      <p className="mx-auto mb-4 w-3/4 text-center text-4xl font-extrabold uppercase">
        Create a scheduled transfer
      </p>
      <p className="mb-12 text-center text-gray-500">
        You are able to choose to send this transfer at a later date. You will
        need to have a sufficient balance closer to the scheduled date to
        transfer the money.
      </p>

      <FormInput
        label="Select Date"
        name="arrivesBy"
        type="date"
        optional
        value={date}
        onChange={(e) => setDate(e.target.value)}
        minValue={futureDate()}
      />

      <span className="*:mt-4">
        <FormButton title="Schedule Date" onClick={handleScheduledDate} />
      </span>
    </div>
  );
}

export default ScheduleDate;
