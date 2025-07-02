import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Pagination({
  onNext,
  onPrevious,
  handlePaginationDirect,
  pagination,
  totalPageNumber,
}: {
  onNext: () => void;
  onPrevious: () => void;
  handlePaginationDirect: (page: number) => void;
  pagination: number;
  totalPageNumber: number;
}) {
  return (
    <ul className="flex justify-center gap-1.5">
      <li>
        <PaginationItem onClick={onPrevious}>
          <ChevronLeftIcon className="mx-auto size-4.5" />
        </PaginationItem>
      </li>

      {Array.from({ length: totalPageNumber }, (_, index) => index).map(
        (item) => (
          <li key={item}>
            <PaginationItem
              isActive={item === pagination}
              onClick={() => handlePaginationDirect(item)}
            >
              {item + 1}
            </PaginationItem>
          </li>
        ),
      )}

      <li>
        <PaginationItem onClick={onNext}>
          <ChevronRightIcon className="mx-auto size-4.5" />
        </PaginationItem>
      </li>
    </ul>
  );
}

function PaginationItem({
  children,
  isActive = false,
  onClick,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`size-8.5 cursor-pointer rounded-sm border-1 border-gray-500 text-gray-500 transition-colors duration-200 ${isActive ? "border-green-400 bg-green-400 text-white" : "hover:bg-stone-100"} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Pagination;
