import FormInput from "@/components/forms/FormInput";
import { useActionState, useState } from "react";
import { transactionsFilterAction } from "@/actions/transactionsFilterAction";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterValuesType {
  date: string | Date;
  action: "all" | "withdrawn" | "pawn";
  attachment: "all" | "withAttachment" | "noAttachment";
}

function FiltersContainer({
  handleCloseFilters,
}: {
  handleCloseFilters: () => void;
}) {
  const params = useSearchParams();
  const date = params.get("date");
  const action = params.get("action") as "all" | "withdrawn" | "pawn";
  const attachment = params.get("attachment") as
    | "all"
    | "withAttachment"
    | "noAttachment";

  const initialState: FilterValuesType = {
    date: date || "all",
    action: action || "all",
    attachment: attachment || "all",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, formAction] = useActionState(transactionsFilterAction, null);
  const [filterValues, setFilterValues] = useState(initialState);

  function handleFilter(key: string, value: string) {
    if (key === "date" && filterValues[key] === value)
      setFilterValues((prev) => ({ ...prev, [key]: "all" }));
    else setFilterValues((prev) => ({ ...prev, [key]: value }));
  }

  function resetValues() {
    const isNotDefaultValues =
      (date && date !== "all") ||
      (action && action !== "all") ||
      (attachment && attachment !== "all");

    setFilterValues({
      date: "all",
      action: "all",
      attachment: "all",
    });

    if (isNotDefaultValues) handleCloseFilters();
  }

  const isFilterOnDefaultValues =
    filterValues.date === "all" &&
    filterValues.action === "all" &&
    filterValues.attachment === "all";

  return (
    <form className="relative mx-12 my-16 h-full" action={formAction}>
      {Object.entries(filterValues).map((item) => (
        <input key={item[0]} name={item[0]} value={item[1]} readOnly hidden />
      ))}

      <FilterCategoryPattern
        categoryTitle="Filter by Date"
        description={
          filterValues.date !== "all" ? "Click again to remove filter." : ""
        }
      >
        <FilterOption
          name="date"
          valueTag="month"
          handleFilter={handleFilter}
          isActive={filterValues.date === "month"}
        >
          Within a Month
        </FilterOption>
        <FilterOption
          name="date"
          valueTag="quarter"
          handleFilter={handleFilter}
          isActive={filterValues.date === "quarter"}
        >
          Within a Quarter
        </FilterOption>
        <FilterOption
          name="date"
          valueTag="year"
          handleFilter={handleFilter}
          isActive={filterValues.date === "year"}
        >
          Within a Year
        </FilterOption>
      </FilterCategoryPattern>

      <span className="mt-8 flex gap-3 *:flex-1">
        <FormInput label="From" name="dateFrom" type="date" optional last />
        <FormInput label="To" name="dateTo" type="date" optional last />
      </span>

      <FilterCategoryPattern categoryTitle="Filter by Action">
        <FilterOption
          name="action"
          valueTag="all"
          handleFilter={handleFilter}
          isActive={filterValues.action === "all"}
        >
          All
        </FilterOption>
        <FilterOption
          name="action"
          valueTag="withdrawn"
          handleFilter={handleFilter}
          isActive={filterValues.action === "withdrawn"}
        >
          Withdrawn Money
        </FilterOption>
        <FilterOption
          name="action"
          valueTag="pawn"
          handleFilter={handleFilter}
          isActive={filterValues.action === "pawn"}
        >
          Pawn Money
        </FilterOption>
      </FilterCategoryPattern>

      <FilterCategoryPattern categoryTitle="Filter by Attachments">
        <FilterOption
          name="attachment"
          valueTag="all"
          handleFilter={handleFilter}
          isActive={filterValues.attachment === "all"}
        >
          All
        </FilterOption>
        <FilterOption
          name="attachment"
          valueTag="withAttachment"
          handleFilter={handleFilter}
          isActive={filterValues.attachment === "withAttachment"}
        >
          With Attachment
        </FilterOption>
        <FilterOption
          name="attachment"
          valueTag="noAttachment"
          handleFilter={handleFilter}
          isActive={filterValues.attachment === "noAttachment"}
        >
          No Attachment
        </FilterOption>
      </FilterCategoryPattern>

      <ButtonsContainer
        isClearButtonActive={isFilterOnDefaultValues}
        resetValues={resetValues}
      />
    </form>
  );
}

function FilterCategoryPattern({
  children,
  categoryTitle,
  description,
}: {
  children: React.ReactNode;
  categoryTitle: string;
  description?: string;
}) {
  return (
    <>
      <FilterTitle description={description}>{categoryTitle}</FilterTitle>
      <div className="flex flex-wrap gap-x-2 gap-y-3">{children}</div>
    </>
  );
}

function FilterTitle({
  children,
  description,
}: {
  children: React.ReactNode;
  description?: string;
}) {
  return (
    <span className="mt-12 mb-6 block">
      <p className="mb-1 font-medium text-green-500">{children}:</p>
      {description && (
        <p className="block text-xs font-light tracking-wider text-gray-500">
          {description}
        </p>
      )}
    </span>
  );
}

function FilterOption({
  children,
  name,
  valueTag,
  handleFilter,
  isActive = false,
}: {
  children: React.ReactNode;
  name: string;
  valueTag: string;
  handleFilter: (key: string, value: string) => void;
  isActive: boolean;
}) {
  return (
    <button
      type="button"
      className={`cursor-pointer rounded-full border-2 px-6 py-1 text-sm font-medium tracking-wide transition-all duration-200 ${isActive ? "border-green-400 bg-green-400 text-white" : "border-gray-500 text-gray-500 hover:border-green-500 hover:text-green-500"}`}
      onClick={() => handleFilter(name, valueTag)}
    >
      {children}
    </button>
  );
}

function ButtonsContainer({
  isClearButtonActive,
  resetValues,
}: {
  isClearButtonActive: boolean;
  resetValues: () => void;
}) {
  const router = useRouter();

  return (
    <span className="absolute bottom-30 flex w-full items-end gap-2 text-sm font-medium *:flex-1">
      <button
        type="button"
        className="block cursor-pointer rounded-full border border-gray-500 py-1 text-center text-gray-500 transition-all duration-200 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-400"
        disabled={isClearButtonActive}
        onClick={() => {
          resetValues();
          router.push("/transactions");
        }}
      >
        Clear all
      </button>

      <button className="cursor-pointer rounded-full border border-green-400 bg-green-400 py-1 text-white transition-all duration-200 hover:border-green-500 hover:bg-green-500">
        Apply Filters
      </button>
    </span>
  );
}

export default FiltersContainer;
