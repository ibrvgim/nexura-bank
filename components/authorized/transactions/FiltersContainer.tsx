import FormInput from "@/components/forms/FormInput";
import Link from "next/link";

function FiltersContainer() {
  return (
    <form className="mx-12 my-16">
      <FilterTitle>Filter by Date</FilterTitle>

      <FilterButton noGap>Within a Month</FilterButton>
      <FilterButton>Within a Quarter</FilterButton>
      <FilterButton>Within a Year</FilterButton>

      <span className="mt-8 flex gap-3 *:flex-1">
        <FormInput label="From" name="dateFrom" type="date" optional last />
        <FormInput label="To" name="dateTo" type="date" optional last />
      </span>

      <FilterTitle>Filter by Action</FilterTitle>

      <FilterButton noGap>All</FilterButton>
      <FilterButton>Withdrawn Money</FilterButton>
      <FilterButton>Pawn Money</FilterButton>

      <FilterTitle>Filter by Attachments</FilterTitle>

      <FilterButton noGap>All</FilterButton>
      <FilterButton>With Attachment</FilterButton>
      <FilterButton>No Attachment</FilterButton>

      <span className="mt-30 flex items-end gap-2 text-sm font-medium *:flex-1">
        <Link
          href="/transactions"
          className="block rounded-full border border-gray-500 py-1 text-center transition-all duration-200 hover:border-green-400 hover:text-green-400"
        >
          Clear all
        </Link>

        <button className="cursor-pointer rounded-full border border-green-400 bg-green-400 py-1 text-white transition-all duration-200 hover:bg-transparent hover:text-green-400">
          Apply Filters
        </button>
      </span>
    </form>
  );
}

function FilterTitle({ children }: { children: React.ReactNode }) {
  return <p className="mt-12 mb-6 font-medium text-green-500">{children}:</p>;
}

function FilterButton({
  children,
  noGap = false,
}: {
  children: React.ReactNode;
  noGap?: boolean;
}) {
  return (
    <button
      type="button"
      className={`cursor-pointer rounded-full border-2 border-gray-500 px-6 py-1 text-sm font-medium tracking-wide text-gray-500 transition-all duration-200 hover:border-green-500 hover:text-green-500 ${noGap ? "" : "ml-2"}`}
    >
      {children}
    </button>
  );
}

export default FiltersContainer;
