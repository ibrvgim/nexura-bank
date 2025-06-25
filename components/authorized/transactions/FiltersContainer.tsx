import FormInput from "@/components/forms/FormInput";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface FilterValuesType {
  date: string | Date;
  action: "all" | "withdrawn" | "pawn";
  attachment: "all" | "withAttachment" | "noAttachment";
}

function FiltersContainer() {
  const [filterValues, setFilterValues] = useState<FilterValuesType>({
    date: "all",
    action: "all",
    attachment: "all",
  });

  function handleFilter(key: string, value: string) {
    setFilterValues((prev) => ({ ...prev, [key]: value }));
  }

  const isFilterOnDefaultValues =
    filterValues.date === "all" &&
    filterValues.action === "all" &&
    filterValues.attachment === "all";

  return (
    <form className="relative mx-12 my-16 h-full">
      <FilterCategoryPattern
        categoryTitle="Filter by Date"
        clearCategoryOnClick={() => handleFilter("date", "all")}
        isDefaultFilterValue={filterValues.date === "all"}
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

      <ButtonsContainer isClearButtonActive={isFilterOnDefaultValues} />
    </form>
  );
}

function FilterCategoryPattern({
  children,
  categoryTitle,
  clearCategoryOnClick,
  isDefaultFilterValue,
}: {
  children: React.ReactNode;
  categoryTitle: string;
  clearCategoryOnClick?: () => void;
  isDefaultFilterValue?: boolean;
}) {
  return (
    <>
      <FilterTitle
        onClick={clearCategoryOnClick}
        isDefaultFilterValue={isDefaultFilterValue}
      >
        {categoryTitle}
      </FilterTitle>
      <div className="flex flex-wrap gap-x-2 gap-y-3">{children}</div>
    </>
  );
}

function FilterTitle({
  children,
  onClick,
  isDefaultFilterValue = true,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  isDefaultFilterValue?: boolean;
}) {
  return (
    <span className="mt-12 mb-6 flex items-center justify-between gap-1">
      <p className="font-medium text-green-500">{children}:</p>

      {!isDefaultFilterValue && (
        <button
          type="button"
          className="cursor-pointer text-gray-400 transition-all duration-200 hover:text-red-400"
          onClick={onClick}
        >
          <XCircleIcon className="size-5" />
        </button>
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
}: {
  isClearButtonActive: boolean;
}) {
  return (
    <span className="absolute bottom-30 flex w-full items-end gap-2 text-sm font-medium *:flex-1">
      <button
        className="block cursor-pointer rounded-full border border-gray-500 py-1 text-center text-gray-500 transition-all duration-200 hover:border-green-500 hover:text-green-500 disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-400"
        disabled={isClearButtonActive}
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
