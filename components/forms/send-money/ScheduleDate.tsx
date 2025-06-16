import { useState } from "react";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import { SendAddMoneyFieldKeys } from "@/types/types";
import { getDaysBetweenDates, getFutureDate } from "@/utilities/formatDate";

function ScheduleDate({
  handleClose,
  handleFormData,
  selectedDate,
}: {
  handleClose: () => void;
  handleFormData: (key: SendAddMoneyFieldKeys, value: string) => void;
  selectedDate: string;
}) {
  const [date, setDate] = useState(selectedDate);
  const [error, setError] = useState("");

  function handleScheduledDate() {
    if (!date) return;
    const checklValidity = getDaysBetweenDates(new Date(), date);

    if (checklValidity >= 2) {
      handleFormData("arrivesBy", date);
      handleClose();
    } else setError("Schedule the correct date");
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
        minValue={getFutureDate()}
        directErros={error}
      />

      <span className="*:mt-4">
        <FormButton title="Schedule Date" onClick={handleScheduledDate} />
      </span>
    </div>
  );
}

export default ScheduleDate;
