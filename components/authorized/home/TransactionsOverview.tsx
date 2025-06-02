import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

function TransactionsOverview() {
  return (
    <div className="my-15">
      <div className="mb-7 flex items-center justify-between">
        <p className="text-2xl font-medium">Recent Transactions</p>
        <Link
          href="/transactions"
          className="flex items-center gap-2 text-sm text-gray-400 transition-all duration-200 hover:text-gray-800"
        >
          See All
          <ArrowLongRightIcon className="size-4" />
        </Link>
      </div>

      <table className="w-full border-collapse">
        <tbody className="*:text-start">
          <tr className="border-b-1 border-b-gray-300 pb-4 text-sm">
            <th
              scope="row"
              className="py-5 text-start font-medium text-gray-700"
            >
              Urban Services
            </th>
            <td className="font-light text-gray-500">47657378359264974</td>
            <td className="font-light text-gray-500">23 May 2025</td>
            <td className="text-end text-green-500">+€48,00</td>
          </tr>

          <tr className="border-b-1 border-b-gray-300 pb-4 text-sm">
            <th
              scope="row"
              className="py-5 text-start font-medium text-gray-700"
            >
              Pixel Playground
            </th>
            <td className="font-light text-gray-500">59374993788747883</td>
            <td className="font-light text-gray-500">07 March 2025</td>
            <td className="text-end text-red-500">-€18,00</td>
          </tr>

          <tr className="border-b-1 border-b-gray-300 pb-4 text-sm">
            <th
              scope="row"
              className="py-5 text-start font-medium text-gray-700"
            >
              Savory Bites Bistro
            </th>
            <td className="font-light text-gray-500">84747478359247747</td>
            <td className="font-light text-gray-500">17 January 2025</td>
            <td className="text-end text-red-500">-€48,00</td>
          </tr>

          <tr className="border-b-1 border-b-gray-300 pb-4 text-sm">
            <th
              scope="row"
              className="py-5 text-start font-medium text-gray-700"
            >
              Urban Services
            </th>
            <td className="font-light text-gray-500">47657378359264974</td>
            <td className="font-light text-gray-500">23 May 2025</td>
            <td className="text-end text-green-500">+€48,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsOverview;
