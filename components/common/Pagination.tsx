import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Pagination() {
  return (
    <ul className="flex justify-center gap-1.5">
      <li>
        <PaginationItem>
          <ChevronLeftIcon className="mx-auto size-4.5" />
        </PaginationItem>
      </li>

      {Array.from({ length: 3 }, (_, index) => index).map((item) => (
        <li key={item}>
          <PaginationItem isActive={item === 1}>{item + 1}</PaginationItem>
        </li>
      ))}

      <li>
        <PaginationItem>
          <ChevronRightIcon className="mx-auto size-4.5" />
        </PaginationItem>
      </li>
    </ul>
  );
}

function PaginationItem({
  children,
  isActive = false,
}: {
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <button
      className={`size-8.5 cursor-pointer rounded-sm border-1 border-gray-500 text-gray-500 ${isActive ? "border-green-400 bg-green-400 text-white" : "hover:bg-stone-100"} `}
    >
      {children}
    </button>
  );
}

export default Pagination;
