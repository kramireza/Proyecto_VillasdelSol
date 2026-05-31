interface Props {
  status:
    | "ACTIVE"
    | "BLOCKED"
    | "EXPIRED";
}

export default function CardActionsPanel({
  status,
}: Props) {
  return (
    <>
      {status === "ACTIVE" && (
        <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl">
          Bloquear
        </button>
      )}

      {status === "BLOCKED" && (
        <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
          Reactivar
        </button>
      )}
    </>
  );
}