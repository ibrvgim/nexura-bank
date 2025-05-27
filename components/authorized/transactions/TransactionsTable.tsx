function TransactionsTable() {
  return (
    <table className="mt-7 w-full border-collapse">
      <thead>
        <tr className="border-b-1 border-b-gray-300 *:text-start *:text-xs *:font-normal *:text-gray-500">
          <th scope="col" className="py-3">
            Receiver&apos;s Name
          </th>
          <th scope="col">Transaction ID</th>
          <th scope="col">Transaction Date</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>

      <tbody className="*:text-start">
        <tr className="border-b-1 border-b-gray-300 pb-4 *:text-start *:text-sm">
          <th scope="row" className="py-5 font-medium text-gray-700">
            Urban Services
          </th>
          <td className="font-light text-gray-500">47657378359264974</td>
          <td className="font-light text-gray-500">23 May 2025</td>
          <td className="text-green-500">+€48,00</td>
        </tr>

        <tr className="border-b-1 border-b-gray-300 pb-4 *:text-start *:text-sm">
          <th scope="row" className="py-5 font-medium text-gray-700">
            Pixel Playground
          </th>
          <td className="font-light text-gray-500">59374993788747883</td>
          <td className="font-light text-gray-500">07 March 2025</td>
          <td className="text-red-500">-€18,00</td>
        </tr>

        <tr className="pb-4 *:text-start *:text-sm">
          <th scope="row" className="py-5 font-medium text-gray-700">
            Savory Bites Bistro
          </th>
          <td className="font-light text-gray-500">84747478359247747</td>
          <td className="font-light text-gray-500">17 January 2025</td>
          <td className="text-red-500">-€48,00</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TransactionsTable;
