import Image from "next/image";

function NoTransactionsCard() {
  return (
    <div className="mt-4 flex h-full flex-col items-center justify-center gap-12 text-lg font-light text-gray-400">
      <Image
        src="/illustrations/transaction.svg"
        alt="pig with money image"
        height={300}
        width={300}
        draggable={false}
      />
      <p>You don&apos;t have any transaction yet.</p>
    </div>
  );
}

export default NoTransactionsCard;
