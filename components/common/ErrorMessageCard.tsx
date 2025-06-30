function ErrorMessageCard({ error }: { error: string }) {
  return (
    <p className="w-full rounded-md bg-red-100 px-8 py-3 text-center text-sm text-red-700">
      {error}
    </p>
  );
}

export default ErrorMessageCard;
