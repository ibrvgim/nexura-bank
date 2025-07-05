async function PaymentItem({
  params,
}: {
  params: Promise<{ paymentID: string }>;
}) {
  const { paymentID } = await params;

  return <div>{paymentID}</div>;
}

export default PaymentItem;
