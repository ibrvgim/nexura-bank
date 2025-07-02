function NoteMessageCard({ note }: { note: string }) {
  return (
    <p className="w-full rounded-md bg-blue-100 px-8 py-3 text-center text-sm text-blue-800">
      <span className="text-xs font-semibold">NOTE:</span> {note}
    </p>
  );
}

export default NoteMessageCard;
